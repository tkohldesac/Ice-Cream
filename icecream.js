let stocks = {
	Fruits: ["strawberry", "grapes", "banana", "apple"],
	liquid: ["water", "ice"],
	holder: ["cone", "cup", "stick"],
	toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;
let order = (time, work) => {
	return new Promise((resolve, reject) => {
		if (is_shop_open) {
			setTimeout(() => {
				resolve(work());
			}, time);
		} else {
			reject(console.log("Our shop is closed."));
		}
	});
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))
	.then(() => {
		return order(0000, () => console.log(`Production has started!`));
	})
	.then(() => {
		return order(2000, () => console.log(`The fruit has been chopped.`));
	})
	.then(() => {
		return order(1000, () =>
			console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added.`)
		);
	})
	.then(() => {
		return order(1000, () => console.log("The machine has started."));
	})
	.then(() => {
		return order(2000, () =>
			console.log(`${stocks.holder[0]} has been selected as the holder.`)
		);
	})
	.then(() => {
		return order(3000, () =>
			console.log(`${stocks.toppings[0]} has been added as the topping`)
		);
	})
	.then(() => {
		return order(2000, () => console.log("Ice cream has been served."));
	});

// ***All old code***
// let order = (Fruit_name, call_production) => {
// 	setTimeout(() => {
// 		console.log(`${stocks.Fruits[Fruit_name]} was selected.`);
// 		call_production();
// 	}, 2000);
// };

// let production = () => {
// 	setTimeout(() => {
// 		console.log("Production has started.");
// 		setTimeout(() => {
// 			console.log("the fruit has been chopped.");
// 			setTimeout(() => {
// 				console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added.`);
// 				setTimeout(() => {
// 					console.log("The machine has started.");
// 					setTimeout(() => {
// 						console.log(`${stocks.holder[0]} has been selected as the holder.`);
// 						setTimeout(() => {
// 							console.log(`${stocks.toppings[0]} has been added as the topping`);
// 							setTimeout(() => {
// 								console.log("Ice cream has been served.");
// 							}, 2000);
// 						}, 3000);
// 					}, 2000);
// 				}, 1000);
// 			}, 1000);
// 		}, 2000);
// 	}, 0000);
// };

// order(0, production);
