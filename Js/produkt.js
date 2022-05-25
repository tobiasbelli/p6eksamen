

let myImage = document.getElementById("mainImage");
  let myImage1 = document.getElementById("mainImage1");
    let myImage2 = document.getElementById("mainImage2");
let imageArray = [
  'images/wiserprodukt1.jpg',
  'images/wiserprodukt6.jpg',
  'images/wiserprodukt7.jpg',
  'images/wiserprodukt8.jpg',
]
let imageArray1 = [
  'images/wiserprodukt9.jpg',
  'images/wiserprodukt10.jpg',
  'images/wiserprodukt11.jpg',
  'images/wiserprodukt12.jpg',
 ]
let imageArray2 = [
  'images/wiserprodukt13.jpg',
  'images/wiserprodukt14.jpg',
  'images/wiserprodukt15.jpg',
  'images/wiserprodukt16.jpg',
                            ];
let imageIndex = 0;

function changeImage(image,array) {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex > 3 ) {imageIndex = 0;}
    setTimeout(changeImage, 2000);
}
function changeImage1(image,array) {
    myImage1.setAttribute("src", imageArray1[imageIndex]);
    if (imageIndex > 3 ) {imageIndex = 0;}
    setTimeout(changeImage1, 2000);
}
function changeImage2(image,array) {
    myImage2.setAttribute("src", imageArray2[imageIndex]);
    if (imageIndex > 3 ) {imageIndex = 0;}
    setTimeout(changeImage2, 2000);
}


changeImage();
changeImage1();
changeImage2();
