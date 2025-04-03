let currentPage = 'html';

function loadExternalHTML(page) {
    const pages = {
        html: "html.html",
        css: "css.html",
        tools: "tools.html",
        about: "about.html"
    };

    if (pages[page]) {
        document.getElementById("external-content").innerHTML = `<iframe src="${pages[page]}" onload="currentPage='${page}'"></iframe>`;
        currentPage = page; // Update de huidige pagina correct
    } else {
        document.getElementById("external-content").innerHTML = "<h2>Unable to show the page...</h2>";
    }
}

function loadLetter(letter) {
    let content = document.getElementById("external-content");
    
    if (!currentPage || !content) return;

    const validPages = ["html", "css", "tools", "about"];
    if (validPages.includes(currentPage)) {
        content.innerHTML = `<iframe src="${currentPage}.html#${letter}"></iframe>`;
    }
}