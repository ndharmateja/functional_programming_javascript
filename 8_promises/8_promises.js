const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error(`Could not load image: ${url}`))

    image.src = url
  })
}

const addImage = (image) => {
  var imageElement = document.createElement('img')
  imageElement.src = image.src
  document.body.appendChild(imageElement)
}

Promise.all([
  loadImage('images/1.jpeg'),
  loadImage('images/2.jpeg'),
  loadImage('images/3.jpeg'),
])
  .then((images) => images.forEach(addImage))
  .catch((error) => window.alert(error.message))
