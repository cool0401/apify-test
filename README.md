
This project is a TypeScript-based backend application that extracts products from an imaginary e-commerce JSON API with limited results per search.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/cool0401/apify-test.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd apify-test
   \`\`\`

3. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

## Running the Project

To start the server and extract products from the imaginary API, follow these steps:

1. Build the TypeScript code:

   \`\`\`bash
   npm run build
   \`\`\`

2. Start the server:

   \`\`\`bash
   npm start
   \`\`\`

3. Open your web browser and go to [http://localhost:3000/extract-products](http://localhost:3000/extract-products) to trigger the data extraction.

## Configuration

- Adjust the price range and other parameters in the \`makeApiRequest\` function within \`index.ts\` based on your requirements.