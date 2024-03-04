
# 🖼 About Images

This document is a general guide on how to approach using images in a repository. 

**Note:** In this class you will use Google drive to link to images in markdown. DO NOT store images in your repository. The information below explains why this is a requirement, and how you can work with images stored on Google drive. 



## Important! 

* **General Rule:** Avoid uploading images to GitHub  👎
* **Reaon:** Every image upload bloats the size of the repo. Not good... 👿 
* **Solution:** Embed the image by linking to it instead  ☺️

> **Good to know:** If you upload an image using version control and later delete the image, it still remains in the project's history. 
> 
> This is why it's best to avoid uploading images in the first place! 

<br>

## How to Embed Images in Markdown

Use Google or another drive location online. 

**Linking to an image online**  
If you are linking to a public image resource online, the markdown syntax is simple. Replace the text inside the braces [ ] and parenthesis ( ) below with your own label and URL...

`![***LABEL HERE***](***URL HERE***)`

If you are linking to a Google Drive image, follow the steps outlined below.

### How to Use Google Drive

* Upload your image to Google drive 
* Right click on your Google image and share it. Use the following settings...

![Share Image](https://drive.google.com/uc?id=1A3TpbXDbJ7YUF3vnEetlddhZJipI7Kg7)

<br>

**Set The Share Setting To:** Anyone with the link!

![Share Setting](https://drive.google.com/uc?id=1ACto6zZGkjFxTicnv0Q80_Wa-tp37rSv)


### Use the Google image ID 

`![***LABEL***](https://drive.google.com/uc?id=`

* The URL above shows how to link to an image on Google Drive
* Replace `***LABEL***` with your own title for the image (not seen by user)
* Paste the unique Google image ID after "id=". For example...   

**Original Google image URL**  
`https://drive.google.com/file/d/1IwlQ_GO0AiffAKQtOdbeGkEYr02Ml4iV/view?usp=sharing`

**Link to Google image using markdown**  
`![Image ID Example](https://drive.google.com/uc?id=1IwlQ_GO0AiffAKQtOdbeGkEYr02Ml4iV)`

<br>

### Locating a Google Image ID 
The example below highlights in yellow where to locate a Google image ID.  
**Note:** It is located after **"d/"** and before **"/view"**

![Image ID Example](https://drive.google.com/uc?id=1IwlQ_GO0AiffAKQtOdbeGkEYr02Ml4iV)

