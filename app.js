// 基礎編 問題
//Q1 変数

let name = 'ごっしー';
let age = 28;
let greet = '私のニックネームは' + name + 'です。年齢は' + age + '歳です。';
console.log(greet);

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let template = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(template);

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4 配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

//Q6 関数
function sayHello() {
  let sayHello = 'Hello';
  console.log(sayHello)
}
sayHello();

let sayWorld = function() {
  console.log('World');
}
sayWorld();

//Q7 メソッド
user.birthday = '2000-9-27';
user.sayHello = function() {
  console.log('Hello!');
}
user.sayHello();

//Q8 引数
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
}
calc.add(3, 4);

calc.subtract = function(x, y) {
  console.log(x - y);
}
calc.subtract(15, 5);

calc.multiply = function(x, y) {
  console.log(x * y);
}
calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
}
calc.divide(30, 6);

//Q9 返り値
function remainder(x, y) {
  return x % y;
}
console.log('5 を 3 で割った余りは ' + remainder(5, 3) + ' です。');

//Q10 スコープ
//関数のスコープに定義された変数は、スコープの内側でのみ参照できる。その為、スコープの外側にあるconsole.log(x)からは変数xを参照できずエラーが出力される。



//応用編 問題
//Q1 標準組み込みオブジェクト
let random = Math.floor(Math.random() * 9) + 1;
console.log('random => ', random);

//Q2 コールバック関数
function hello() {
    console.log('Hello World!');
}
setTimeout(hello, 3000);

//Q3 if
let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
} else if(num < 0) {
  console.log('num is less than 0')
} else {
  console.log('num is 0')
}

//Q4 for
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers = numbers + i;
}
console.log(numbers);

//Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  if (Number.isFinite(mixed[i]) && mixed[i] % 2 == 0) {
    console.log('even');
  } else if (Number.isFinite(mixed[i]) && mixed[i] % 2 == 1) {
    console.log('odd');
  } else {
    console.log('not number');
  }
}