export function renderCards(products) {
  const cardSection = document.querySelector(".cards-section");
  cardSection.innerHTML = ''; // Clear any existing cards

  products.forEach((product) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <div class="card-content">
        <h2>$${product.price.toFixed(2)}</h2>
        <h4>${product.title}</h4>
        <div class="card-date">${new Date().toLocaleDateString()}</div>
        <p class="card-text">${product.description}</p>
        <p class="card-category">${product.category}</p>
        <div class="card-rating">
          Rating: ${product.rating.rate}/5 (${product.rating.count} reviews)
        </div>
        <a href="#" class="view-details">View Details</a>
      </div>
    `;

    cardSection.appendChild(cardElement);
  });
}