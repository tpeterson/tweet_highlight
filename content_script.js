document.addEventListener('mouseup', saveTweet);

function saveTweet(){
var tweet = saveSelection();
var highlight = tweet.toString();
console.log("Yep again");
chrome.runtime.sendMessage({greeting: highlight}, function (response) {
	console.log(response.farewell);
});
}

function saveSelection() {
	if (window.getSelection) {
		var sel = window.getSelection();
		if (sel.getRangeAt && sel.rangeCount) {
			console.log('Yep');
			return sel.getRangeAt(0);
		}
	} 
}