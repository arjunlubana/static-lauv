/* Function expression to select elements */
const selectElement=(s) => document.querySelector(s);
/* Open the Menu */
selectElement('.open').addEventListener("click",()=> {
    selectElement('.close-menu').style.transform="scaleX(1)";
    selectElement('.nav').classList.add('active');
    selectElement('.ham-menu').style.opacity="0";
});
/* Close the Menu */
selectElement('.close').addEventListener("click",()=> {
    selectElement('.nav').classList.remove('active');
    selectElement('.close-menu').style.transform="scaleX(0)";
    selectElement('.ham-menu').style.opacity="1";
});

/* Playing video */
function playVideo(){
    selectElement(".playing-video").classList.add("video-Player");
}
    

