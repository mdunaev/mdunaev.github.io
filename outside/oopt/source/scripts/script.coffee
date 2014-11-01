#   SETTINGS

viewer = new Cesium.Viewer('cesiumContainer',
    {
        timeline: false,
        baseLayerPicker: false,
        infoBox: false,
        navigationHelpButton: false,
        geocoder: false,
        animation: false,
        scene3DOnly: true,
        fullscreenButton: false,
        imageryProvider: new Cesium.BingMapsImageryProvider({
            url : 'http://dev.virtualearth.net',
            key : 'Ail9PAst_7-T0BfqYAZjK4fVngfHJ3Fjg_ckK6eX8ro_xXwH2HcYUr_cJVDanhTV',
            maximumLevel : 500,
            mapStyle : Cesium.BingMapsStyle.AERIAL_WITH_LABELS
        })
    }
)

#   MAPS TILE
#osm = new Cesium.OpenStreetMapImageryProvider({
#    maximumLevel : 500,
#});
##osm_map = viewer.scene.imageryLayers.addImageryProvider( osm )
#
#bing = new Cesium.BingMapsImageryProvider({
#    url : 'http://dev.virtualearth.net',
#    key : 'Ail9PAst_7-T0BfqYAZjK4fVngfHJ3Fjg_ckK6eX8ro_xXwH2HcYUr_cJVDanhTV',
#    maximumLevel : 500,
#    mapStyle : Cesium.BingMapsStyle.AERIAL_WITH_LABELS
#});
#bing_map = viewer.scene.imageryLayers.addImageryProvider( bing )



#   NORTH POLE CIRCLE
circleGeometry = new Cesium.CircleGeometry({
    center : Cesium.Cartesian3.fromDegrees(90.0, 90.0),
    radius : 560000.0,
    vertexFormat : Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
})



redCircleInstance = new Cesium.GeometryInstance({
    geometry : circleGeometry,
    attributes : {
        color : Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(0.71, 0.816, 0.816, 1))
    }
})

pole_primitive = new Cesium.Primitive({
    geometryInstances: [redCircleInstance],
    appearance: new Cesium.PerInstanceColorAppearance({
        closed: true
    })
})
pole_primitive.show = false
viewer.scene.primitives.add(pole_primitive)





scene = viewer.scene;
primitives = scene.primitives;
oopt = {}

popups_data = []

selected_polygon_name = ''

#   SCENE RESIZE

resize = ()->
    $('#cesiumContainer').css('width', parseInt($(document).width())-200+'px')

resize()
$(window).on('resize', resize)



#   HOME BUTTON OVERRIDE
viewer.homeButton.viewModel.command.beforeExecute.addEventListener(
    (commandInfo)->
        fly_to_Russia()
        commandInfo.cancel = true
)

fly_to_Russia = ()->
    scene.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(85, 60, 10000000.0),
        duration: 3
    })

#   CAMERA ON RUSSIAN AT START
scene.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(85, 60, 10000000.0),
    duration: 0
});


#    DATA LOADER
load_np = ()->
    dataSource = new Cesium.GeoJsonDataSource()
    dataSource.loadUrl("ndata/np-bcc.topojson").then( ()->
        viewer.dataSources.add(dataSource)

        entities = dataSource.entities.entities
        mat_property = Cesium.ColorMaterialProperty.fromColor( new Cesium.Color(0, 0.3, 0.9, 0.6) );
        for entity in entities
            if entity.polygon
                entity.polygon.material = mat_property;
                entity.polygon.outline = new Cesium.ConstantProperty(false);
                entity.isNP = true
                if !oopt[entity.properties.Name_en]
                    oopt[entity.properties.Name_en] = []
                oopt[entity.properties.Name_en].push(entity)
                oopt[entity.properties.Name_en]._id = entity.properties.ids_ID

        load_zp()
    )
load_np()

load_zp = ()->
    dataSource = new Cesium.GeoJsonDataSource()
    dataSource.loadUrl("ndata/zp-bcc.topojson").then( ()->
        viewer.dataSources.add(dataSource)

        entities = dataSource.entities.entities
        mat_property = Cesium.ColorMaterialProperty.fromColor( new Cesium.Color(0, 0.9, 0.3, 0.6) )
        for entity in entities
            if entity.polygon
                entity.polygon.material = mat_property
                entity.polygon.outline = new Cesium.ConstantProperty(false)
                entity.isNP = false
                if !oopt[entity.properties.Name_en]
                    oopt[entity.properties.Name_en] = []
                oopt[entity.properties.Name_en].push(entity)
                oopt[entity.properties.Name_en]._id = entity.properties.ids_ID

        build_pups()
    )

