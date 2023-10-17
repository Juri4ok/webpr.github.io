let one = document.getElementById("18");
let two = document.getElementById("19");
let three = document.getElementById("20");
let four = document.getElementById("21");
let five = document.getElementById("22");
let six = document.getElementById("23");
let seven = document.getElementById("24");
let eight = document.getElementById("25");
one.addEventListener("click", function() {
	console.log("18.");
	let styles = ["Jazz", "Blues"];
	console.log(styles);
	styles.push("Rock-n-Roll");
	console.log(styles);
	let middleIndex = Math.floor(styles.length / 2);
	styles[middleIndex] = "Classics";
	console.log(styles);
	let firstElement = styles.shift();
	console.log("Видалений перший елемент:", firstElement);
	console.log(styles);
	styles.unshift("Rap", "Reggae");
	console.log(styles);
});
two.addEventListener("click", function() {
	console.log("19.");
	let str = "my-short-string";
	let words = str.split('-');
  	for (var i = 1; i < words.length; i++) {
    	words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
 	}
    console.log(words.join(''));
});
three.addEventListener("click", function() {
	console.log("20.");
	let a = prompt("Введіть початок діапазону");
	let b = prompt("Введіть кінець діапазону");
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	filterRange(arr, a, b);

});
function filterRange(arr, a, b) {
  // Створюємо новий масив для зберігання відфільтрованих елементів.
  let result = [];

  // Проходимося по всіх елементах вихідного масиву.
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    
    // Перевіряємо, чи елемент попадає в діапазон [a, b].
    if (element >= a && element <= b) {
      // Якщо так, додаємо його до нового масиву.
      result.push(element);
    }
  }

  // Повертаємо новий масив з відфільтрованими елементами.
  console.log(result);
}
four.addEventListener("click", function() {
	console.log("21.");
	let arr = ["HTML", "JavaScript", "CSS"];
	let sorted =copySorted(arr);
	console.log(sorted);
	console.log(arr);
});
function copySorted(arr){
	let sortedCopy = arr.slice().sort();

  return sortedCopy;
}
five.addEventListener("click", function() {
	console.log("22.");
	let ivan = {name: "Іван", age: 25};
	let petro = {name: "Петро", age: 30};
	let mariya = {name: "Марія", age: 28};
	let arr = [petro, ivan, mariya];
	sortByAge(arr);
	console.log(arr[0].name);
	console.log(arr[1].name);
	console.log(arr[2].name);
});
function sortByAge(arr) {
  // Використовуємо метод sort() для сортування масиву за властивістю "age".
  arr.sort(function(a, b) {
    return a.age - b.age;
  });
}
six.addEventListener("click", function() {
	console.log("23.");
	let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 25 };
  let mary = { name: "Mary", age: 35 };
  let arr = [john, pete, mary];

	var averageAge = getAverageAge(arr);
	console.log(averageAge);
	});
function getAverageAge(users) {
  if (users.length === 0) {
    return 0; // Повертаємо 0, якщо масив користувачів порожній.
  }

  // Використовуємо метод reduce() для обчислення суми віку усіх користувачів.
  var sumAge = users.reduce(function (total, user) {
    return total + user.age;
  }, 0);

  // Обчислюємо середнє арифметичне, поділяючи суму на кількість користувачів.
  var averageAge = sumAge / users.length;

  return averageAge;
}
seven.addEventListener("click", function() {
	console.log("24.");
		let users = [
	{id:'іван', name:"Іван Іванко", age: 20},
	{id:'ганна', name:"Ганна Іванко", age: 24},
	{id:'петро', name:"Петро Петренко", age: 31},
	]
	let groupedById = groupById(users);

	console.log(groupedById);
});
function groupById(arr) {
  return arr.reduce(function (result, user) {
    result[user.id] = user;
    return result;
  }, {});
}
eight.addEventListener("click", function() {
	console.log("25.");
	let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
	};
	let totalSalary = sumSalaries(salaries);
	console.log(totalSalary);
});
function sumSalaries(salaries) {
  let sum = 0;

  // Отримуємо всі значення зарплат за допомогою Object.values() та обчислюємо їх суму.
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}
