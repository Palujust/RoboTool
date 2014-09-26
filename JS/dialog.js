
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	//alert(JSON.stringify(request))
  	$("#lbl_URL").text(request.pageUrl)
  	if (request.selectionText) {
		$("#lbl_selectedText").text(request.selectionText)
		$('#selectedTextRadio').prop("checked",true);
  	} else {
  		$("#lbl_selectedText").text("No text selected")
  		$("#selectedTextRadio").hide();
  		$('#URLRadio').prop("checked",true);
  	}
  	
  });
$(document).ready(function(){
	$("#saveButton").click(function(){
		var data = {}


		var value = $('input:radio[name=data_source]:checked', '#data_form').next().text().trim()
		data[$('select').find('option:selected').text()] = value;
		//alert(JSON.stringify(data))

		chrome.storage.sync.set(data);
		window.close()
	})
})
