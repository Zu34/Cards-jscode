// Example data for the cards, including image URLs this is a manual data same sample of a jason file 

const products = [
  { 
    name: "Apple", 
    price: "$3.2", 
    description: "Fresh and juicy apples.", 
    imgSrc: "./imgs/apple.png" 
  },
  { 
    name: "Banana", 
    price: "$0.9", 
    description: "Delicious bananas.", 
    imgSrc: "./imgs/banana.png" 
  },
  { 
    name: "Cherry", 
    price: "$3.0", 
    description: "Sweet red cherries.", 
    imgSrc: "./imgs/cherry.png" 
  }
];

// Get the container where the cards will be inserted
const cardContainer = document.getElementById('card-container');

// Create a row container first
const row = document.createElement('div');
row.classList.add('row');

// Loop through to create each card
products.forEach(product => {
// Create a card div
const card = document.createElement('div');
card.classList.add('col-md-4', 'mb-4'); 

// Inner HTML for the card's content!!
card.innerHTML = `
  <div class="card">
    <img src="${product.imgSrc}" class="card-img-top" alt="${product.name}" style="object-fit: contain; width: 100%; height: 200px;">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <p class="card-text"><strong>${product.price}</strong></p>
    </div>
  </div>
`;

// Append the card to the row that contains the content "col"
row.appendChild(card);
});

// Now let's append the entire row to the card container here in this calling function
cardContainer.appendChild(row);
