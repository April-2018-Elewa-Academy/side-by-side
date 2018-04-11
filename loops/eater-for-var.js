
function eater(all_meals) {
	let returner = [];

	for (var day = 0; day < 7; day++) {
		for (var meal = 0; meal < 3; meal++) {
			all_meals[day][meal] = "clean plate"
		}
		returner.push("pooo");
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