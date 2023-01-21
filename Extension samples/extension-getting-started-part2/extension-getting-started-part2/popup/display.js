// const nameVisible = document.getElementById("name2");
// nameVisible.addEventListener("mouseover", over());

var sidebaropen = false

function showElement() {
    element = document.querySelector('.container');
    element.style.visibility = 'visible';
}

function click() {
    // console.log("Hide Element");
    var element = document.getElementById('name2');
    // element.innerHTML += "Click!<br>";
    ToggleSideBar();
    // element.style.visibility = 'hidden';
}

function over() {
    // console.log("Hide Element");
    var element = document.getElementById('name2');
    element.innerHTML += "Over!<br>";
    // element.style.visibility = 'hidden';
}

function ToggleSideBar() {
    console.log("Show SideBar");
    var element = document.getElementById('TopSidebar');
    switch(element.style.visibility) {
        case "visible":
          // code block
          console.log("Hidden now");
          element.style.visibility = "hidden";
          break;
        case "hidden":
          // code block
          console.log("Visible now");
          element.style.visibility = "visible";
          break;
        default:
            console.log(element.style.visibility)
            element.style.visibility = "hidden";
          // code block
      }
      
    // TopBar = document.getElementById('TopBar');
    // TopBar.style.visibility = 'hidden';
    // Settings = document.getElementById('SettingsIcon');
    // Settings.style.visibility = 'visible';
       
}

function hide() {
    console.log("Hide SideBar");
    var element = document.getElementById('TopSidebar');
    element.style.visibility = 'hidden';
}


document.addEventListener("onpageshow", hide()); 

// var btn = document.getElementById("Settings Icon");
// btn.addEventListener("click", alertMe);

// function alertMe(){
//     element = document.getElementById('SettingsIcon');
//     element.style.visibility = 'hidden';

// }


var SettingsIcon = document.getElementById("SettingsIcon");
SettingsIcon.addEventListener("click", click);
// SettingsIcon.addEventListener("mouseover", over);
