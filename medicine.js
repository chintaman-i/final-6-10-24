const productData = [
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-1-1647434835.jpg?dim=320x320&dpr=1&q=100",
      name: "Ecosprin 75mg Strip Of 14 Tablets",
      mfgby:"USV PVT LTD",
      description:"14 Tablet(s) in Strip",
      price: 3.99,
      quantity:1,
      strikedoffprice: 4.86,
      uniqueid:"#m1"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/159115/shelcal-500mg-strip-of-15-tablets-2-1641531946.jpg?dim=320x320&dpr=1&q=100",
      name: "Shelcal 500mg Strip Of 15 Tablets",
      mfgby: "By TORRENT PHARMACEUTICALS LTD",
      description: "15 Tablet(s) in Strip",
      price: 89.13,
      quantity:1,
      strikedoffprice: 108.70,
      uniqueid:"#m2"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-1-1641535995.jpg?dim=320x320&dpr=1&q=100",
      name: "Ecosprin Av 75mg Strip Of 15 Capsules",
      mfgby: "By USV PVT LTD",
      description: "15 Capsule(s) in Strip",
      price: 45.23,
      quantity:1,
      strikedoffprice: 55.16,
      uniqueid:"#m3"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/I00306/pan-40mg-strip-of-15-tablets-2-1641531068.jpg?dim=320x320&dpr=1&q=100",
      name: "Pan 40mg Strip Of 15 Tablets",
      mfgby: "By ALKEM LABORATORIES LTD",
      description: "15 Tablet(s) in Strip",
      price: 123.82,
      quantity:1,
      strikedoffprice: 151.00,
      uniqueid:"#m4"    
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/I48564/new-celin-500mg-strip-of-25-tablets-2-1641537879.jpg?dim=320x320&dpr=1&q=100",
      name: "New Celin 500mg Strip Of 25 Tablets",
      mfgby: "By KOYE PHARMACEUTICALS PVT LTD",
      description: "25 Tablet(s) in Strip",
      price: 31.68,
      quantity:1,
      strikedoffprice: 38.64,
      uniqueid:"#m5"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/022236/becosules-strip-of-20-capsules-2-1641535886.jpg?dim=320x320&dpr=1&q=100",
      name: "Becosules Strip Of 20 Capsules",
      mfgby: "By PFIZER LTD",
      description: "20 Capsule(s) in Strip",
      price: 37.45,
      quantity:1,
      strikedoffprice: 45.67,
      uniqueid:"#m6"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/059346/dolo-650mg-strip-of-15-tablets-2-1641535221.jpg?dim=320x320&dpr=1&q=100",
      name: "Dolo 650mg Strip Of 15 Tablets",
      mfgby: "By MICRO LABS",
      description: "15 Tablet(s) in Strip",
      price: 25.35,
      quantity:1,
      strikedoffprice: 30.91,
      uniqueid:"#m7"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/I02514/telma-40mg-strip-of-30-tablets-2-1641530972.jpg?dim=320x320&dpr=1&q=100",
      name: "Telma 40mg Strip Of 30 Tablets",
      mfgby: "By GLENMARK PHARMACEUTICALS",
      description: "30 Tablet(s) in Strip",
      price: 182.12,
      quantity:1,
      strikedoffprice: 222.10,
      uniqueid:"#m8"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/196280/d-500mg-cal-tab-2-1641530784.jpg?dim=320x320&dpr=1&q=100",
      name: "D 500mg Cal Tab",
      mfgby: "By ERIS LIFE SCIENCES PVT LTD",
      description: "10 Tablet(s) in Strip",
      price: 58.06,
      quantity:1,
      strikedoffprice: 70.81,
      uniqueid:"#m9"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/066200/emeset-4mg-tablet-2-1641535237.jpg?dim=320x320&dpr=1&q=100",
      name: "Emeset 4mg Tablet",
      mfgby: "By CIPLA LIMITED",
      description: "10 Tablet(s) in Strip",
      price: 43.15,
      quantity:1,
      strikedoffprice: 52.50,
      uniqueid:"#m10"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/275800/lf-100-powder-200gm-2-1641530520.jpg?dim=320x320&dpr=1&q=100",
      name: "Lf 100 Powder 200gm",
      mfgby: "By BRITISH BIOLOGICALS",
      description: "200g Oral Powder in Bottle",
      price: 200,
      quantity:1,
      strikedoffprice: 250,
      uniqueid:"#m11"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/082031/gaspaz-capsule-1-1641536045.jpg?dim=320x320&dpr=1&q=100",
      name: "Gaspaz Capsule",
      mfgby: "By BIOLOGICAL E LIMITED",
      description: "10 Capsule(s) in Strip",
      price: 19.79,
      quantity:1,
      strikedoffprice: 24.13,
      uniqueid:"#m12"},
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/242144/hcqs-300mg-tablet-2-1641532273.jpg?dim=320x320&dpr=1&q=100",
      name: "Hcqs 300mg Tablet",
      mfgby: "By IPCA LABORATORIES",
      description: "10 Tablet(s) in Strip",
      price: 137.88,
      quantity:1,
      strikedoffprice: 168.15,
      uniqueid:"#m13"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/I34825/imatib-100mg-tablet-10s-box-front-1-1626079160.jpg?dim=320x320&dpr=1&q=100",
      name: "Imatib 100mg Tablet 10'S",
      mfgby: "By CIPLA LIMITED",
      description: "10 Tablet(s) in Strip",
      price: 361.88,
      quantity:1,
      strikedoffprice: 441.00,
      uniqueid:"#m14",
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/262322/janumet-50-500mg-tablet-15s-2-1641533703.jpg?dim=320x320&dpr=1&q=100",
      name: "Janumet 50/500mg Tablet 15'S",
      mfgby: "By MSD PHARMACEUTICALS INDIAN PRIVATE LTD",
      description: "15 Tablet(s) in Strip",
      price: 332.10,
      quantity:1,
      strikedoffprice: 405.00,
      uniqueid:"#m15"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/I14617/kugold-cap-10s-1-1641537562.jpg?dim=320x320&dpr=1&q=100",
      name: "Kugold Cap 10'S",
      mfgby: "By KURESYS LABS PVT LTD",
      description: "10 Capsule(s) in Strip",
      price: 451.00,
      quantity:1,
      strikedoffprice: 550,
      uniqueid:"#m16"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/195898/lamez-100mg-tablet-2-1641532204.jpg?dim=320x320&dpr=1&q=100",
       name: "Lamez 100mg Tablet",
      mfgby: "By INTAS PHARMACEUTICALS LTD",
      description: "By INTAS PHARMACEUTICALS LTD",
      price: 154.98,
      quantity:1,
      strikedoffprice: 189.00,
      uniqueid:"#m17"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/202747/lcz-10mg-tablet-2-1641534252.jpg?dim=320x320&dpr=1&q=100",
      name: "Lcz 10mg Tablet",
      mfgby: "By RAPROSS PHARMACEUTICALS PVT LTD",
      description: "10 Tablet(s) in Strip",
      price: 35.59,
      quantity:1,
      strikedoffprice: 43.40,
      uniqueid:"#m18"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/102035/lametec-dt-50mg-tablet-2-1641530557.jpg?dim=320x320&dpr=1&q=100",
      name: "Lametec Dt 50mg Tablet",
      mfgby: "By CIPLA LIMITED",
      description: "10 Tablet(s) in Strip",
      price: 142.85,
      quantity:1,
      strikedoffprice: 174.00,
      uniqueid:"#m19"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/117305/mox-500mg-capsule-2-1641534222.jpg?dim=320x320&dpr=1&q=100",
      name: "Mox 500mg Capsule",
      mfgby: "By RANBAXY LABORATORIES (SUN PHARMA)",
      description: "15 Capsule(s) in Strip",
      price: 89.13,
      quantity:1,
      strikedoffprice: 108.70,
      uniqueid:"#m20"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/192671/nova-75mg-strip-of-10-capsules-2-1641530586.jpg?dim=320x320&dpr=1&q=100",
      name: "Nova 75mg Strip Of 10 Capsules",
      mfgby: "By CIPLA LIMITED",
      description: "10 Capsule(s) in Strip",
      price: 111.04,
      quantity:1,
      strikedoffprice: 134.50,
      uniqueid:"#m21"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/147230/rablet-d-capsule-2-1641532959.jpg?dim=320x320&dpr=1&q=100",
      name: "Rablet D Capsule",
      mfgby: "By LUPIN",
      description: "10 Capsule(s) in Strip",
      price: 150.06,
      quantity:1,
      strikedoffprice: 183.00,
      uniqueid:"#m22"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/263526/tayo-strip-of-15-tablets-2-1641531435.jpg?dim=320x320&dpr=1&q=100",
      name: "Tayo Strip Of 15 Tablets",
      mfgby: "By ERIS LIFE SCIENCES PVT LTD",
      description: "15 Tablet(s) in Strip",
      price: 91.50,
      quantity:1,
      strikedoffprice: 112,
      uniqueid:"#m23"
    },
    {
      image_url:
        "https://cdn01.pharmeasy.in/dam/products/I00960/yasmin-strip-of-21-tablets-1597360265265-1641531153.jpg?dim=320x320&dpr=1&q=100",
      name: "Yasmin Strip Of 21 Tablets",
      mfgby: "By BAYER ZYDUS PHARMA",
      description: "21 Tablet(s) in Strip",
      price: 446.90,
      quantity:1,
      strikedoffprice: 545.90,
      uniqueid:"#m24"
    },];


    function displayProducts(products) {
      const productList = document.getElementById('product-list');
      productList.innerHTML = ''; // Clear existing products
  
      products.forEach(product => {
          // Create product card
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
  
          // Product image
          const productImage = document.createElement('img');
          productImage.src = product.image_url; // Correct property name
          productImage.alt = product.name;
  
          // Product name
          const productName = document.createElement('h3');
          productName.textContent = product.name;
  
          // Product price
          const productPrice = document.createElement('p');
          productPrice.textContent = `Price: ₹${product.price}`;
  
          // Add to cart button
          const addToCartButton = document.createElement('button');
          addToCartButton.className = 'add-to-cart';
          addToCartButton.textContent = 'Add to Cart';
  
          // Add event listener to the "Add to Cart" button
          addToCartButton.addEventListener('click', () => addToCart(product));
  
          // Append elements to product card
          productCard.appendChild(productImage);
          productCard.appendChild(productName);
          productCard.appendChild(productPrice);
          productCard.appendChild(addToCartButton);
  
          // Append product card to product list
          productList.appendChild(productCard);
      });
  }
  
  // Function to add product to cart
  function addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      let existingItem = cart.find(item => item.name === product.name);
  
      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          const cartItem = {
              name: product.name,
              price: product.price,
              quantity: 1
          };
          cart.push(cartItem);
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      showAddToCartMessage(product.name);
  }
  
  // Function to update cart count in the header (optional)
  function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price * item.quantity), 0);
      document.getElementById('cart-count').textContent = `Cart (${cart.length} items) - ₹${totalPrice.toFixed(2)}`;
  }
  
  // Function to show the "Added to Cart" message (optional)
  function showAddToCartMessage(productName) {
      const message = document.createElement('div');
      message.className = 'cart-message';
      message.textContent = `${productName} has been added to your cart!`;
  
      document.body.appendChild(message);
  
      setTimeout(() => {
          document.body.removeChild(message);
      }, 3000);
  }
  
  // Call displayProducts on page load
  document.addEventListener('DOMContentLoaded', () => {
      displayProducts(productData);
      updateCartCount();
  });