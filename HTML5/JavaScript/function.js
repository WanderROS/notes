Arguments 对象
arguments 标识符有特殊意义，是Arguments对象的引用
Aeguments 对象可以按照数目获取传递给函数的参数值。

function a(x) {
    用x来访或arguments[0]来访问地一个参数;
    用arguments[1]来访问第二个参数;
    arguments.length
}

arguments 并非真正的数组，是Arguments对象。

Arguments 的属性 collee，用于引用当前正在执行的函数，可用于对为命名的函数递归调用自身。

函数的属性和方法
函数是JavaScript对象的一种特殊类型。

属性
length   函数实际需要的参数的数目
prototype  引用与定义的原型对象，原型对象在使用new 运算符把函数作为构造函数时其作用。？？？

a.count = 1;
function a() {
    return a.count++;
}

方法call() 和apply()
call() 和apply() 的地一个参数都是要调用的函数对象，
call的剩余参数是要传递给调用函数的参数

f.call(o, 1, 2);
与
o.m f;
o.m(1, 2);
delete o.m;
类似

apply()中要传递的参数都有数组指定



函数作用域与闭包

调用对象

作为名字空间的调用对象
function init() {...}
init();
等于
(function() {...})();

闭包：JS函数是将要执行的代码和执行这些代码的作用域构成一个综合体。
所有的JS函数都是闭包

Example
私有持久变量
uniqueID = (function() {
    var id = 0;
    
    return function() { return id ++; }
})();


