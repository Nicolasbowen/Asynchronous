/**
 * Created by hama on 2017/4/13.
 */
/*function f1(){
    console.log('f1');
}
function f2(){
    console.log('f2');
}
f1();
f2();*/

window.onload = function(){}
document.onclick = function(){
    alert(1);
}
//模拟一个事件监听的类
function pepole(){

}
//挂载监听器
pepole.prototype.on = function(status,callback){
    //加载状态

}
//触发监听器
pepole.prototype.emit = function(status){
    //触发状态
}
var event = new pepole();
//监听器
function f1(){
    alert(1);
}
function f2(){
    alert(2);
}
event.on('click',f1); //click是监听的名字
event.on('adf',f1);
event.on('click',f2);
event.emit('click'); //f1,f2
event.emit('adf'); //f1





