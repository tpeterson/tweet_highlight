/*
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		sendResponse({farewell: request.greeting.toString()});
});


*/

chrome.runtime.onMessage.addListener(
	function(msg, sender) {
    chrome.pageAction.show(sender.tab.id);
});
