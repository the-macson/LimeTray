# Assignment Overview

I created a cart with default values. User can change the values of the cart. The cart will display the total price of the items in the cart.

## Features

- User can increase and decrease the quantity of the items in the cart.
- User can remove the items from the cart.
- User can not decrease the quantity of the items below 1.
- User can not save the cart with empty items.
- User can not save the cart with quantity of the items below 1.

## Technologies

- Node.js
- Express.js
- Next.js
- React.js
- MySQL
- Sequelize
- Chakra UI
- Axios
- Zod
- Swagger UI (for API documentation)
- Jest (for testing)

## Links

- [Web App](https://lime-tray.vercel.app/) [https://lime-tray.vercel.app/]
- [Backend API](https://cart.choreoapps.dev/) [https://cart.choreoapps.dev/]
- [API Documentation](https://cart.choreoapps.dev/api-docs) [https://cart.choreoapps.dev/api-docs]

## Installation
Step 1: Clone the repository
```bash
git clone https://github.com/the-macson/LimeTray
```

Step 2: Move to the directory
```bash
cd LimeTray
```

Step 3: Move to the backend directory
```bash
cd cart-backend
```

Step 4: Install the dependencies
```bash
npm install
```

Step 5: Create a `.env` file in the backend directory and add the following environment variables
```bash
DATABASE_URL=your_database_url
```
Take reference from the `.env.example` file and
Use MySQL database for the backend

Step 6: Run the server
```bash
npm run dev
```

Step 7: Move to the frontend directory
```bash
cd ../cart-frontend
```

Step 8: Install the dependencies
```bash
npm install
```

Step 9: Create a `.env` file in the frontend directory and add the following environment variables
```bash
REACT_APP_API_URL=your_backend_api_url
```
Take reference from the `.env.example` file

Step 10: Run the client
```bash
npm run dev
```

## Testing
Step 1: Move to the backend directory
```bash
cd cart-backend
```

Step 2: Run the tests
```bash
npm run test
```

## API Documentation
- [API Documentation](https://cart.choreoapps.dev/api-docs) [https://cart.choreoapps.dev/api-docs]

## Screenshots