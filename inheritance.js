class bike{
    constructor(no)
    {
        this.no=no;
    }
    display()
    {
        console.log("this is parent class");
    }
}
class newbike extends bike{
    constructor(no,name){
        super(no);
        this.name=name;
    }
    display1()
    {
        console.log("the bike no is :"+this.no+" and the bike name is:"+this.name);
    }
}
let v=new newbike(1221,"fghdw");
v.display1();
v.display();