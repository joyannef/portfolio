function getData() {
	document.getElementsByTagName("i")[0].textContent = document
		.getElementsByTagName("button")[0]
		.getAttribute("data");
}
