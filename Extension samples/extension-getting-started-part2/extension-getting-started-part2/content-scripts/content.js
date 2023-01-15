// Listenes for a message to the script

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  
  $("body").prepend(
    // Pre-pends the following code into the current tab code, using the url/imageDivId sent to it 
      `<img  src="${request.url}" id="${request.imageDivId}" 
             class="slide-image" /> `
  );
  // Also Pre-pends some css to style the image
  $("head").prepend(
      `<style>
        .slide-image {
            height: auto;
            width: 100vw;
        }
      </style>`
  );
  $(`#${request.imageDivId}`).click(function() { // On clicking the image(identifier by imageDivId), remove
      $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
  });
  // alert("Closing Image", request);
  sendResponse({ fromcontent: "This message is from content.js" });
});
