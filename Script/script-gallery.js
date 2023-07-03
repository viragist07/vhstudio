
//maxValues = the number of images in the folder

const maxValues = [36, 33, 45, 53, 0, 0, 73, 41, 30, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function populateImageContainer(containerIndex, maxValue) {
  const container = document.querySelector(`.image-container_${containerIndex}`);

  if (container) {
    for (let i = 1; i <= maxValue; i++) {
      const img = document.createElement('img');
      img.src = `Images/Gallery/Gallery${containerIndex}/photo${i}.jpg`;
      container.appendChild(img);
    }
  } else {
    console.error(`Container image-container_${containerIndex} not found.`);
  }
}

for (let j = 1; j <= 30; j++) {
  const maxValue = maxValues[j - 1];
  populateImageContainer(j, maxValue);
}
