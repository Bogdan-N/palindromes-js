(function(){
	var sendButton = document.getElementsByClassName('buttonPalindrom')[0];
	sendButton.onclick = function(event){
		// 'resultContainer' is Class name of container where 
		// will be showed result.
		PalindromeTools.showPalindroms('resultContainer', 'inputPalindrom');
	}

})();