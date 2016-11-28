/*
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		sendResponse({farewell: request.greeting.toString()});
});
*/


/*RECEIVES MESSAGE FROM CONTENT_SCRIPT.JS, UNNECESSARY FOR THIS
chrome.runtime.onMessage.addListener(
	function(msg, sender) {
    chrome.pageAction.show(sender.tab.id);
});
*/
