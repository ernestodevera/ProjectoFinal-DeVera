# Final Project

**Music Center**  
This is an e-commerce project developed in React to create an online store and make purchases.

## Deploy (https://music-center.netlify.app/)

## Demo
![Music-Center-Demo](https://github.com/ernestodevera/ProjectoFinal-DeVera/assets/99355907/a02acc9c-3171-432c-806f-0eb8edd0632b)



## Features

- Navigation between products.
- Add products to the shopping cart.
- View and edit the shopping cart.
- Simulated checkout process.
- Successful purchase confirmation.

## Technologies Used

- React: A JavaScript framework for building user interfaces.
- Firebase: For data storage and user authentication.
- React Router: For navigation within the application.
- CSS: For design and styling.

## Installation

1. Clone this repository to your local machine.
2. Open a terminal in the project folder.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the application in your browser.

## Usage

- Explore the online store.
- Add products to the shopping cart.
- Review the products in your cart and adjust quantities if needed.
- Complete the simulated purchase.

## Components

### Navbar

- Navigation component that displays the store's logo and links to different sections of the application.

### Catalog

- Displays a list of products available for purchase. Users can click on a product to view more details.

### Product Detail

- Provides detailed information about a specific product, including its name, price, description, and purchase options.

### CartContext

- Shopping cart context that provides functions for adding, removing, and viewing items in the shopping cart throughout the application.

### CartWidget

- A widget that displays the quantity of items in the shopping cart. It updates automatically when items are added or removed.

### Checkout

- Component that guides the user through the checkout process, including reviewing the products in the cart, a contact form, and completing the simulated purchase.

### Other Components

- In addition to those mentioned above, there are other components used throughout the application for user interface and functionality. These components come together to create the online shopping experience.

Each component plays an important role in the application and contributes to the overall functionality of the e-commerce project.

For proper operation, it is necessary to set the environment variables in the .env file. The variables are:

- `VITE_API_KEY`: Firebase API key.
- `VITE_AUTH_DOMAIN`: Firebase authentication domain.
- `VITE_PROJECT_ID`: Firebase project ID.
- `VITE_STORAGE_BUCKET`: Firebase storage bucket.
- `VITE_MESSAGING_SENDER_ID`: Firebase sender ID.
- `VITE_APP_ID`: Firebase app ID.

## Credits

This project was created by Ernesto de Vera.
