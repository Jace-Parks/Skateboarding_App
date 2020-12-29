let map;
var glat;
var glng;


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

  google.maps.event.addListener(map, 'mousedown', function (event) {
    var x = displayCoordinates(event.latLng);     
    glat = x[0];
    glng = x[1];     
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
        case "addSpot": 
           console.log("adding spot!"); 
           console.log(glng);
           console.log(glat);
           document.getElementById('id01').style.display='block'
           break;
        
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

function rightclick() {
  var rightclick;
  var e = window.event;
  if (e.which) rightclick = (e.which == 3);
  else if (e.button) rightclick = (e.button == 2);
}



function displayCoordinates(pnt) {

  var lat = pnt.lat();
  lat = lat.toFixed(4);
  var lng = pnt.lng();
  lng = lng.toFixed(4);
  //console.log("Latitude: " + lat + "  Longitude: " + lng);

  return [lat, lng];
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var fixed = document.getElementById('id01');

fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

}, false);