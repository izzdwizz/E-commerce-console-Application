function App() {
	// Product object creator
	function createProduct(id, name, price) {
		return { id, name, price };
	}

	// Shopping Cart object creator
	function createShoppingCart() {
		return { items: [] };
	}

	// Function to add an item to the shopping cart
	function addItemToCart(cart, product, quantity) {
		cart.items.push({ product, quantity });
	}

	// Function to calculate the total cost of items in the cart
	function getTotal(cart) {
		return cart.items.reduce(
			(total, item) => total + item.product.price * item.quantity,
			0
		);
	}

	// Sample products
	const products = [
		createProduct(1, 'Laptop', 999),
		createProduct(2, 'Headphones', 49),
		createProduct(3, 'Smartphone', 699),
		createProduct(4, 'Land in Maitama', 45000000),
		createProduct(5, 'Rocket Fuel', 12),
		createProduct(6, 'Galaxy Fold', 2500),
		createProduct(7, 'Messi', 2),
	];
// Available Banks
	const Banks = [
		'First',
		'PalmPay',
		'Opay',
		'Access',
		'Moniepoint',
		'GTB',
		'Zenith',
		'Fidelity',
	];

	// Sample application
	function runECommerceApp() {
		const cart = createShoppingCart();
		// Reload instruction
		console.log(
			'In the event of Poor Loading or application fails to start, reload page multiple time i.e spam reload button'
		);

		console.log(
			'Welcome to the E-Commerce Console App of Izuchukwu Uchendu (B)!\n'
		);

		while (true) {
			console.log('Available Products:');
			products.forEach((product) => {
				console.log(`${product.id}. ${product.name} - $${product.price}`);
			});

			const productId = prompt(
				'From the list provided in the console tab, enter the ID number of the product you want to add to the cart (or type "checkout" to complete your purchase):'
			);

			if (productId.toLowerCase() === 'checkout') {
				console.log('\nShopping Cart Summary:');
				console.log('\n The items below are contained in your shopping cart');
				cart.items.forEach((item) => {
					console.log(`${item.product.name} x${item.quantity}`);
				});
				console.log(`Total: $${getTotal(cart)}\nThank you for your patronage!`);
				console.log('Available Banks:');
				Banks.forEach((bank) => {
					console.log(`${bank}`);
				});
				const BankDetails = prompt(
					`Select and enter your Bank Name from the list displayed in the console tab`
				);

				const selectedBank = Banks.find(
					(banks) => banks.toLowerCase() == BankDetails.toLowerCase()
				);

				if (selectedBank) {
					const bankPin = parseInt(
						prompt('Please enter your 4 digit account Pin')
					);

					const pin = bankPin.toString();
					if (pin.length != 4) {
						console.log('Invalid PIN number, PIN must be 4 digits long\n');
						console.log('Reload Tab multiple times to Start Over');
					} else {
						console.log(pin.length);
						console.log('Payment Successful! See you next time');
					}
				} else {
					console.log(
						'invalid Bank Name, Select a bank name from the list provided'
					);
					console.log('Reload Tab multiple times to Start Over');
				}

				break;
			}

			const selectedProduct = products.find(
				(product) => product.id == productId
			);

			if (selectedProduct) {
				const quantity = parseInt(
					prompt(
						`Enter the quantity of ${selectedProduct.name} you want to add to the cart:`
					)
				);

				if (!isNaN(quantity) && quantity > 0) {
					addItemToCart(cart, selectedProduct, quantity);
					console.log(
						`Added ${quantity} ${selectedProduct.name}(s) to the cart.\n`
					);
				} else {
					console.log('Invalid quantity. Please enter a valid number.\n');
					console.log('Reload Tab multiple times to Start Over');
				}
			} else {
				console.log('Invalid product ID. Please enter a valid ID.\n');
				console.log('Reload Tab multiple times to Start Over');
			}
		}
	}

	return runECommerceApp();
}

export default App;
