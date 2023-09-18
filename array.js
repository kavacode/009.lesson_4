let myArray = [];

let length = parseInt(prompt('Вкажіть довжину масиву:'));

for (let i = 0; i < length; i++) {
	let element = prompt(`Введіть значення для елемента ${i + 1}:`);
	myArray.push(element);
}
console.log('Ваш заданий масив:', myArray);


myArray.sort(function (a, b) {
	return a - b;
});
console.log('Відсортований за зростанням масив:', myArray);



myArray.splice(1, 3);
console.log('Масив після видалення елементів з 2 по 4:', myArray);
