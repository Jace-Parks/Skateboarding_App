let map;

function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };


  mape = document.getElementById("map");

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 2.1,
  });

  /* this adds a marker to the map

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "hello world",
  })*/

  google.maps.event.addListener(map, 'click', function (event) {
    displayCoordinates(event.latLng);               
  });

  // JAVASCRIPT (jQuery)

// Trigger action when the contexmenu is about to be shown
$(document).bind("contextmenu", function (event) {
    
    // Avoid the real one
    event.preventDefault();
    
    // Show contextmenu
    $(".custom-menu").finish().toggle(100).
    
    // In the right position (the mouse)
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});


// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {
    
    // If the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {
        
        // Hide it
        $(".custom-menu").hide(100);
    }
});


// If the menu element is clicked
$(".custom-menu li").click(function(){
    
    // This is the triggered action name
    switch($(this).attr("data-action")) {
        
        // A case for each action. Your actions here
        case "first": alert("first"); break;
        case "second": alert("second"); break;
        case "third": alert("third"); break;
    }
  
    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
  });

}

/*function getloc(){
  maps = new google.maps.Map(document.getElementById("map"));

  google.maps.event.addListener(map, 'click', function (event) {
    displayCoordinates(event.latLng);               
  });
}*/


function displayCoordinates(pnt) {

  var lat = pnt.lat();
  lat = lat.toFixed(4);
  var lng = pnt.lng();
  lng = lng.toFixed(4);
  console.log("Latitude: " + lat + "  Longitude: " + lng);
}
