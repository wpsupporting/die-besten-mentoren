document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navbar");
    const logoSection = document.querySelector(".logo-wrapper");
    const logoContainer = document.querySelector(".logo-container");
    const logoImage = document.querySelector(".logo-image");
    const logoText = document.querySelector(".logo-text");
    const logoSubtext = document.querySelector(".logo-subtext");

    if (!menu || !logoSection) {
        console.warn("⚠️ Element nicht gefunden! Prüfe .navbar oder .logo-wrapper");
        return;
    }

    function isDesktop() {
        return window.innerWidth > 1024; // Sticky nur auf Desktop aktiv
    }

    let originalLogoParent = logoText.parentNode; 
    const scrollThreshold = logoSection.offsetHeight + 300; // Fügt 100px Verzögerung hinzu

    window.addEventListener("scroll", function () {
        if (!isDesktop()) return; // Sticky nur auf Desktop aktiv

        if (window.scrollY > scrollThreshold) { // Sticky wird erst nach extra 100px aktiviert
            menu.classList.add("sticky-menu");
            logoSubtext.style.display = "none"; // Slogan ausblenden

            // Prüfen, ob Logo bereits in der Sticky-Navigation ist
            if (!menu.contains(logoText)) {
                menu.prepend(logoText); // Logo-Text ins Sticky-Menü verschieben
                logoText.style.display = "block"; // Sicherstellen, dass es sichtbar ist
            }

        } else {
            menu.classList.remove("sticky-menu");

            // Prüfen, ob das Logo wieder an die alte Stelle zurückgesetzt werden muss
            if (originalLogoParent && !originalLogoParent.contains(logoText)) {
                originalLogoParent.prepend(logoText); // Logo-Text wieder an alte Stelle
            }

            logoSubtext.style.display = "block"; // Slogan wieder einblenden
        }
    });

    // Falls die Bildschirmgröße geändert wird, Sticky entfernen
    window.addEventListener("resize", function () {
        if (!isDesktop()) {
            menu.classList.remove("sticky-menu");

            // Logo-Text zurücksetzen, falls nötig
            if (originalLogoParent && !originalLogoParent.contains(logoText)) {
                originalLogoParent.prepend(logoText);
            }
        }
    });
});
