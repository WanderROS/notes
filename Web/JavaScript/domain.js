var 声明的变量是永久性的，用delete运算符删除会出错

var 多次声明同一个变量合法。

如果给为生命的变量赋值，JS就会隐式声明。
!!! 隐式声明的变量是全局变量!!!

用 var 声明防止全局变量

// scope
// JS中无块级作用域，函数中声明的所有变量在整个函数中都是有定义的
// Example
var scope = "global"
function f() {
    alert(scope);       // display "undefined", not "global"
    var scope = "local";
    alert(scope);       // display "local"
}


