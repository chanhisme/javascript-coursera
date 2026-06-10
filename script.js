function upDate(previewPic) {
    // 1. Check that the mouseover event is triggering
    console.log("Mouseover event triggered!");
    
    // 2. Print out information about the previewPic variable (alt and src)
    console.log("Source URL: " + previewPic.src);
    console.log("Alt Text: " + previewPic.alt);
    
    // 3. Find the element with the id of 'image'
    let targetBox = document.getElementById("image");
    
    // 4. Change the text of the element to the alt text of the preview image
    targetBox.innerHTML = previewPic.alt;
    
    // 5. Change the background image of the element to the source of the preview image
    targetBox.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // 1. Find the element with the id of 'image'
    let targetBox = document.getElementById("image");
    
    // 2. Update the url for the background image back to the original value
    targetBox.style.backgroundImage = "url('')";
    
    // 3. Update the text back to the original default message
    targetBox.innerHTML = "Hover over an image below to display here.";
}