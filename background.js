if (typeof window !== "undefined") {
  document.getElementById("btn").addEventListener("onclick", SlakeSurf());
}
function SlakeSurf(){
	var __history__ = [];
	var _max_ = document.getElementById("_max_").value;
	chrome.history.search({text: '', maxResults: Number(_max_)},
		function(data){
			data.forEach(function(page) {
				__history__.push(page.url);
			});
		alert("Sucessful!: "+__history__)
		});
}
