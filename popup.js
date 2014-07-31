/*
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		sendResponse({farewell: request.greeting.toString()});
});


document.addEventListener("mousedown", function() {
	console.log("Wha");
	document.getElementById("text").value = "tweet";
});
*/

/* Update the relevant fields with the new data */
function setDOMInfo(text) {
		document.getElementById("text").value = text;
}

window.addEventListener('DOMContentLoaded', function() {
    /* ...query for the active tab... */
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        /* ...and send a request for the DOM info... */
        chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'DOMInfo'},
                /* ...also specifying a callback to be called
                 *    from the receiving end (content script) */
                setDOMInfo);
    });
});