build_pups = ()->
    billboards = scene.primitives.add(new Cesium.BillboardCollection())

    keys = []
    for key of oopt
        keys.push(key)
    keys = keys.sort()


    for entity_key in keys

        $(".left_menu").append('<div>')
        $(".left_menu div:last-child").text(entity_key).on('click', (e)->
            $('.popup').hide()
            text = $(this).text()
            rect = get_oopt_rect(text)
            scene.camera.flyToRectangle({destination: rect})
            selected_polygon_name = text
            setTimeout(open_menu, 100)
            e.stopPropagation()

        )

        if oopt[entity_key][0].isNP
            color = new Cesium.Color(0, 0.3, 0.9, 1)
            $(".left_menu div:last-child").addClass('np')
        else
            $(".left_menu div:last-child").addClass('zp')
            color = new Cesium.Color(0, 0.9, 0.3, 1)

        rect = get_oopt_rect(entity_key)

        center = Cesium.Rectangle.center(rect)
        center = [center.latitude, center.longitude]
        if entity_key == 'Ostrov Vrangelya'
            center = [rect.north, rect.east]


        oopt[entity_key].center = center

        billboards.add({
            image : 'images/dot.png',
            position : Cesium.Cartesian3.fromRadians(center[1], center[0], 20000),
            id: entity_key,
            color : color,
            translucencyByDistance : new Cesium.NearFarScalar(1500000, 0, 1600000, 1)
        })

    load_borders()


load_borders = ()->
    border_source = new Cesium.GeoJsonDataSource()
    border_source.loadUrl('ndata/russia-bnd.topojson').then( ()->

        b_entities = border_source.entities.entities;

        for b_entitiy in b_entities
            positions =  b_entitiy.polygon.positions.getValue()

            primitives.add(new Cesium.Primitive({
                geometryInstances : new Cesium.GeometryInstance({
                    geometry : new Cesium.PolylineGeometry({
                        positions : positions,
                        width : 1.0,
                        vertexFormat : Cesium.PolylineColorAppearance.VERTEX_FORMAT
                    }),
                    attributes: {
                        color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(0, 0.3, 0.9, 0.6))
                    }
                }),
                appearance : new Cesium.PolylineColorAppearance()
            }))

    load_cities()
    )


load_cities = ()->

    labels = new Cesium.LabelCollection()
    for city in cities
        coord = city['coordinates']
        name = city['name']
        labels.add({
            position : Cesium.Cartesian3.fromDegrees(coord[0], coord[1]),
            text     : "◉ "+name,
            font      : '12px Helvetica'
        });
    scene.primitives.add(labels);
    load_popups_data()


load_popups_data = ()->
    $.getJSON('data/data.json', (data)->
        popups_data =  data.data
    )




#    CLICK HANDLER
handler = new Cesium.ScreenSpaceEventHandler(scene.canvas)
ellipsoid = scene.globe.ellipsoid

handler.setInputAction( ( (movement)->
    if selected_polygon_name != "" then close_menu()
    polygon = scene.drillPick(movement.position)[0]
    if (typeof polygon.id) == "string"
        polygon_name = polygon.id
    else
        polygon_name = polygon.id.properties.Name_en
    selected_polygon_name = polygon_name

    rect = get_oopt_rect(polygon_name)
    scene.camera.flyToRectangle({destination: rect})
    selected_polygon_name = polygon_name
    setTimeout(open_menu, 100)

), Cesium.ScreenSpaceEventType.LEFT_CLICK )


get_oopt_rect = (name)->

    _points = [];

    for polygon in oopt[name]
        _points = _points.concat( polygon.polygon.positions.getValue() )

    cartographics = Cesium.Ellipsoid.WGS84.cartesianArrayToCartographicArray( _points );
    cartographics = cartographics.filter( (val) ->
        return val.height == 0
    )
    rect = Cesium.Rectangle.fromCartographicArray(cartographics)

    rect.south -= Math.abs(rect.south-rect.north)*0.6
    rect.north += Math.abs(rect.south-rect.north)*0.1
    return rect


cities = [
    {
        "coordinates": [37.61325, 55.748],
        "name": "Moscow"
    },
    {
        "coordinates": [73.35733, 54.91536],
        "name": "Omsk"
    },
    {
        "coordinates": [104.18426, 52.19257],
        "name": "Irkutsk"
    },
    {
        "coordinates": [134.85471, 48.5309],
        "name": "Khabarovsk"
    },
]

#    HOME BTN CLICK
$('.home_btn').on('click', ()->
    scene.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(85, 60, 10000000.0),
        duration: 3
    });
)


$('.map_selector').on('click', (e)->
    if e.offsetX > 177/2
#        bing
        bing_map.alpha = 1
        osm_map.alpha = 0
        pole_primitive.show = false
        $('.map_selector_fader').transition({ x: 0 }, 100, 'ease');
    else
#        osm
        osm_map.alpha = 1
        bing_map.alpha = 0
        pole_primitive.show = true
        $('.map_selector_fader').transition({ x: -93 }, 100, 'ease');

    e.stopPropagation()
)



#   MENU CLICK HANDLERS

$('.popup_menu .info').on('click', (e)->
    e.stopPropagation()
    open_info_popup()
)

$('.popup_menu .video').on('click', (e)->
    e.stopPropagation()
    open_video_popup()
)

$('.popup_menu .photo').on('click', (e)->
    e.stopPropagation()
    open_photo_popup()
)

