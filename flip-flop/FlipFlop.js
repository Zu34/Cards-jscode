// Example product data
const products = [
  {
    id: 1,
    name: "Apple",
    price: "$1.2",
    description: "Fresh and juicy apples.",
    imgSrc: "./imgs/apple.png",
  },
  {
    id: 2,
    name: "Banana",
    price: "$0.8",
    description: "Delicious bananas.",
    imgSrc: "./imgs/banana.png",
  },
  {
    id: 3,
    name: "Cherry",
    price: "$3.5",
    description: "Sweet red cherries.",
    imgSrc: "./imgs/cherry.png",
  },
];
  
  // Function to display products in flip cards
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
      // Create the flip card container
      const flipCard = document.createElement('div');
      flipCard.classList.add('flip-card');
  
      // Create the inner part of the flip card
      const flipCardInner = document.createElement('div');
      flipCardInner.classList.add('flip-card-inner');
  
      // Front of the card
      const flipCardFront = document.createElement('div');
      flipCardFront.classList.add('flip-card-front');
      flipCardFront.innerHTML = `
        <img src="${product.imgSrc}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;">
      `;
      
      // Back of the card (empty initially)
      const flipCardBack = document.createElement('div');
      flipCardBack.classList.add('flip-card-back');
      flipCardBack.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
      `;
  
      // Append front and back to inner part
      flipCardInner.appendChild(flipCardFront);
      flipCardInner.appendChild(flipCardBack);
      
      // Append inner part to flip card
      flipCard.appendChild(flipCardInner);
      
      // Add click event to dynamically populate the back content
      flipCard.addEventListener('click', () => showProductDetails(product.id));
  
      // Append flip card to the product list
      productList.appendChild(flipCard);
    });
  }
  
  // Function to show product details (can use innerHTML for this as well)
  function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Product Details:\n\nName: ${product.name}\nPrice: ${product.price}\nDescription: ${product.description}`);
  }
  
  // Call the function to display products
  displayProducts(products);
  