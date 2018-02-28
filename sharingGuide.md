---
layout: default
title: Sharing guide
---

<script>
    str = '<ul id="subheadings"><li><a href="#basic">Basic Usage</a></li>' +
    '<li><a href="#advanced">Advanced</a></li></ul>';
    document.getElementById("subheadings/sharingGuide/").innerHTML = str;
</script>

**_Don't forget to [cite](https://doi.org/10.1038/nphoton.2016.273)!_**

_If you use FPBioimage to share your data, please cite our original publication in [Nature Photonics](https://doi.org/10.1038/nphoton.2016.273). This is required by the [license](#license)!_

<h3 id="basic">Basic Usage</h3>

**ImageJ or FIJI**
1. Install the FPBioimage plugin ([see here for update site details](http://imagej.net/Fpbioimage))
2. Open your 3D data, and adjust the color map or histogram as appropriate
3. Ensure your image is in RGB format (Image -> Type -> RGB Color)
4. Choose Plugins -> FPBioimage Helper to start the helper
5. Fill in the fields and click OK
6. Share your AWS webpage link, or upload the saved webpage and image folder to a personal web server

**Icy**
1. Open your 3D data, and adjust the color maps and histograms as appropriate
2. Run the fpbioimagehelper plugin using the search bar within Icy
    * Note the plugin will download and install automatically if necessary
3. Fill in the fields and click the 'play' button (►)
4. Share your AWS webpage link, or upload the saved webpage and image folder to a personal web server

<h3 id="advanced"> Advanced Users </h3>

If you want to create your own FPBioimage webpage manually, the images must be saved as a PNG stack, and the webpage needs to contain some JSON and Javascript to tell the webpage how to load FPBioimage.


<h3 id="preparing">Preparing images for the viewer</h3>
Images must be saved as a stack of PNG files.  
The maximum resolution supported by FPBioimage is 500x500 pixels, and 500 images.  
The smaller the image size, the shorter the loading time will be for those viewing your data.

To prepare volumetric imaging data for the viewer manually we recommend the use of [ImageJ](http://fiji.sc/), an open-source imaging processing package. Whilst these instructions explain how to prepare your images using ImageJ, any image processing software which will prepare images to the specification above can be used.

The *Scale* function in ImageJ can be used to adjust the image stack to an appropriate size.  
Before saving in PNG format, the data must be rendered as an RGB image. Do this by selecting Image ► Color ► Stack to RGB. Uncheck “Keep Source”, and click OK.  
The stack can then be saved as PNG slices using File ► Save As ► Image Sequence, and selecting PNG as the Format.

<h3 id="simplepage">Creating a simple webpage for the viewer</h3>
FPBioimage runs on a webpage. In order to display volumetric data correctly the webpage requires some information about the data, for example the location of the images and the voxel size.

**Modifying the provided website template**  
The simplest way to display your 3D data online is to modify the provided website template, which can be found on the [download page](../downloads/).  
You are free to modify and embellish the template webpage as you see fit for your website.


<h3 id="advancedpage">Advanced webpage creation</h3>
**Creating your own webpage**  
To create your own FPBioimage webpage from scratch requires the definition of a JSON variable, a Javascript file to be called, and a WebGL canvas which needs to be included in the body of the webpage.

The following JSON variable need to be defined in the header of the webpage (i.e. between the `<head>` and `</head>` tags):  

|  Variable | Type  | Example | Description
|---|---|
| `fpb.pathToImages` | string | `imageStacks/lemon` | Path to the image stack folder relative to the folder containing the FPBioimage folder. |
| `fpb.uniqueName` | string | `Lemon` | Defines a unique name. If two data sets share the same name on your website the bookmark behaviour may be unexpected. |
| `fpb.numberOfImages` | int | `269` | The number of images in the image stack. |
| `fpb.imagePrefix` | string | `lemon_z` | The images’ file names before the incrementing number. |
| `fpb.numberingFormat` | string | `0000` | Defines the format of the incrementing number in the images’ file names. |
| `fpb.voxelSize.x` | float | `1.5` | The x in the ratio of x:y:z voxel size. |
| `fpb.voxelSize.y` | float | `1.5` | The y in the ratio of x:y:z voxel size. |
| `fpb.voxelSize.z` | float | `2.0` | The z in the ratio of x:y:z voxel size. |
| `pathToFPBioimage` | string | `http://fpb.ceb.cam.ac.uk/4` | This tells the webpage to use version 4 of FPBioimage. |

The FPBioimage viewer should be included in the body of the webpage using the following HTML snippet:

```
<div id="fpbDiv"></div>
```

The height and width can be changed as required.

The last thing to be defined in the body of the webpage should be the code required to load FPBioimage into the viewer. This HTML snippet should come after all page elements, since it can take a few seconds to load and will halt loading of the rest of the webpage for this time. The required HTML is as follows:

```
<div id="jsHolder"></div>

<script type="text/javascript">
var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src = fpb.pathToFPBioimage + "/FPProgress.js";
    s1.innerHTML = null;
    document.getElementById("jsHolder").innerHTML = "";
    document.getElementById("jsHolder").appendChild(s1);
</script>
```

Note that if you want to preview the webpage offline on your local computer (i.e. not on a web server) you must set up a [localhost](https://html5hive.org/how-to-setup-a-localhost/) server for FPBioimage to work correctly.

<h3 id="assistance">Further assistance</h3>  
We are happy to provide further assistance to help you share your 3D data online. Email the developer at [fpBioimage@gmail.com](mailto:fpbioimage@gmail.com).

<h3 id="license">License</h3>

*Use of FPBioimage requires a citation of the original publication of the software in [Nature Photonics](https://doi.org/10.1038/nphoton.2016.273). If FPBioimage is used to share data published in an academic journal, the original publication must be acknowledged in the references section of the publication.*

*First Person Bioimage (FPBioimage) is distributed under the [Creative Commons Attribution - ShareAlike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/). This means that, providing you credit the original software appropriately, you are free to copy, redistribute, remix, transform and build upon the software, as long as future contributions are distributed under the same license.*

<a href="(https://creativecommons.org/licenses/by-sa/4.0/)">
<img src="/public/cc.png" style="display:inline; height:2em" alt="This software is covered by a Creative Commons Share Alike License, version 4.0"><img src="/public/cc-by.png" style="display:inline; height:2em" alt="You must give appropriate credit, provide a link to the license, and indicate if changes were made."><img src="/public/cc-sa.png" style="display:inline; height:2em" alt="You must distribute your contributions under the same license as the original.">
</a>
