let currentPage = 'html';

function loadExternalHTML(page) {
    const pages = {
        home: "home.html",
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
    const iframe = document.querySelector("#external-content iframe");
    if (!iframe || !currentPage) return;

    const validPages = ["html", "css", "tools"];
    if (!validPages.includes(currentPage)) {
        alert("Ik verwijs je vriendelijk door naar Css, Html, Tools.");
        return;
    }

    // Voeg een random query toe zodat de browser de iframe écht herlaadt
    const timestamp = Date.now();
    iframe.src = `${currentPage}.html?ts=${timestamp}#${letter}`;

    iframe.onload = () => {
        try {
            const target = iframe.contentDocument.getElementById(letter);

            if (!target) {
                alert(`Wie zoekt die vindt, maar hier is niets te zoeken voor de letter: "${letter}".`);
            } else {
                target.scrollIntoView({ behavior: "smooth" });
            }

        } catch (err) {
            console.error("Kan de inhoud van de iframe niet controleren:", err);
            alert("Er is een probleem bij het controleren van de content.");
        }
    };
}


const navButtons = document.querySelectorAll('.navs');

navButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault(); // voorkomt dat de pagina opnieuw laadt
    navButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});
