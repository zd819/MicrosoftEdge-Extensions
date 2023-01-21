
function MainVisible() {
    console.log("ConnectionsVisible1");
    var TopLevel = document.getElementById('TopLevel');
    // element.innerHTML += "Over!<br>";
    TopLevel.style.visibility = 'hidden';
    console.log("ConnectionsVisible2");
    var MainPage = document.getElementById('MainPage');
    // element.innerHTML += "Over!<br>";
    MainPage.style.visibility = 'visible';
    console.log("ConnectionsVisible3");

    var SettingsIcon = document.getElementById('SettingsIcon');
    // element.innerHTML += "Over!<br>";
    // SettingsIcon.style.visibility = 'visible';

}

function OpenDashboard() {
    console.log("ConnectionsVisible1");
    var MainPage = document.getElementById('TopLevel');
    // element.innerHTML += "Over!<br>";
    MainPage.style.visibility = 'hidden';
    console.log("ConnectionsVisible2");
    var ConnectionsPage = document.getElementById('Connections');
    // element.innerHTML += "Over!<br>";
    ConnectionsPage.style.visibility = 'visible';
    console.log("ConnectionsVisible3");

    var SettingsIcon = document.getElementById('SettingsIcon');
    // element.innerHTML += "Over!<br>";
    SettingsIcon.style.visibility = 'visible';

}

function SoulModelVisible() {
    console.log("ConnectionsVisible1");
    var MainPage = document.getElementById('TopLevel');
    // element.innerHTML += "Over!<br>";
    MainPage.style.visibility = 'hidden';
    console.log("ConnectionsVisible2");
    var ConnectionsPage = document.getElementById('Connections');
    // element.innerHTML += "Over!<br>";
    ConnectionsPage.style.visibility = 'visible';
    console.log("ConnectionsVisible3");

    var SettingsIcon = document.getElementById('SettingsIcon');
    // element.innerHTML += "Over!<br>";
    SettingsIcon.style.visibility = 'visible';

}

function ProfileVisible() {
    console.log("ConnectionsVisible1");
    var MainPage = document.getElementById('TopLevel');
    // element.innerHTML += "Over!<br>";
    MainPage.style.visibility = 'hidden';
    console.log("ConnectionsVisible2");
    var ConnectionsPage = document.getElementById('Connections');
    // element.innerHTML += "Over!<br>";
    ConnectionsPage.style.visibility = 'visible';
    console.log("ConnectionsVisible3");

    var SettingsIcon = document.getElementById('SettingsIcon');
    // element.innerHTML += "Over!<br>";
    SettingsIcon.style.visibility = 'visible';

}

function ConnectionsVisible() {
    console.log("ConnectionsVisible1");
    var MainPage = document.getElementById('TopLevel');
    // element.innerHTML += "Over!<br>";
    MainPage.style.visibility = 'hidden';
    console.log("ConnectionsVisible2");
    var ConnectionsPage = document.getElementById('Connections');
    // element.innerHTML += "Over!<br>";
    ConnectionsPage.style.visibility = 'visible';
    console.log("ConnectionsVisible3");

    var SettingsIcon = document.getElementById('SettingsIcon');
    // element.innerHTML += "Over!<br>";
    SettingsIcon.style.visibility = 'visible';

}

function RewardsVisible() {
    console.log("ConnectionsVisible1");
    var MainPage = document.getElementById('TopLevel');
    // element.innerHTML += "Over!<br>";
    MainPage.style.visibility = 'hidden';
    console.log("ConnectionsVisible2");
    var ConnectionsPage = document.getElementById('Connections');
    // element.innerHTML += "Over!<br>";
    ConnectionsPage.style.visibility = 'visible';
    console.log("ConnectionsVisible3");

    var SettingsIcon = document.getElementById('SettingsIcon');
    // element.innerHTML += "Over!<br>";
    SettingsIcon.style.visibility = 'visible';

}




var Menu1 = document.getElementById("Menu 1");
Menu1.addEventListener("click", MainVisible);

var Menu2 = document.getElementById("Menu 2");
Menu2.addEventListener("click", ConnectionsVisible);

var Menu3 = document.getElementById("Menu 3");
Menu3.addEventListener("click", ConnectionsVisible);

var Menu4 = document.getElementById("Menu 4");
Menu4.addEventListener("click", ConnectionsVisible);

var Menu5 = document.getElementById("Menu 5");
Menu5.addEventListener("click", ConnectionsVisible);

var Menu6 = document.getElementById("Menu 6");
Menu6.addEventListener("click", ConnectionsVisible);
