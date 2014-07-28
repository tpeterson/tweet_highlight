chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		sendResponse({farewell: request.greeting.toString()});
});


document.addEventListener("mousedown", function(){
	console.log("Wha");
	document.getElementById("text").value = "tweet";
});
