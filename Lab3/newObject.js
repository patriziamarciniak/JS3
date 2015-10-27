(function (global) {
if (!global.UAM) {
global.UAM = {};
}
   
       var MyClass= function(arg1){
           this.sayHello= function(){
           return "Hello " + arg1;
       }
           return this;
       }
       
       function newObject(Class,arg1_) {       
       return Class.call(this,arg1_);      
        }
       var abc = newObject(MyClass,"Jan");
       console.log(abc.sayHello());
  
global.UAM.newObject = newObject;
}(window)); 

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) === newObject(MyClass, arg1, arg2)
*/


