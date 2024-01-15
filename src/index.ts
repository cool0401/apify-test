import express from 'express';
import axios from 'axios';

// Initialize Express app and set the port
const app = express();
const port = 3000;

// Define the imaginary e-commerce API URL
const apiUrl = 'https://api.ecommerce.com/products';

// Array to store all products retrieved from the API
let products: any[] = [];

// Function to make an API request with a specified price range
async function makeApiRequest(minPrice: number, maxPrice: number): Promise<void> {
  try {
    // Make the API call to retrieve products within the specified price range
    const response = await axios.get(`${apiUrl}?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    
    // Extract relevant data from the API response
    const { total, count, products: currentProducts } = response.data;

    // Accumulate products into the 'products' array
    products = products.concat(currentProducts);

    // Check if there are more products to fetch
    if (total > products.length) {
      // Calculate the remaining products and make the next API request
      const remainingProducts = total - products.length;
      const nextMinPrice = maxPrice + 1;
      const nextMaxPrice = nextMinPrice + 100000;

      // Recursively make the next API request
      await makeApiRequest(nextMinPrice, nextMaxPrice);
    }
  } catch (error) {
    // Handle errors during the API request
    console.error('Error making API request:', error);
  }
}

// Endpoint to trigger the data extraction
app.get('/extract-products', async (req, res) => {
  // Start the process with an initial API call (e.g., from $0 to $100,000)
  await makeApiRequest(0, 100000);

  // Respond with the accumulated products in JSON format
  res.json(products);
});

// Start the Express server and log a message upon successful start
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
