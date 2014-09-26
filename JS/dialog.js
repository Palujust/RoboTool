chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	alert(JSON.stringify(request))
  });