

const container = document.querySelector('.image-container');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modal-img');
const span = document.getElementsByClassName('close')[0];

const albumNames = ['Noémi & Hunor','Erika & Tixi','Helga & Norbi', 'Kinga & Hengi', 'Edina & Csaba', 'Rita & Krisztián', 'Boglárka & Lori', 'Boglárka & Levente', 'Andrea & Botond', 'Kriszta & Levente'];

for (let i = 10; i >= 1; i--) { // Start from latest album and decrement
  const imgContainer = document.createElement('div');
  imgContainer.className = 'image-item';

  const img = document.createElement('img');
  img.src = `Images/portfolio/image${i}.jpg`;

  


  const hoverText = document.createElement('div');
  hoverText.className = 'hover-text';
  hoverText.textContent = albumNames[10 - i]; // Reverse the index calculation

  imgContainer.appendChild(img);
  imgContainer.appendChild(hoverText);

  imgContainer.addEventListener('click', () => {
    window.location.href = `gallery_${i}.html`; // Redirect to corresponding gallery page
  });

  container.appendChild(imgContainer); // appendChild() is a method that allows you to add a new child element to an existing parent element
}

// // Close the modal by clicking the X
// span.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// });
