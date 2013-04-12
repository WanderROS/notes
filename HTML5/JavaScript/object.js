// object


book = {};
book.chapter = new Object();
book.chapter.title = "asd";

book.chapter2 = {title: "asdf", pages : 6};

for (var name in obj) {}

if( 'x' in obj) {}


JS中数组元素是稀疏的(sparse), 即数组的下标不必落在一个连续的数字范围内。
c[1000] = 1;
array.shift(); // 删除数组的第一个元素
array.pop(); // 删除最后一个
array.split(); //删除一个连续范围的元素;


array.length;

array.join(); // 将所有元素转换为字符串，再连接起来
array.reverse(); // 将原数组倒排序
array.sort(); // 对元数组排序
array.slice(0, 3); // 返回指定数组的一个片段
array.splice(); // 可添加新元素，可删除元素，在元数组上操作

a = [1, 2, 3, 4, 5, 6, 7];
a.splice(4);
a.splice(1,2);

a.splice(2,0, 'a', 'b');
array.push();
array.pop();

a.unshift();
a.shift();








// 类、构造函数和原型
new : new 运算符后面必须跟着一个函数调用，
      new 创建了一个新的没有任何属性的对象，然后调用后跟的函数，把新的想作为this关键字传递。设计来与new一起使用的函数就是构造函数

构造函数的工作就是初始化新对象，为其添加属性。没有返回值。
Example

function Circle(r) {
    this.r = r;
}

// 原型和继承
原型对象的任何属性，表现为每个以它为原型的对象的属性。即JavaScript从他的原型那里继承属性。
在用new创建了空兑现后，new设置了这个对象的原型。
一个对象的原型就是他的构造函数的prototype属性的值。
所有的函数都有prototype属性，当这个函数被创建的时候，prototype被自动创建和初始化。

prototype属性的初始化值是一个对象，这个对象只带有一个属性。这个属性为constructor,它指回到和原型相关联的那个构造函数。
添加给这个原型对象的任何属性，都会成为被构造函数所初始化的对象的属性(就是继承了).

Circle.prototype.area = function() {...}


私有成员(闭包)
调用父类的构造函数
调用父类的方法
非集成扩展
