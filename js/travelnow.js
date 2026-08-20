const form = document.getElementById('travelForm');
const destinationSelect = document.getElementById('destination');
const priceList = document.getElementById('price-list');
const selectedDestinationText = document.getElementById('selected-destination');
const packageOptions = document.getElementById('package-options');
const selectedPackageInput = document.getElementById('selected-package');
const bookingSuccess = document.getElementById('booking-success');

const packages = {
  "Bali": [
    { name: "Economy Package", price: "Rp 2.000.000" },
    { name: "Standard Package", price: "Rp 2.500.000" },
    { name: "Luxury Package", price: "Rp 3.500.000" }
  ],
  "Yogyakarta": [
    { name: "Economy Package", price: "Rp 1.500.000" },
    { name: "Standard Package", price: "Rp 2.000.000" },
    { name: "Luxury Package", price: "Rp 2.800.000" }
  ],
  "Singapore": [
    { name: "Economy Package", price: "Rp 8.700.000" },
    { name: "Standard Package", price: "Rp 10.400.000" },
    { name: "Luxury Package", price: "Rp 16.200.000" }
  ],
  "Kuala Lumpur": [
    { name: "Economy Package", price: "Rp 2.400.000" },
    { name: "Standard Package", price: "Rp 3.100.000" },
    { name: "Luxury Package", price: "Rp 4.400.000" }
  ],
  "Jakarta": [
    { name: "Economy Package", price: "Rp 3.200.000" },
    { name: "Standard Package", price: "Rp 4.500.000" },
    { name: "Luxury Package", price: "Rp 6.000.000" }
  ]
};

let currentSelected = null;

destinationSelect.addEventListener('change', function () {
  const selected = this.value;
  selectedPackageInput.value = "";
  currentSelected = null;

  if (packages[selected]) {
    selectedDestinationText.textContent = selected;
    packageOptions.innerHTML = "";

    packages[selected].forEach(pkg => {
      const li = document.createElement('li');
      li.className = "package-option";
      li.textContent = `${pkg.name}: ${pkg.price}`;

      li.addEventListener('click', function () {
        document.querySelectorAll('.package-option').forEach(el => {
          el.style.backgroundColor = "";
          el.style.fontWeight = "";
        });

        li.style.backgroundColor = "#ADD8E6";
        li.style.fontWeight = "bold";
        selectedPackageInput.value = `${pkg.name} - ${pkg.price}`;
        currentSelected = pkg;
      });

      packageOptions.appendChild(li);
    });

    priceList.style.display = 'block';
  } else {
    priceList.style.display = 'none';
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!selectedPackageInput.value) {
    alert("Please select a package before booking.");
    return;
  }

  bookingSuccess.style.display = "flex";
});

function closeSuccess() {
  bookingSuccess.style.display = "none";
  form.reset();
  priceList.style.display = "none";
  packageOptions.innerHTML = "";
  selectedPackageInput.value = "";
}


