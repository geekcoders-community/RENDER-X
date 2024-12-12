const cards = [
    {
      prof: "./assets/prof1.png",
      name: "Bang Upin",
      username: "Pedagang Asongan",
      review: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      
    },
    {
      prof: "./assets/prof2.png",
      name: "Ibuk Sukijan",
      username: "Ibu Rumah Tangga",
      review: "Makasih Panto, aku sekarang merasa tinggal di apartemen karena barang-barang yang terlihat mewah",
      
    },
    {
      prof: "./assets/prof3.png",
      name: "Mpok Ina",
      username: "Karyawan Swasta",
      review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
     
    }
];

const cardContainer = document.getElementById("testdiv");

// Generate cards dynamically
cards.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  
  
  cardElement.innerHTML = `
    <div class="testcard">
    <div class="profile">
      <img src="${card.prof}" alt="${card.name}" />
    </div>
    <div class="name">${card.name}</div>
    <div class="username">${card.username}</div>
    <div class="review">"${card.review}"</div>
    </div>
  `;
  
  cardContainer.appendChild(cardElement);
});

// Get the popup and button elements
const openPopupBtn = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopup");

// Function to open the popup
openPopupBtn.addEventListener("click", () => {
  popup.style.display = "flex"; // Show the popup
});

// Function to close the popup
closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none"; // Hide the popup
});

// Optional: Close the popup when clicking outside the popup content
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none"; // Hide the popup if clicked outside
  }
});




const form = document.getElementById("furnitureForm"); // Get the form element
const nameInput = document.getElementById("name"); // Get the Name input
const phoneInput = document.getElementById("phone"); // Get the Phone input
const furnitureDetailsInput = document.getElementById("furnitureDetails");

// Form submission handling
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Create an object to store form input values
    const formData = {
      name: nameInput.value,
      phoneNumber: phoneInput.value,
      furnitureDetails: furnitureDetailsInput.value
    };
  
    // Log the formData object to the console
    console.log(formData);
  
    // Optionally, you can clear the form after submission (if desired)
    form.reset();
  

    popup.style.display = "none"; // Hide the popup
  });
  