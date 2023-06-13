function initmap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat:57.291847, lng:25.265140},
        zoom: 8,
        mapTypeId: "satellite",
    });
}