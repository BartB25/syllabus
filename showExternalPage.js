// showExternalPage.js


function loadExternalHTML(page) {

  if (page == 'html') {
    document.getElementById("external-content").innerHTML = '<iframe src="html.html"> </iframe>';
}
  else if (page == 'css') {
    document.getElementById("external-content").innerHTML = '<iframe src="css.html"> </iframe>';
  }

  else if (page == 'tools'){
    document.getElementById("external-content").innerHTML = '<iframe src="tools.html"> </iframe>';
  }

  else if (page == 'about'){
    document.getElementById("external-content").innerHTML = '<iframe src="about.html"> </iframe>';
  }

  else {
    document.getElementById("external-content").innerHTML = "<h2>Unable to show the page...</h2>";
  }
}




function loadLetter(letter, page) {
  let content = document.getElementById("external-content");

  if (page !== "html") return; // Ensure it only works for the "html" page

  // Change iframe src to jump to the specific letter in html.html
  if (letter === 'A') {
    content.innerHTML = '<iframe src="html.html#A"></iframe>';
  } else if (letter === 'B') {
    content.innerHTML = '<iframe src="html.html#B"></iframe>';
  } else {
    content.innerHTML = '<h2>Letter not found</h2>';
  }
}
