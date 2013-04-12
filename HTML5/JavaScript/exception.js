// throw expression;
throw new Error("message");

try/ catch/ finally 
try 之后至少有一个catch或 finally

try {




}
catch (e) {
    // use variable e to refer to the exception 


}
finally {
    // statements always executed, regardless of what happend.

}


//with 暂时修改作用域链
with(object) {
        statement
}
// 将object添加到作用域链头部

