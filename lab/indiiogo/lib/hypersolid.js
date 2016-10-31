(function(Hypersolid) {

  var lines = [];
  var circles = [];


  DEFAULT_VIEWPORT_SCALE = 2; // Maximum distance from origin (in math units) that will be displayed on the canvas
  DEFAULT_CHECKBOX_VALUES = {
    perspective: { checked: true },
    indices: { checked: false },
    edges: { checked: true }
  };

  /* End constants. */

  /* Begin classes. */

  Hypersolid.Shape = function() {
    return new Shape(Array.prototype.slice.call(arguments, 0));
  };
  function Shape(argv) {
    var self = this,
      vertices = argv[0],
      edges = argv[1];

    // Rotations will always be relative to the original shape to avoid rounding errors.
    // This is a structure for caching the rotated vertices.
    var rotatedVertices = new Array(vertices.length);
    copyVertices();

    // This is where we store the current rotations about each axis.
    var rotations = { xy: 0, xz: 0, xw: 0, yz: 0, yw: 0, zw: 0 };

    var rotationOrder = {
      yz: 1,
      xw: 1,
      yw: 1,
      zw: 1,
      xy: 1,
      xz: 1,
    };

    // Multiplication by vector rotation matrices of dimension 4
    var rotateVertex = {
      xy: function(v, s, c) {
        tmp = c * v.x + s * v.y;
        v.y = -s * v.x + c * v.y;
        v.x = tmp;
      },
      xz: function(v, s, c) {
        tmp = c * v.x + s * v.z;
        v.z = -s * v.x + c * v.z;
        v.x = tmp;
      },
      xw: function(v, s, c) {
        tmp = c * v.x + s * v.w;
        v.w = -s * v.x + c * v.w;
        v.x = tmp;
      },
      yz: function(v, s, c) {
        tmp = c * v.y + s * v.z;
        v.z = -s * v.y + c * v.z;
        v.y = tmp;
      },
      yw: function(v, s, c) {
        tmp = c * v.y - s * v.w;
        v.w = s * v.y + c * v.w;
        v.y = tmp;
      },
      zw: function(v, s, c) {
        tmp = c * v.z - s * v.w;
        v.w = s * v.z + c * v.w;
        v.z = tmp;
      }
    };

    var eventCallbacks = {};

    self.getOriginalVertices = function() {
      return vertices;
    };

    self.getVertices = function() {
      return rotatedVertices;
    };

    self.getEdges = function() {
      return edges;
    };

    self.getRotations = function() {
      return rotations;
    };

    // This will copy the original shape and put a rotated version into rotatedVertices
    self.rotate = function(axis, theta)  {
      addToRotation(axis, theta);
      applyRotations();
      triggerEventCallbacks('rotate');
    };

    self.on = function(eventName, callback) {
      if (eventCallbacks[eventName] === undefined) {
        eventCallbacks[eventName] = [];
      }
      eventCallbacks[eventName].push(callback);
    };

    function triggerEventCallbacks(eventName) {
      if (eventCallbacks[eventName] !== undefined) {
        for (index in eventCallbacks[eventName]) {
          eventCallbacks[eventName][index].call(self);
        }
      }
    }

    function addToRotation(axis, theta) {
      rotations[axis] = (rotations[axis] + theta) % (2 * Math.PI);
    }

    function applyRotations() {
      copyVertices();

      for (var axis in rotationOrder) {
        // sin and cos precomputed for efficiency
        var s = Math.sin(rotations[axis]);
        var c = Math.cos(rotations[axis]);

        for (var i in vertices)
        {
          rotateVertex[axis](rotatedVertices[i], s, c);
        }
      }
    }

    function copyVertices() {
      for (var i in vertices) {
        var vertex = vertices[i];
        rotatedVertices[i] = {
          x: vertex.x,
          y: vertex.y,
          z: vertex.z,
          w: vertex.w
        };
      }
    }
  }

  Hypersolid.Viewport = function() {
    return new Viewport(Array.prototype.slice.call(arguments, 0));
  };
  function Viewport(argv) {
    var self = this,
      shape = argv[0],
      svg = d3.selectAll(argv[1])
      options = argv[2]
      ;

    options = options || {};

    var scale = options.scale || DEFAULT_VIEWPORT_SCALE;
    // canvas.width = options.width || DEFAULT_VIEWPORT_WIDTH;
    // canvas.height = options.height || DEFAULT_VIEWPORT_HEIGHT;

    console.log(svg)

    svg.attr('width', options.width || DEFAULT_VIEWPORT_WIDTH);
    svg.attr('height', options.height || DEFAULT_VIEWPORT_HEIGHT);

    var bound = Math.min(options.width, options.width) / 2;

    // var context = canvas.getContext('2d');

    var checkboxes = options.checkboxes || DEFAULT_CHECKBOX_VALUES;

    var clicked = false;
    var startCoords;

    self.draw = function() {
      var vertices = shape.getVertices();
      var edges = shape.getEdges();

      // context.clearRect(0, 0, canvas.width, canvas.height);
      var adjusted = [];
      for (var i in vertices) {
        if (checkboxes.perspective.checked) {
          var zratio = vertices[i].z / scale;
          adjusted[i] = {
            x: Math.floor(options.width / 2 + (0.90 + zratio * 0.30) * bound * (vertices[i].x / scale)) + 0.5,
            y: Math.floor(options.height / 2 - (0.90 + zratio * 0.30) * bound * (vertices[i].y / scale)) + 0.5,
            z: 0.50 + 0.40 * zratio,
            w: 121 + Math.floor(134 * vertices[i].w / scale)
          };
        }
        else {
          adjusted[i] = {
            x: Math.floor(options.width / 2 + bound * (vertices[i].x / scale)) + 0.5,
            y: Math.floor(options.height / 2 - bound * (vertices[i].y / scale)) + 0.5,
            z: 0.50 + 0.40 * vertices[i].z / scale,
            w: 121 + Math.floor(134 * vertices[i].w / scale)
          };
        }
      }

      if (checkboxes.edges.checked) {
        for (var i in edges) {
          var x = [adjusted[edges[i][0]].x, adjusted[edges[i][1]].x];
          var y = [adjusted[edges[i][0]].y, adjusted[edges[i][1]].y];
          var z = [adjusted[edges[i][0]].z, adjusted[edges[i][1]].z];
          var w = [adjusted[edges[i][0]].w, adjusted[edges[i][1]].w];
          // context.beginPath();
          // context.moveTo(x[0], y[0]);
          // context.lineTo(x[1], y[1]);
          // context.closePath();

          // svg
          var line = lines[i];
          if (line === undefined) {
            line = svg.append('line');
            line.style("stroke", "#00fbfd");
            line.style("stroke-width", 1);
            // line.style('stroke', d3.rgb(Math.random()*256, Math.random()*256, Math.random()*256) );
            lines.push(line)
          }

          line.style("opacity", z[1]);
          line.transition().duration(50).ease('inear-in-out')
            .attr('x1', x[0])
            .attr('x2', x[1])
            .attr('y1', y[0])
            .attr('y2', y[1]);

          // var gradient = context.createLinearGradient(x[0], y[0], x[1], y[1]); // Distance fade effect
          // gradient.addColorStop(0, 'rgba(' + w[0] + ',94,' + (125-Math.round(w[0]/2)) +', ' + z[0] + ')');
          // gradient.addColorStop(1, 'rgba(' + w[1] + ',94,' + (125-Math.round(w[0]/2)) +', ' + z[1] + ')');
          // context.strokeStyle = gradient;
          // context.stroke();
        }
      }

      if (!checkboxes.indices.checked) {
        for (var i in adjusted) {

          var circle = circles[i];
          if (circle === undefined) {
            circle = svg.append('circle');
            circle.style('r', 2);
            circles.push(circle)
          }
          
          circle.style('fill', '#00fbfd');

          circle.transition().duration(50).ease('inear-in-out')
            .attr('cx', adjusted[i].x)
            .attr('cy', adjusted[i].y);


          // context.fillText(i.toString(), adjusted[i].x, adjusted[i].y);
        }
      }
    };

    // canvas.onmousedown = function(e) { 
    //   startCoords = mouseCoords(e, canvas);
    //   startCoords.x -= Math.floor(canvas.width / 2);
    //   startCoords.y = Math.floor(canvas.height / 2) - startCoords.y;
    //   clicked = true;
    // };

    // document.onmousemove = function(e) {
    //   if (!clicked) {
    //     return true;
    //   }

    //   var currCoords = mouseCoords(e, canvas);
    //   currCoords.x -= Math.floor(canvas.width / 2);
    //   currCoords.y = Math.floor(canvas.height / 2) - currCoords.y;
    //   var motion = { 'x': currCoords.x - startCoords.x, 'y': currCoords.y - startCoords.y };

    //   if (e.shiftKey && (e.altKey || e.ctrlKey)) {
    //     shape.rotate('xy', Math.PI * motion.x / bound); // Full canvas drag ~ 2*PI
    //     shape.rotate('zw', Math.PI * motion.y / bound);
    //   }
    //   else if (e.shiftKey) {
    //     // Interpretation of this rotation varies between left- and right- brained users
    //     shape.rotate('xw', Math.PI * motion.x / bound);
    //     shape.rotate('yw', Math.PI * motion.y / bound);
    //   }
    //   else {
    //     shape.rotate('xz', Math.PI * motion.x / bound);
    //     shape.rotate('yz', Math.PI * motion.y / bound);
    //   }

    //   startCoords = currCoords;

    //   self.draw();
    // };

    document.onmouseup = function() {
      clicked = false;
    };

    checkboxes.onchange = function() {
      self.draw();
    };
  }

  /* End classes. */

  /* Begin methods. */

  // parse ascii files from http://paulbourke.net/geometry/hyperspace/
  Hypersolid.parseVEF = function(text) {
    var lines = text.split("\n");
    var nV = parseInt(lines[0]);  // number of vertices
    var nE = parseInt(lines[1+nV]);  // number of edges
    var nF = parseInt(lines[2+nV+nE]);  // number of faces
    var vertices = lines.slice(1,1+nV).map(function(line) {
      var d = line.split("\t").map(parseFloat);
      return {
        x: d[0],
        y: d[1],
        z: d[2],
        w: d[3],
      }
    });
    var edges = lines.slice(2+nV,2+nV+nE).map(function(line) {
      var d = line.replace("\s","").split("\t").map(function(vertex) { return parseInt(vertex); });
      return [d[0], d[1]];;
    });
    var faces = lines.slice(3+nV+nE,3+nV+nE+nF).map(function(line) {
      var d = line.replace("\s","").split("\t").map(function(edge) { return parseInt(edge); });
      return d;
    });
    return [vertices,edges,faces]
  };

  /* End methods. */

  /* Begin helper routines. */

  function mouseCoords(e, element) { // http://answers.oreilly.com/topic/1929-how-to-use-the-canvas-and-draw-elements-in-html5/
    var x;
    var y;
    if (e.pageX || e.pageY) { 
      x = e.pageX;
      y = e.pageY;
    }
    else { 
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
    } 
    x -= element.offsetLeft;
    y -= element.offsetTop;
    return { 'x': x, 'y': y };
  }

  /* End helper routines. */

})(window.Hypersolid = window.Hypersolid || {});
