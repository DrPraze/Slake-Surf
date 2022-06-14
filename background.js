// var enabled = true;

function SlakeSurf(){
	chrome.history.search({text: '', maxResults: 10},
		function(data){
			data.forEach(function(page) {
				alert("Test was successful: "+page.url);
			});
		});
}
