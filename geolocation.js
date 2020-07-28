
document.getElementById("mylocation").addEventListener("click", showPosition); // eventlistener for location button

function showPosition() {  // function to show current location
    if(navigator.geolocation) {  // condition
        navigator.geolocation.getCurrentPosition(showMap, showError);
    } else {
        alert("Your browser is not supported");
    }
}

function showError(error) { // function for error
    switch(error.code) {   //swtich case used for various error
        case error.PERMISSION_DENIED:
          result.innerHTML = "You've decided not to share your position"
          break;
        case error.POSITION_UNAVAILABLE:
          result.innerHTML = "the positioning service can't be reached."
          break;
        case error.TIMEOUT:
          result.innerHTML = "The attempt timed out before it could get the location data."
          break;
        case error.UNKNOWN_ERROR:
          result.innerHTML = "An unknown error occurred."
          break;
    }
}

function showMap(position) {
    
    lat = position.coords.latitude;    // store value of latitue
    long = position.coords.longitude;  // store value of longitude

    var latlong = new google.maps.LatLng(lat, long); // stored in one variable 
    
    var myOptions = {    // select proprties of map
        center: latlong,
        zoom: 15,
        mapTypeControl: true,
        navigationControlOptions: {
            style:google.maps.NavigationControlStyle.SMALL
        }
    }
    
    var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
    var marker = new google.maps.Marker({ position:latlong, map:map, title:"You are here!" });
}

