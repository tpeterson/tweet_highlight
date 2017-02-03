//SWAP OUT AUTOPOPULATED TEXT WITH SELECTED TEXT IN POPUP.HTML
function setTweet(text) {
    chrome.tabs.create({
      url: 'https://twitter.com/intent/tweet?text=' + text
    });
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
