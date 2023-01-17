// const nameVisible = document.getElementById("name2");
// nameVisible.innerHTML = "Zion";


function showElement() {
    element = document.querySelector('.container');
    element.style.visibility = 'visible';
}

function hideElement() {
    element = document.getElementById('SettingsIcon');
    element.style.visibility = 'hidden';
}


var btn = document.getElementById("Settings Icon");

btn.addEventListener("click", alertMe);

function alertMe(){
    element = document.getElementById('SettingsIcon');
    element.style.visibility = 'hidden';

}