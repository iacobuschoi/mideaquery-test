const topBarNav = document.querySelector('.top-bar-nav');
const logo = document.querySelector('.logo');
const gap = 100;
const navGapPx = getComputedStyle(document.getElementsByClassName('top-bar-nav')[0]).gap;
const navGap = Number(navGapPx.substring(0,navGapPx.length-2))
const deletedItem = [];
const deletedGap = [];

function gapDetected() {
    return window.innerWidth - logo.offsetWidth - topBarNav.offsetWidth > gap? false: true;
}
window.addEventListener('resize',()=>{
    console.log();
    if(gapDetected()) {
        if(document.querySelector('.top-bar-nav-item')){
            deletedItem.push(topBarNav.lastElementChild);
            deletedGap.push(topBarNav.lastElementChild.offsetWidth);
            topBarNav.removeChild(topBarNav.lastElementChild);
        }
    }
    else {
        if(deletedItem.length > 0){
            if(window.innerWidth - logo.offsetWidth - topBarNav.offsetWidth > navGap + gap + deletedGap[deletedGap.length-1]){
                topBarNav.appendChild(deletedItem.pop());
                deletedGap.pop();
            }
        }
    }  
})