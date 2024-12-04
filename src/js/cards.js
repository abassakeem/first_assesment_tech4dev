export function renderCards(products) {
  const cardSection = document.querySelector(".cards-section");
  cardSection.innerHTML = "";

  products.forEach((product) => {
    const truncateDescription = (description) => {
      const words = description.split(" ");
      return words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
    };

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.classList.add("h-[500px]");

    cardElement.innerHTML = `

    <div class="items-center flex justify-center"><img src="${product.image}"  class=" w-1/2 card-img" alt="${
      product.title
    }" /></div>
      
      <div class="absolute bottom-0 left-0 right-0 p-4">
        <h2 class="text-xl font-bold">$${product.price.toFixed(2)}</h2>
        <h4 class="text-lg font-semibold truncate">${product.title}</h4>
        <div class="text-sm opacity-75 mb-2">${new Date().toLocaleDateString()}</div>
        <p class="text-sm mb-2 line-clamp-2">${truncateDescription(product.description)}</p>
        <p class="text-sm mb-2 opacity-80">${product.category}</p>
        <div class="text-sm mb-2">
          Rating: ${product.rating.rate}/5 (${product.rating.count} reviews)
        </div>
        <a 
          href="productDetails.html?id=${product.id}" 
          class="flex items-center font-bold text-sm hover:underline"
        >
          View Details
          <img 
            class="inline h-4 w-4 ml-2" 
            src="./img/Arrow--up-right.svg"
          />
        </a>
      </div>
    `;

    cardSection.appendChild(cardElement);
  });
}
