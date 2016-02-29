if (!metaballs) var metaballs = {};

metaballs.paramsCreator = function () {
    this.width = 300;
    this.webinar_name = 'название';
    this.isPaid = false;
    this.black = false;
    this.isDrawInside = true;
    this.numOutlines = 2;
    this.numFills = 3;

    this.maxSize = 35;


    this.RENDER = function () {
      console.log(this);
        var logo = metaballs.renderLogoParams(this);
        var content = document.getElementById('logo');
        content.innerHTML = '';
        content.appendChild(logo);
    };
};




metaballs.params = new metaballs.paramsCreator();
metaballs.gui = new dat.GUI();
metaballs.gui.add(metaballs.params, 'width');
metaballs.gui.add(metaballs.params, 'webinar_name');
metaballs.gui.add(metaballs.params, 'isPaid');
metaballs.gui.add(metaballs.params, 'isDrawInside');

metaballs.gui.add(metaballs.params, 'numOutlines', 0, 5).step(1);
metaballs.gui.add(metaballs.params, 'numFills', 0, 5).step(1);
metaballs.gui.add(metaballs.params, 'maxSize');

metaballs.gui.add(metaballs.params, 'black');

metaballs.gui.add(metaballs.params, 'RENDER');



$('#save').click(function(){
  encode_as_img_and_link()
});

function encode_as_img_and_link(){
  var html = $('#logo>svg')[0];
  var serializer = new XMLSerializer();
  var result = serializer.serializeToString(html);
  var b64 = window.btoa(result);
  $("body>a").remove()
  $("body").append($("<a href-lang='image/svg+xml'  download='file.svg' href='data:image/svg+xml;base64,\n"+b64+"' title='file.svg'>Сохранить</a>"));
}

//