$('.popup_menu .web').on('click', (e)->
    e.stopPropagation()
    open_web_popup()
)





#
#       O P E N   M E N U
#


open_menu = ()->

    selected_id = oopt[selected_polygon_name]._id
    prepare_popup(selected_id)

    $('.popup_menu').stop()
    $('.popup_menu').animate({bottom:"15%"}, 2000)
    $('.menu_op_name').text(selected_polygon_name)

    for element in oopt[selected_polygon_name]
        element.polygon.outline  = new Cesium.ConstantProperty(true)
        element.polygon.outlineColor  = Cesium.ColorMaterialProperty.fromColor( new Cesium.Color(1, 1, 1, 1) )

#   Подсветить в левом меню

    $('.left_menu div').each(()->
        $(this).removeClass('selected_item')
        if( $(this).text() == selected_polygon_name )
            $(this).addClass('selected_item')

            $('.left_menu').scrollTop($('.left_menu').scrollTop() + $(this).position().top - 300);
    )
    $('.left_menu').animate({
          scrollTop: selected_ellement_top_gap-200
      });

close_menu = ()->
    $('.left_menu div').removeClass('selected_item')
    $('.popup_menu').stop()
    $('.popup_menu').animate({bottom:"-30%"}, 500)
    $('.popup').hide()

    for element in oopt[selected_polygon_name]
        element.polygon.outline  = new Cesium.ConstantProperty(false)
        element.polygon.outlineColor  = Cesium.ColorMaterialProperty.fromColor( new Cesium.Color(1, 1, 1, 0) )


$(document).on('click', close_menu)

open_info_popup = ()->
    $('.popup').fadeIn()
    $('.popup>div').hide()
    $('.popup h2').text(selected_polygon_name)
    $('.popup .info').show()

open_video_popup = ()->
    $('.popup').fadeIn()
    $('.popup>div').hide()
    $('.popup h2').text(selected_polygon_name)
    $('.popup .video').show()
    $('video')[0].currentTime = 0
    $('video')[0].play()

open_photo_popup = ()->
    $('.popup').fadeIn()
    $('.popup>div').hide()
    $('.popup .photo').show()
    $('.popup h2').text(selected_polygon_name)

open_web_popup = ()->
    $('.popup').fadeIn()
    $('.popup>div').hide()
    $('.popup h2').text(selected_polygon_name)
    $('.popup .web').show()

$('.close_popup').on('click', (e)->
    $('.popup').hide()
    e.stopPropagation()
)

$('.menu_op_name').on('click', (e)->
    e.stopPropagation()
)


#    PHOTO GALLERY
showed_image = 1
num_images = 0

$('.photos_left').on('click', (e)->
    e.stopPropagation()
    showed_image--
    if showed_image <= 0 then showed_image = num_images
    $('.photo_container img').hide()
    $('.photo_container img').eq(showed_image).fadeIn()
)

$('.photos_right').on('click', (e)->
    e.stopPropagation()
    showed_image++
    if showed_image > num_images then showed_image = 1
    $('.photo_container img').hide()
    $('.photo_container img').eq(showed_image).fadeIn()
)

$('.popup').on('click', (e)->
    e.stopPropagation()
)

# PREPARE POPUP

prepare_popup = (_id)->
    current_popup_data = {}
    for dta in popups_data
        if dta.id == _id then current_popup_data = dta

#    ВОТ ТУТ ЗАКОМЕНИТЬ
    current_popup_data = popups_data[0]

    build_gallery(current_popup_data.images, current_popup_data.id)
    build_info(current_popup_data.id)
    build_video(current_popup_data.id)
    build_web(current_popup_data.url)



build_gallery = (_num_images, folder_name)->
    $('.photo_container img').remove()

    $('.photo_container').append( $('<img>').attr('src', 'data/'+folder_name+'/photo/'+_num_images+'.jpg') )
    for i in [1.._num_images]
        $('.photo_container').append( $('<img>').attr('src', 'data/'+folder_name+'/photo/'+i+'.jpg') )
    $('.photo_container').append( $('<img>').attr('src', 'data/'+folder_name+'/photo/1.jpg') )
    $('.photo_container img').fadeOut(50)
    $('.photo_container img').eq(showed_image).fadeIn(50)
    num_images = _num_images

build_info = (_id)->
    $('.info iframe').attr('src', 'data/'+_id+'/index.html')
    $('.info iframe').load( ()->
        head = $(".info iframe").contents().find("head")
        head.append($("<link/>", { rel: "stylesheet", href: "../info_style.css", type: "text/css" }));
    )


build_web = (url)->
    $('.web iframe').attr('src', url)


build_video = (_id)->
    $('video').attr('src', 'data/'+_id+'/video/1.mp4')


date = new Date()
$(document).on('mouseup', ()->
    date = new Date()
)
check_time = ()->
    console.log(new Date() - date)
    if ( (new Date()) - date ) > (5 * 60 * 1000)
        location.reload()

setInterval(check_time, 1000)











