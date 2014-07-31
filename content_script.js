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
// SAVES SELECTED TEXT
function saveSelection() {
	if (window.getSelection) {
		var sel = window.getSelection();
		if (sel.getRangeAt && sel.rangeCount) {
			console.log('Yep');
			return sel.getRangeAt(0);
		}
	}
}
//SAVES SELECTED TEXT TO A STRING THEN STORES THAT IN A VARIABLE
function saveTweet(){
	var tweet = saveSelection();
	var highlight = tweet.toString();
	console.log("Yep again");
	return highlight;
}
/*MESSAGE TO EVENTPAGE.JS, UNNECESSARY FOR THIS
chrome.runtime.sendMessage({
    from:    'content',
    subject: 'showPageAction'
});
*/
/* GRABS MESSAGE FROM POPUP.JS */
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    //MAKE SURE CORRECT MESSAGE
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        //CALLBACK THAT RESPONDS TO POPUP.JS WITH SELECTED TEXT AS ARGUMENT
        response(saveTweet());
    }
});
