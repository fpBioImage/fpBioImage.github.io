---
layout: page
title: Sharing guide
---

<script>
    str = '<ul id="subheadings"><li><a href="#preparing">Preparing Images</a></li>' +
    '<li><a href="#simple">Simple Webpage</a></li>' +
    '<li><a href="#advanced">Advanced Webpage</a></li></ul>';
    document.getElementById("subheadings/sharingGuide/").innerHTML = str;
</script>

<h3> Introduction </h3>
This guide provides instruction on sharing volumetric image data using the FPBioimage. The guide is complemented by an [instructional video](https://www.youtube.com/watch?v=sdEQ59pYzSY).

You can also download this guide as a [PDF file](../sharingGuide.pdf).

<h3>License</h3>

*Use of FPBioimage requires a citation of the original publication of the software in [Nature Photonics](#). If FPBioimage is used to share data published in an academic journal, the original publication must be acknowledged in the references section of the publication.*

*First Person Bioimage (FPBioimage) is distributed under the [Creative Commons Attribution - ShareAlike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/). This means that, providing you credit the original software appropriately, you are free to copy, redistribute, remix, transform and build upon the software, as long as future contributions are distributed under the same license.*

<h3> Installing the viewer on your web server </h3>

1.	Download the software from [downloads](../downloads/)
2.	Unzip the contents of the .zip file
3.	Upload the folder ‘FPBioimage’ to your web server using your ftp client.


<h3 id="preparing">Preparing images for the viewer</h3>
Images must be saved as a stack of PNG files.  
The maximum resolution supported by FPBioimage is 500x500 pixels, and 500 images.  
The smaller the image size, the shorter the loading time will be for those viewing your data.

To prepare volumetric imaging data for the viewer we recommend the use of [ImageJ](http://fiji.sc/), an open-source imaging processing package. Whilst these instructions explain how to prepare your images using ImageJ, any image processing software which will prepare images to the specification above can be used.

The *Scale* function in ImageJ can be used to adjust the image stack to an appropriate size.  
Before saving in PNG format, the data must be rendered as an RGB image. Do this by selecting Image ► Color ► Stack to RGB. Uncheck “Keep Source”, and click OK.  
The stack can then be saved as PNG slices using File ► Save As ► Image Sequence, and selecting PNG as the Format.

<h3 id="simple">Creating a simple webpage for the viewer</h3>
FPBioimage runs on a webpage. In order to display volumetric data correctly the webpage requires some information about the data, for example the location of the images and the voxel size.

**Modifying the provided website template**  
The simplest way to display your 3D data online is to modify the provided website template, which is included in the [software package download](../downloads.html).  
You are free to modify and embellish the template webpage as you see fit for your website.


<h3 id="advanced">Advanced webpage creation</h3>
**Creating your own webpage**  
To create your own FPBioimage webpage from scratch requires the definition of several Javascript variables, a Javascript file to be called, and a WebGL canvas which needs to be included in the body of the webpage.

The following Javascript variables need to be defined in the header of the webpage (i.e. between the `<head>` and `</head>` tags):  

|  Variable | Type  | Example | Description
|---|---|
| `pathToImages` | string | `imageStacks/lemon` | Path to the image stack folder relative to the folder containing the FPBioimage folder. |
| `uniqueName` | string | `Lemon` | Defines a unique name. If two data sets share the same name on your website the bookmark behaviour may be unexpected. |
| `numberOfImages` | int | `269` | The number of images in the image stack. |
| `imagePrefix` | string | `lemon_z` | The images’ file names before the incrementing number. |
| `numberingFormat` | string | `0000` | Defines the format of the incrementing number in the images’ file names. |
| `voxelSize` | int[3] | `[1,1,1]` | The ratio of x:y:z voxel size. |
| `pathToFPBioimage` | string | `../FPBioimage` | Relative path from the webpage to the FPBioimage folder. |

The FPBioimage viewer should be included in the body of the webpage using the following HTML snippet:

```
<canvas class="emscripten" id="canvas" oncontextmenu="event.preventDefault()" height="600px" width="960px"></canvas>
```

The height and width can be changed as required.

The last thing to be defined in the body of the webpage should be the code required to load FPBioimage into the viewer. This HTML snippet should come after all page elements, since it can take a few seconds to load and will halt loading of the rest of the webpage for this time. The required HTML is as follows:

```
<div id="scriptLoader"></div>  

<script src="../FPBioimage/FPBioimageLoader.js"></script>
```

Note that if you want to preview the webpage offline on your local computer (i.e. not on a web server) you must set up a [localhost](https://html5hive.org/how-to-setup-a-localhost/) server for FPBioimage to work correctly.


<h3 id="assistance">Further assistance</h3>  
We are happy to provide further assistance to help you share your 3D data online. Email the developer at [fpBioimage@gmail.com](mailto:fpBioimage@gmail.com).

<a href="(https://creativecommons.org/licenses/by-sa/4.0/)">
<img src="/public/cc.png" style="display:inline; height:2em" alt="This software is covered by a Creative Commons Share Alike License, version 4.0"><img src="/public/cc-by.png" style="display:inline; height:2em" alt="You must give appropriate credit, provide a link to the license, and indicate if changes were made."><img src="/public/cc-sa.png" style="display:inline; height:2em" alt="You must distribute your contributions under the same license as the original.">
</a>
