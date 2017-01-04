---
layout: page
title: User guide
---

<script>
    str = '<ul id="subheadings"><li><a href="#overview">Overview of controls</a></li>' +
    '<li><a href="#basic">Basic controls</a></li>' +
    '<li><a href="#camera">Camera movement</a></li>' +
    '<li><a href="#rendering">Rendering settings</a></li>' +
    '<li><a href="#bookmarking">Bookmarking</a></li>' +
    '<li><a href="#clipping">Clipping and slicing</a></li>' +
    '<li><a href="#requirements">Software requirements</a></li></ul>';
    document.getElementById("subheadings/userGuide/").innerHTML = str;
</script>

<h3> Introduction </h3>
This guide provides instructions on the use of FPBioimage to view and explore volumetric image data shared on the web. The guide is complemented by an [instructional video](https://www.youtube.com/watch?v=tdYwFqOrN44).

If you need instructions on how to share your own imaging data, please see the [Sharing Guide](../sharingGuide.html).

You can also download this guide as a [PDF file](../userGuide.pdf).

<h3 id="overview"> Overview of controls </h3>

|  Control | Action  |
|---|---|
| Click-and-drag | Rotate model |
| Arrow keys | Rotate model |
| Scroll wheel | Zoom |
|      |
| *Camera Movement* |
| W, S | Forward, back |
| A, D | Left, right |
| E, Q | Up, down |
| F | Toggle *First Person* mode |
| Mouse | Camera direction (in *First Person* mode) |
|     |
| *Rendering Settings* |
| H | Hide boundaries |
| <, > | Decrease/increase opacity |
| -, + | Decrease/increase intensity |
| {, } | Decrease/increase intensity cutoff |
|      |
| *Bookmarking* |
| B | Create a bookmark |
| Number keys | Restore bookmark |
|      |
| *Clipping and Slicing* |
| I, K | Move forward/backward (*clipping plane*) |
| J, L | Rotate left/right (*clipping plane*) |
| O, U | Tilt forward/backward (*clipping plane*) |
| X | Freeze plane on model |
| Z | Reset plane |
| N | Toggle clip/slice mode |

<h3 id="basic">Basic controls</h3>
*These controls should be familiar to anyone who has used 3D software before, and intuitive to those new to 3D viewers.*

**Rotate model**  
The model can be rotated by click-and-drag operation of the mouse. Alternatively, the arrow keys will rotate the model about its centre.

**Zoom**  
The camera can be zoomed in and out of the model using the mouse scroll wheel. Alternatively, the W and S keys can be used if the mouse has no scroll wheel.

<h3 id="camera">Camera movement</h3>
*To view the data from different perspectives, the position of the camera can be moved.*

**Forward/backward, left/right**  
The WASD keys are used to move the camera around the model, as they form the same shape as arrow keys. This key combination is commonly used in first-person perspective 3D games, and will be familiar to many.

**Up/down**  
The camera can be moved up and down using E and Q respectively.

**First Person mode**  
Pressing F toggles First Person mode. When enabled, the mouse is used to change the direction in which the camera is pointing. Again, this interface will be familiar to those who have played first-person perspective games, and provides an immersive view of 3D imaging data.

<h3 id="rendering">Rendering settings</h3>
*The rendering settings can be adjusted to ensure that different details in the data can be visualised optimally.*

**Hide boundaries**  
The boundaries provide a sense of perspective and also prevent the camera from getting ‘lost’ in the emptiness of 3D space. Their visibility can be switched off with H, which will show the image data against a black background.

**Opacity**  
The opacity of the data can be decreased and increased with the < and > keys respectively. Lowering the opacity allows voxels inside the volume to be viewed through the outer layers.

**Intensity**  
The intensity or brightness of the data can be increased or decreased with the + and – keys respectively.

**Cutoff threshold**  
In order to render the volume, the darkest voxels are not displayed, as determined by the cutoff threshold. If there is a dark haze around the model, the cutoff threshold should be increased with }. If there is detail missing in the model, however, the threshold can be lowered with {.

<h3 id="bookmarking">Bookmarking</h3>
*The bookmarking feature built into FPBioimage allows the user to save views locally to return to at a later time. Bookmarks can also be shared with others to provide particular views of the data.*

**Creating a bookmark**  
The bookmark creation procedure is initialised by pressing B. This will prompt the user to choose a number key to save the bookmark under. Next, an annotation can be entered to describe the view. On pressing enter, the bookmark will be saved. Saving a bookmark under number 0 means that this view will be loaded next time the data is loaded.

**Restoring a bookmark**  
Pressing one of the number keys at any time will restore the bookmark saved under that number. Note that bookmarks are saved onto the user’s computer as a browser cookie, and so can be restored between sessions.

**Sharing a bookmark**  
After creating or restoring a bookmark it can be shared by clicking the ‘Share bookmark…’ button. This will pop up a box with a link to the bookmark. This link can then be shared in an email, Twitter post or academic journal. The link contains all information about the bookmarked view, including the annotation, so can be long; users may wish to consider using a URL shortener such as goo.gl or tinyurl.com when sharing links.

<h3 id="clipping">Clipping and slicing</h3>
*The clipping and slicing feature provided by FPBioimage can provide unique views of the data, providing novel information which cannot be obtained from the raw image slices. The data can be sliced from any direction, and the cut locked in position on the model to view it from any perspective.*

**Moving the clipping plane**  
The clipping plane starts a short distance in front of the camera, and voxels between the camera and clipping plane are removed. As the camera approaches the model, deeper layers inside the model become exposed. The clipping plane can be moved further from or closer to the camera with I and K. It can also be rotated left and right with J and L, or tilted forward and backward with O and U respectively. Note that the IJKL keys are chosen to mimic the layout of arrow keys.

**Freezing the clipping plane**  
The clipping plane starts attached to the camera. This means that as the camera moves, the position of the clipping plane changes with it. The clipping plane can be locked to the model by pressing X. Pressing the Z key resets the clipping plane so that it is re-attached to the camera.

**Slice mode**  
The N key toggles between clipping mode and slicing mode. In clipping mode, voxels between the camera and the clipping plane are not rendered. In slice mode, just a thin slice around the slicing plane is shown.


<h3 id="requirements">Software and hardware requirements</h3>
* 64-bit operating system (eg. Windows 7 64-bit, Windows 10 64-bit, Mac OS X 10.7+)
* 64-bit web browser (eg. Google Chrome 64-bit, Microsoft Edge, Safari, Firefox 64-bit)
* 2GB+ RAM (depending on the complexity of the dataset)
