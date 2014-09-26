chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	//alert(JSON.stringify(request))
  	$("#lbl_URL").text(request.pageUrl)
  	$("#lbl_selectedText").text(request.selectionText)
  	$('input:radio[name=data_source]').val(['selectedText']);
  });