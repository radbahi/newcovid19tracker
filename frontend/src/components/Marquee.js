// only for this script, not a component. 
const root = document.documentElement()
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed")
const marqueeContent = document.querySelector(".marquee-content")

root.style.setProperty("--marquee-elements", marqueeContent.children.length)
console.log("you can see me!")
for (let i=0; i<marqueeElementsDisplayed; i++){
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
}

// script stuff idk what to do with yet
const script = document.createElement("script");
script.src = "./Marquee.js"
script.async = true;
document.body.appendChild(script)

// 