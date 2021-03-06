// SAVES SELECTED TEXT
function saveSelection() {
  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0).toString();
    }
  }
}

//SAVES SELECTED TEXT TO A STRING THEN STORES THAT IN A VARIABLE
function saveTweet() {
  var text = saveSelection();
  if (text && text.length > 0) {
      var quote = '"' + text + '" ' + document.URL;
      return quote;
  } else {
    return 'No text selected';
  }
}

// GRABS MESSAGE FROM POPUP.JS
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    //MAKE SURE CORRECT MESSAGE
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        //CALLBACK THAT RESPONDS TO POPUP.JS WITH SELECTED TEXT AS ARGUMENT
        var to_tweet = saveTweet();
        var text_to_send = encodeURIComponent(to_tweet) || encodeURIComponent(document.URL) || '';
        response(text_to_send);
    }
});
