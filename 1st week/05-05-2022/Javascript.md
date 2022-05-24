
### push array
>
    var a = [7.5, 8.3 , 7.7, 7.9]
    a.push(8.5)
    console.log(a)
>

>
    var a = [ ] // empty array
    a.push("Latte")
    a.push("Mocha")
    a.push("Latte")
    a.push("Expresso")
    a.sort()
    console.log(a)
>

Operator usually a mathematical symbol but not limit to that

Unary Operator : -x 
var x 
console.log(x)    //undefined
console.log(typeof x) // "undefined"

x= 7.5
console.log(x) // 7.5
console.log(typeof x) // "number"

x=8 
console.log(x) // 8
console.log(typeof x) // "number"

x = "Latte"
console.log(x) // "Latte"
console.log(typeof x) // "string"

x = function() {}
console.log(x) // function(){}
console.log(typeof x) // "function"

var x ="123"
console.log( x +4) // 1234

var x =123
console.log( x +4) // 127

a=5 // assignment
a==5 // comparison only value
a===6 // compare "value" and "type"

var w = "7" //value 7 type "string"
console.log(w ==7) // true
console.log(w ===7) // false

var data = ["Latte", "Mocha" , "Espresso" ,"Mocha"]
console.log(data.length) // .length = amount of data
console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3])
console.log(data[4]) // undefined


var data = ["Latte", "Mocha" , "Espresso" ,"Mocha"]
console.log(data.length) // .length amount of data
data.sort()
var i = 0
while (i< data.length)
{
    console.log(i, data[i])
  i++
}

var truck = [23.4, 25.1, 26.2, 24.3, 25.4 , 10.0]
var x = 0
var total = 0

while (x<truck.length)
{
	total = total+ truck[x]
	x++
}

console.log("avg is " + (total/truck.length).toFixed(2)  )
// average


saturday - sunday
CS50
0 	 scratch	
1	 C 
2	 C
3	 C
4	 C
5	 C
6	 SQL
7	 python
8	 Flask
9	 CSS / Javascript
10	 Ethics

var i = 0 //while loop
while (i<3) {
  
 console.log ("I love you")
  i++
}

var y=0
do    // do loop
{
  console.log("I miss you")
  y++
}while(y<3)

  
for (var z =0; z<3; z++) // for loop
{ console.log("I need you")}


var a ={title: "Astronomy", price:175}
//a is object with 2 fields
a.price = 123 // change price value
a.avaliable = 6 // add 1 more field
console.log(a)

var b={}//b is empty
b.title="ASDASD" // add title
b.pice = 128// add price value
b.valiable = 8// add 1 more field
console.log(b)


var player = [ {name:"Frank lampard", number:8, salary:45000},
             {name:"David Beckham", number:7, salary:37000},
             {name:"David James", number:1, salary:38000},
             {name:"Michael Owen", number:10, salary:48000}]

var number = prompt("Enter Number")
var result = null
var i = 0
while (i<player.length)
{
	if ( number == player[i].number) 
    {
     result = player[i].name
    }
  	
  i++
}

if (result ==null) console.log("Not Found")
if (result !=null) console.log(result)

unshift		__ Push
		| |
shift		__ pop
Binary Operator : 2+3

var a = [2,7,3]
a.unshift(4) // add 4 to the first
console.log(a)
a.shift()
console.log(a) // after shift
a.push(5)
console.log(a) // add array the last
a.pop()
console.log(a) // remove out the last
var b = [8,12,13,10,15,9,8]
b.sort() //
console.log(b)



var data =[8,5, "Latee","Mocha",[],{}]
var i =0
var x =0
	while (i<data.length){
      		if(typeof data[i] == "string" )
            {
            x++
            }
    		i++
    }
console.log(x)


