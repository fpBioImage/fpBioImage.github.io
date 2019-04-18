---
layout: page
title: Sharing guide
---

<script>
    str = '<ul id="subheadings"><li><a href="#basic">Basic Usage</a></li>' +
    '<li><a href="#advanced">Advanced</a></li></ul>';
    document.getElementById("subheadings/sharingGuide/").innerHTML = str;
</script>

**_Don't forget to [cite](https://doi.org/10.1038/nphoton.2016.273)!_**

_If you use FPBioimage to share your data, please cite our original publication in [Nature Photonics](https://doi.org/10.1038/nphoton.2016.273). This is required by the [license](#license)!_

<h3 id="Installation">ImageJ/FIJI Installation</h3>
1. Install the FPBioimage plugin with 'Help -> Update -> Manage update sites -> FPBioimage' ([see here for update site details](https://imagej.net/Fpbioimage))
2. Download and install the [FPBioimage Viewer]((downloads)
  * Windows: run *setup.exe*
  * Mac: open the _dmg_ file, and copy _FPBioimage_ into your _Applications_ folder
  * Linux: extract the tarball with `tar -zxvf FPBioimage-x.x.x.tar.gz`, then in the extracted folder run `make install`
3. Run the FPBioimage helper plugin


<h3 id="basic">Quick start</h3>

**ImageJ or FIJI**
1. Install the FPBioimage as above
2. Open your 3D data, and adjust the color map or histogram as appropriate
3. Choose Plugins -> FPBioimage Helper to start the viewer
4. Check the fields and click OK
5. When you're happy with the rendering (e.g. opacity, cutting plane) click 'Upload to FPB-Host'
  * Alternatively, click 'Save locally only' to generate a webpage for your own private web server
6. Log in with a Google account, and your data will be uploaded for anyone to view!

<h3 id="advanced">Advanced sharing</h3>

If you want to create your own FPBioimage webpage manually, you can save images as a PNG stack, and the webpage needs to contain some JSON and Javascript to tell the webpage how to load FPBioimage. Note that the FPBioimage Helper plugins do this automatically for you, so if you want to share your data immediately just follow the instruction above.


<h3 id="preparing">Preparing images for the viewer</h3>
Images must be saved as a stack of PNG files.  
The maximum resolution supported by FPBioimage is 500x500 pixels, and 500 images.  
The smaller the image size, the shorter the loading time will be for those viewing your data.

To prepare volumetric imaging data for the viewer manually we recommend the use of [ImageJ](https://fiji.sc/), an open-source imaging processing package. Whilst these instructions explain how to prepare your images using ImageJ, any image processing software which will prepare images to the specification above can be used.

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
| `pathToFPBioimage` | string | `https://fpb.ceb.cam.ac.uk/4` | This tells the webpage to use version 4 of FPBioimage. |

The FPBioimage viewer should be included in the body of the webpage using the following HTML snippet:

```
<div id="fpbDiv"></div>
```

The height and width can be changed as required.

The last thing to be defined in the body of the webpage should be the code required to load FPBioimage into the viewer. This HTML snippet should come after all page elements, since it can take a few seconds to load and will halt loading of the rest of the webpage for this time. The required line of HTML is:

```
<script src="https://fpb.ceb.cam.ac.uk/4/FPProgress.js"></script>
```

Note that if you want to preview the webpage offline on your local computer (i.e. not on a web server) you must set up a [localhost](https://html5hive.org/how-to-setup-a-localhost/) server for FPBioimage to load images correctly.

<h3 id="assistance">Further assistance</h3>  
We are very happy to provide further assistance to help you share your 3D data online. Email the developer at [fpBioimage@gmail.com](mailto:fpbioimage@gmail.com).

<h3 id="license">License</h3>

*First Person Bioimage (FPBioimage) is distributed under the [Creative Commons Attribution - ShareAlike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/). This means that, providing you credit the original software appropriately, you are free to copy, redistribute, remix, transform and build upon the software, as long as future contributions are distributed under the same license.*

*If you use FPBioimage to publish work in an academic journal, please citation the original publication of the software in [Nature Photonics](https://doi.org/10.1038/nphoton.2016.273).*

<a href="(https://creativecommons.org/licenses/by-sa/4.0/)">
<img src="/public/cc.png" style="display:inline; height:2em" alt="This software is covered by a Creative Commons Share Alike License, version 4.0"><img src="/public/cc-by.png" style="display:inline; height:2em" alt="You must give appropriate credit, provide a link to the license, and indicate if changes were made."><img src="/public/cc-sa.png" style="display:inline; height:2em" alt="You must distribute your contributions under the same license as the original.">
</a>
