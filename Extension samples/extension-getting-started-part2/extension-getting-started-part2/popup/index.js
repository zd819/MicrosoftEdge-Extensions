// const jQuery = require("jquery.js");

/*
 *
 * This is a simple sample.
 *  
 */


function ShowQRCode(url){
    // jQuery("#qrcode").qrcode(url);
    const nameVisible = document.getElementById("qrcode");
    nameVisible.innerHTML =  "url is : " +(url);
    // Object.keys(url);
};

function ShowTitle(title){
    // jQuery("#title").html(title);
    const nameVisible = document.getElementById("title");
    nameVisible.innerHTML = "Viewing : " + (title);
};

function GetProfile(){
    // jQuery("#title").html(title);
    const nameVisible = document.getElementById("Profile");
    const userName="Zion"; //WIll be a get reqest
    nameVisible.innerHTML = "Signed in as : " + userName;
};

async function ShowInfo(){
    console.log("working");
    // Get active tab and retrive url and title.
    // Added await and changed currentWindow: true to get working
    // Also added in permissions in manifest.json
    await chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
        var url = tabs[0].url;
        var title = tabs[0].title;
        // ShowQRCode(url); 
        ShowTitle(title);   
        GetProfile();    
    });
    // let queryOptions = { active: true, lastFocusedWindow: true };
    // // `tab` will either be a `tabs.Tab` instance or `undefined`.
    // let [tab] = await chrome.tabs.query(queryOptions);
    // console.log("tab is : ", tab);
    // ShowQRCode(tab);
    // ShowTitle(tab.title);       
    // return tab;
};
////////////////////////////////////////////////////////////////////////////////

// Event binding.
document.addEventListener("onpageshow", ShowInfo()); 