# Application Orders & Products

This is the orders and products application. The page is implemented on React. The Redux library is used to manage global state. Yup and Formik are used for form validation. Styles are implemented using CSS, Bootstrap, animate.css. Socket.io is used to display active sessions.

On the orders page, information about orders is displayed, if you click on the button next to the number of products in the order, a list of products of this order will appear on the right.

Orders can be deleted, but first you will have to log in or register. When you click on the delete button, a modal window will open. If you are not logged in, you will be prompted to log in or register. When you are logged into the system, when you click on the delete entry, a modal window will appear in which you can either confirm the deletion or cancel the action. When deleting a order, the products in this order are also deleted.

The products page displays all products with the option to select a product category.

## Available Scripts

To run the app, you need to start docker desktop.

In the project directory, you can run:

### `docker-compose up --build`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
