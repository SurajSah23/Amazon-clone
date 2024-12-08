// Product object structure
const product = {
    id: 1,
    title: 'Product Name',
    price: 20.99,
    description: 'Product Description',
    category: 'Category Name',
    image: 'image_url.jpg',
    rating: {
      rate: 4.5,
      count: 100
    }
  };
  
  // CartItem object structure (extends Product and includes quantity)
  const cartItem = {
    ...product, // Spread product properties
    quantity: 2 // Adding quantity to the cart item
  };
  
  console.log(product);
  console.log(cartItem);
  