function Cat(color){

        this.color = color;

        this.name = "mini miaou";

};

//Cat.prototype.run= function run(){
//
//        console.log(`I am running and I am ${this.color}`);
//
//};
//
//const cat = new Cat("blue");
//
//cat.run();

//===========================================

function Cat_(color){

        const self_= Object.create(Cat.prototype);

        self_.color= color;

        self_.name= "mini miaou";

        return self_;

}


Cat_.prototype= Object.create(Object.prototype);

Cat_.prototype.run = function run(){
        console.log(`I am running and I am ${this.color}`);
}


const cat_ = Cat_("blue");

//console.log(cat instanceof Cat);

cat_.run();


//const p = new Object();
//p["x"] = 3;
//const o = Object.create(p);
//Ce qui reviens à écrire ça: const o = Object.create({ "x": 3 });

/*
const o = {};
Object.setPrototypeOf(o,{ "x": 3 });
*/

//function MyClass(){ }
//MyClass.prototype = { "x": 3, "constructor": MyClass };
//const o = new MyClass();
//
//o.p = "bar";
//o.p2 = "baz";
//
//console.log(o.x);
//
//console.log(Object.keys(o));
//
//console.log(
//
//                Object.keys(
//                        Object.getPrototypeOf(o)
//                        )
//
//           )
//;