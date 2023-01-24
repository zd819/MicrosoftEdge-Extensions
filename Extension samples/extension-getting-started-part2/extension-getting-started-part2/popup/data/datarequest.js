
function DataRequest() {
    console.log("DataRequest1");
    var TopLevel = document.getElementById('TopLevel');
    // element.innerHTML += "Over!<br>";
    TopLevel.style.visibility = 'hidden';
    // TopLevel.toggleAttribute("visibility");

    console.log(TopLevel.style.display, " ??? Display");
    var DataRequest = document.getElementById('DataRequestMade');
    // element.innerHTML += "Over!<br>";
    DataRequest.style.visibility = 'visible';
    console.log("ConnectionsVisible3");
    // var SettingsIcon = document.getElementById('SettingsIcon');
    // // element.innerHTML += "Over!<br>";
    // SettingsIcon.style.visibility = 'visible';
}




var DataRequestActive = document.getElementById("DataRequest");
DataRequestActive.addEventListener("click", DataRequest);

// var openD = document.getElementById("openDashboard");
// openD.addEventListener("click", openTab);