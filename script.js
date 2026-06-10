// ── onload: runs as soon as the page finishes loading ───────────────────────
window.onload = function addTabIndex() {
    // 1. Confirm the event fires
    console.log("Page loaded — adding tabindex to all figures.");

    // 2. Grab every <figure> element in the gallery
    const figures = document.querySelectorAll("figure");

    // 3. Loop through each figure and make it keyboard-focusable
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");
        console.log("tabindex added to figure #" + (i + 1));
    }
};

// ── upDate: called on mouseover AND onfocus ──────────────────────────────────
function upDate(figureOrImg) {
    console.log("upDate event triggered!");

    // Accept either a <figure> or an <img> (both patterns work)
    let img;
    if (figureOrImg.tagName.toLowerCase() === "figure") {
        img = figureOrImg.querySelector("img.preview-img");
    } else {
        img = figureOrImg;
    }

    if (!img) return;

    console.log("Source URL: " + img.src);
    console.log("Alt Text:   " + img.alt);

    let targetBox = document.getElementById("image");

    // Update the caption text inside the preview box
    targetBox.querySelector("span").textContent = img.alt;

    // Update the background image
    targetBox.style.backgroundImage = "url('" + img.src + "')";

    // Update the aria-label so screen readers announce the new photo
    targetBox.setAttribute("aria-label", "Preview: " + img.alt);
}

// ── unDo: called on mouseleave AND onblur ────────────────────────────────────
function unDo() {
    console.log("unDo event triggered — resetting preview.");

    let targetBox = document.getElementById("image");

    targetBox.style.backgroundImage = "url('')";
    targetBox.querySelector("span").textContent =
        "Hover over or focus an image below to preview it here.";
    targetBox.setAttribute("aria-label", "Photo preview area");
}