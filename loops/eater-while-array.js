
function eater(all_meals) {
	let returner = [];
	let day_cs = 0;
	let meal = 0;

	while (day_cs < 7) { // 7 days
		while (meal < 3) { // 3 meals
			all_meals[day_cs][meal] = "clean plate"
			meal++;
		}
		meal = 0;
		returner.push("pooo");
		day_cs++;
	}
	console.log(all_meals);

	return returner;
}

let meals = [
		[
			"cheese",
			"tomatoes",
			"pickles"],
		[
			"cheese",
			"tomatoes",
			"pickles"],
		[
			"cheese",
			"tomatoes",
			"pickles"],
		[
			"cheese",
			"tomatoes",
			"pickles"],
		[
			"cheese",
			"tomatoes",
			"pickles"],
		[
			"cheese",
			"tomatoes",
			"pickles"],
		[
			"cheese",
			"tomatoes",
			"pickles"]]

console.log(eater(meals))