//SWAP OUT AUTOPOPULATED TEXT WITH SELECTED TEXT IN POPUP.HTML
function setTweet(text) {
		//OPEN TWITTER SHARE WINDOW AND POPULATE WITH SELECTED TEXT AND LINK COLLECTED BY CONTENTSCRIPT.JS
		window.open('https://twitter.com/intent/tweet?text=' + text, 'shareWindow', 'width=350,height=250,top=50,left=50');
}

window.addEventListener('DOMContentLoaded', function() {
    //LOOKS FOR ACTIVE TAB
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        //SENDS MESSAGE TO ACTIVE TAB (CONTENT_SCRIPT.JS) ASKING FOR SELECTED TEXT
        chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'DOMInfo'},
                //DESIGNATING CALLBACK THAT CONTENT_SCRIPT.JS WILL RUN IN RESPONSE
                setTweet);
    });
});
