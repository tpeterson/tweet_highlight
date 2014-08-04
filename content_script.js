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

//SAVES PAGE'S URL TO ADD TO OBJECT CONTAINING SELECTED TEXT AND POPULATE IN TWEET
var link = document.URL;

//SAVES SELECTED TEXT TO A STRING THEN STORES THAT IN A VARIABLE
function saveTweet(){
	var tweet = saveSelection();
	var highlight = '"' + tweet.toString() + '" ' + link;
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
