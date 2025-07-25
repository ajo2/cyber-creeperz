function gallerySectionCardMouseOver(choosenImg, mouseOperation) {
    if (choosenImg == 'tourvibe') {
        if (mouseOperation == 'in') {
            document.querySelector(".gallerySection1CardImg1").style.cssText = `    filter:grayscale(500%);    box-shadow: 5px 5px 50px black,-5px -5px 50px black;`
            document.querySelector(".gallerySection1CardTxt1").style.cssText = `
            background: #76DF39;
background: linear-gradient(to right, #76DF39 0%, #FF0EF7 49%, #00FFEE 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family:cursive;
            font-weight: bold;
`
        }
        if (mouseOperation == 'out') {
            document.querySelector(".gallerySection1CardImg1").style.cssText = `filter:grayscale(0%);`
            document.querySelector(".gallerySection1CardTxt1").style.cssText = `
                        background: none;


            font-weight: 122px;`

        }
    }
    if (choosenImg == 'schoolday') {
        if (mouseOperation == 'in') {
            document.querySelector(".gallerySection1CardImg2").style.cssText = `    filter:grayscale(500%);    box-shadow: 5px 5px 50px black,-5px -5px 50px black;`
            document.querySelector(".gallerySection1CardTxt2").style.cssText = `
            background: #76DF39;
background: linear-gradient(to right, #76DF39 0%, #FF0EF7 49%, #00FFEE 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family:cursive;
            font-weight: bold;
`
        }
        if (mouseOperation == 'out') {
            document.querySelector(".gallerySection1CardImg2").style.cssText = `filter:grayscale(0%);`
            document.querySelector(".gallerySection1CardTxt2").style.cssText = `
                        background: none;


            font-weight: 122px;`

        }
    }
      if (choosenImg == 'sportsday') {
        if (mouseOperation == 'in') {
            document.querySelector(".gallerySection1CardImg3").style.cssText = `    filter:grayscale(500%);    box-shadow: 5px 5px 50px black,-5px -5px 50px black;`
            document.querySelector(".gallerySection1CardTxt3").style.cssText = `
            background: #76DF39;
background: linear-gradient(to right, #76DF39 0%, #FF0EF7 49%, #00FFEE 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family:cursive;
            font-weight: bold;
`
        }
        if (mouseOperation == 'out') {
            document.querySelector(".gallerySection1CardImg3").style.cssText = `filter:grayscale(0%);`
            document.querySelector(".gallerySection1CardTxt3").style.cssText = `
                        background: none;


            font-weight: 122px;`

        }
    }

    if (choosenImg == 'fairwell') {
        if (mouseOperation == 'in') {
            document.querySelector(".gallerySection1CardImg4").style.cssText = `    filter:grayscale(500%);    box-shadow: 5px 5px 50px black,-5px -5px 50px black;`
            document.querySelector(".gallerySection1CardTxt4").style.cssText = `
            background: #76DF39;
background: linear-gradient(to right, #76DF39 0%, #FF0EF7 49%, #00FFEE 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family:cursive;
            font-weight: bold;
`
        }
        if (mouseOperation == 'out') {
            document.querySelector(".gallerySection1CardImg4").style.cssText = `filter:grayscale(0%);`
            document.querySelector(".gallerySection1CardTxt4").style.cssText = `
                        background: none;


            font-weight: 122px;`

        }
    }

    if (choosenImg == 'reels') {
        if (mouseOperation == 'in') {
            document.querySelector(".gallerySection1CardImg5").style.cssText = `    filter:grayscale(500%);    box-shadow: 5px 5px 50px black,-5px -5px 50px black;`
            document.querySelector(".gallerySection1CardTxt5").style.cssText = `
            background: #76DF39;
background: linear-gradient(to right, #76DF39 0%, #FF0EF7 49%, #00FFEE 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family:cursive;
            font-weight: bold;
`
        }
        if (mouseOperation == 'out') {
            document.querySelector(".gallerySection1CardImg5").style.cssText = `filter:grayscale(0%);`
            document.querySelector(".gallerySection1CardTxt5").style.cssText = `
                        background: none;


            font-weight: 122px;`

        }
    }

}







//animation: TextColorGreen 5s linear infinie




























// function gallerySectionCardMouseOver(choosenImg, mouseOperation) {
//     const tittle = choosenImg
//     const opperation = mouseOperation
//     if(tittle=='tourvibe'){
//         if(opperation=='in'){

//         document.querySelector(".gallerySection1CardImg1").style.display="none"
//         document.querySelector(".gallerySection1CardTxt").style.cssText = `
//             font-family:cursive;
//             font-size:50px;
//             position:relative;
//             bottom:25px;
//                             animation: gallerySection1CardAnimateIn .5s linear 1 ;

//             `
//         }
//         if(opperation=='out'){
//             document.querySelector(".gallerySection1CardImg1").style="flex"
//              document.querySelector(".gallerySection1CardTxt").cssText = `font-size:15px;
//                  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//                      position: relative`


//         }
//     }




