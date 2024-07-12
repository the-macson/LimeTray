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

## Important Note
- The website is hosted on a free tier, which may result in slower response times for the first request. If the first request fails, please reload the website.

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

<img width="1707" alt="Screenshot 2024-07-12 at 12 15 32 PM" src="https://github.com/user-attachments/assets/b16fd2f4-8530-48ab-9aa8-d8849b02787c">
<img width="1698" alt="Screenshot 2024-07-12 at 12 14 50 PM" src="https://github.com/user-attachments/assets/d7cf4ba0-19bf-4e1b-861a-8adf5661c577">

<img width="1196" alt="Screenshot 2024-07-12 at 12 14 14 PM" src="https://github.com/user-attachments/assets/c08f4a9e-a56a-406a-8fa7-7d2ef67a2e32">
