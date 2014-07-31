/*
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
*/

document.addEventListener('mouseup', saveTweet);

function saveSelection() {
	if (window.getSelection) {
		var sel = window.getSelection();
		if (sel.getRangeAt && sel.rangeCount) {
			console.log('Yep');
			return sel.getRangeAt(0);
		}
	}
}

function saveTweet(){
	var tweet = saveSelection();
	var highlight = tweet.toString();
	console.log("Yep again");
	return highlight;
}

chrome.runtime.sendMessage({
    from:    'content',
    subject: 'showPageAction'
});

/* Listen for message from the popup */
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    /* First, validate the message's structure */
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        /* Directly respond to the sender (popup),
         * through the specified callback */
        response(saveTweet());
    }
});
