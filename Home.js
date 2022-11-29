var images = document.querySelectorAll('.mySlides')
var imageIndex = 0

showImage(imageIndex)

function plusSlides(flag) {
  imageIndex += flag
  if (imageIndex < 0) {
    imageIndex = 5
  }
  if (imageIndex > 5) {
    imageIndex = 0
  }
  showImage(imageIndex)
}

function showImage(index) {
  images.forEach(function(image,index) {
      if (imageIndex == index) {
        image.style.display = "block"
      } else {
        image.style.display = "none"
      }
  })
}