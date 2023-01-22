// Checks if extension button is pressed, this code runs in extension
// In the onclick event, find the current browser tab. 
// Then, use the chrome.tabs.sendmessage Extension API to send a message to that tab.
// In that message, we include the URLof the image to display
// We alsom make sure to send a unique ID to assign to the inserted image
const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    url: chrome.runtime.getURL("images/stars.jpeg"),
                    imageDivId: `${guidGenerator()}`,
                    tabId: tabs[0].id
                },
                function(response) {
                    console.log("Closed extension with response : ", response)
                    window.close();
                }
            );
            function guidGenerator() {
                const S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }
        });
    };
}

function openTab(){
    var newTab = chrome.tabs.create({
        url:'https://localhost:8080',
        active:true
    })
}


// const openDashboard = document.getElementById("openDashboard");
// if (openDashboard) {
//     openDashboard.onclick = function() {
//         var newTab = browser.tabs.create({
//                     url:'https://localhost:8080',
//                     active:true
//                 })
//         }
// }

var openD = document.getElementById("openDashboard");
openD.addEventListener("click", openTab);



// browser.browserAction.onClicked.addListener(openTab)