// When the user clicks on info div, open the popup
function showInfoPopup() {
    var popup = document.getElementById("infopop");
    popup.classList.toggle("show");
}

// For mobiles, create a button to open data on a local app
var appDiv = document.getElementById("appDiv");
// Get link in correct format
var link = document.createElement("a");
link.href = fpb.pathToImages;
fpb.pathToImages = (link.protocol+"//"+link.host+link.pathname+link.search+link.hash);

// Get paths in a consistent format: if last character in string is / then remove it!
if (fpb.pathToImages.slice(-1) === "/"){
  fpb.pathToImages = fpb.pathToImages.slice(0,-1);
}
if (fpb.pathToFPBioimage.slice(-1) === "/"){
  fpb.pathToFPBioimage = fpb.pathToFPBioimage.slice(0,-1);
}

var fpbAppLink = "fpbioimage://?f=" + btoa(JSON.stringify(fpb));
var innerHTML = "<a href='" + fpbAppLink + "'><img src='../resources/app.png' height='36px' alt='Open in FPB app' style='vertical-align:middle;' /></a>";

if(navigator.userAgent.match(/Android/i) != null) {
  appDiv.innerHTML = innerHTML;
}
