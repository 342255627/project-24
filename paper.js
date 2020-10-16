class paper{

   constructor(x,y,radius){

    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    
    this.x=x
    this.y=y
    this.radius=radius  
this.body=Bodies.circle(x,y,radius,options);
World.add(world, this.body)




   }

display(){
push()
translate (this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
pop()



}




}