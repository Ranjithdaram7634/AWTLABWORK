class student
{
	constructor(sname,rollno)
	{
	this.sname=sname;
	this.rollno=rollno;
	}
	display()
	{
	console.log("Student name is "+this.sname+" and his rollno"+this.rollno);
	}
}
let s1=new student("Srinu",1221);
s1.display();
