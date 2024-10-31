// Objeto con las rutas de las imágenes
const images = {
  icon: "/img/icono.png",
  superNintendo: "/img/Super nintendo.jpg",
  nintendoNES: "/img/Nintendo NES.webp",
  gameBoySP: "/img/Game boy.webp",
  gameCube: "/img/Game cube.jpg",
  nintendo64: "/img/Nintendo 64.webp",
  nintendoDS: "/img/Nintendo DS.webp",
  nintendo3DS: "/img/Nintendo 3DS.webp",
  nintendoWii: "/img/Nintendo Wii.webp",
  nintendoWiiU: "/img/Nintendo Wii U.jfif",
  nintendoSwitch: "/img/Nintendo switch.webp",
  psp: "/img/PSP.webp",
  play1: "/img/Play 1.jpg",
  play2: "/img/Play 2.jpg",
  play3: "/img/Play 3.webp",
  play4: "/img/Play 4.webp",
  play5: "/img/Play 5.webp",
  xboxOne: "/img/Xbox one.jpg",
  xbox360: "/img/Xbox 360.webp",
  xboxSeriesX: "/img/Xbox series x.webp",
  psVita: "/img/PS Vita.jpg"
};

// Función para agregar una imagen a un contenedor específico
function addImage(containerClass, imageUrl, index = 0) {
  const containers = document.querySelectorAll(containerClass);
  if (containers[index]) { // Verifica si el contenedor con el índice existe
      const img = document.createElement("img");
      img.src = imageUrl;
      img.style.width = "9rem";
      img.style.height = "9rem";
      img.style.position = "relative";
      img.style.marginLeft = "3rem";
      containers[index].appendChild(img);
  } else {
      console.error(`Contenedor ${containerClass} no encontrado en índice ${index}`);
  }
}

// Añadir icono al contenedor de icono en el header
const iconContainer = document.getElementById("icon-container");
if (iconContainer) {
  const iconImg = document.createElement("img");
  iconImg.src = images.icon;
  iconImg.style.width = "2rem";
  iconImg.style.height = "2rem";
  iconImg.style.cursor = "pointer";
  iconContainer.appendChild(iconImg);
}

// Añadir imágenes a cada consola en la tienda
addImage(".container1 .img1", images.superNintendo, 0);
addImage(".container2 .img1", images.nintendoNES, 0);
addImage(".container3 .img1", images.gameBoySP, 0);
addImage(".container4 .img1", images.gameCube, 0);
addImage(".container5 .img1", images.nintendo64, 0);
addImage(".container6 .img1", images.nintendoDS, 0);
addImage(".container1 .img1", images.nintendo3DS, 1);
addImage(".container2 .img1", images.nintendoWii, 1);
addImage(".container3 .img1", images.nintendoWiiU, 1);
addImage(".container4 .img1", images.nintendoSwitch, 1);
addImage(".container5 .img1", images.psp, 1);
addImage(".container6 .img1", images.play1, 1);
addImage(".container1 .img1", images.play2, 2);
addImage(".container2 .img1", images.play3, 2);
addImage(".container3 .img1", images.play4, 2);
addImage(".container4 .img1", images.play5, 2);
addImage(".container5 .img1", images.xboxOne, 2);
addImage(".container6 .img1", images.xbox360, 2);
addImage(".container7 .img1", images.xboxSeriesX, 0);
addImage(".container8 .img1", images.psVita, 0);


