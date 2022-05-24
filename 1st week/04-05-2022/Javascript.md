## For reading and some coding

https://eloquentjavascript.net/




1. Function

>

    some common functions in javascript
    alert(“I love you”)
    alert(‘I love you’)
    confirm(“Do you want to continue”)
>


Variable 

>

    var reply = confirm(“Do you want to continue”) 
    console.log(reply)
    //true,false
    // OK = true
    // cancel = flase

>

>
    var name =prompt(“what is your name”)
    console.log(“Hello” + name)

    alert() - alert box
    confirm() - pop up for answer
    prompt() - user input
    console.log() - display
>



 

## 1.Unary Operator
>

    var x =5
    console.log(-x) // -5
    console.log(- -x)// 5
    –x != - - x
    –x : x decrease 1
    - - x :  = +x
    -------------
    var x=5
    console.log(x– ) // display 5 and decrease to 4
    console.log(x) // 4
    var x = 7
    ++x // increase then display (pre- increment) 
    console.log(++x) // 8
    console.log(x) // 8
    x++ // display then increase (post-increment)
    console.log(x++) //7
    console.log(x)//8
    //example
    var w =7
    var x =+w

>


### User input wrong things
>
    var score = parseFloat("8o") //8
    var price = parseFloat("123.5o") // 123.5
    var group = parseInt("123.5o") //123

    X --> Not Reccommended parseFloat//parseInt
    O --> reccommended
>

### Decrease price 5%
>
    var price = prompt("Enter Price")
    price = +price || 0.0
    console.log("Total is " + price*0.95)
>

### Example --> If score
>
    var score = prompt("Enter score")
    score = +score || 0
    if(score <50) console.log("failed")
    if(score >=50) console.log("Passed")
>


### Example --> If score
>
    var score = prompt("Enter score")
    score = +score || 0  //if user input not a number then score = 0
    if(score >=80) console.log("A")
    if(score >=70 && score <=79) console.log("B")
    if(score >=60 && score <=69) console.log("C")
    if(score >=50 && score <=59) console.log("D")
    if(score <50) console.log("F")
>

### Example --> If else score
>
    var score = prompt("Enter score")
    score = +score || 0
    if(score >=80) console.log("A")
    else if(score >=70) console.log("B")
    else if(score >=60) console.log("C")
    else if(score >=50) console.log("D")
    else if(score <50) console.log("F")
>


### Temporary result
>
    var score = prompt("Enter score")
    score = +score || 0
    var result ="F"
    if (score >= 50) result = "D"
    if (score >= 60) result = "C"
    if (score >= 70) result = "B"
    if (score >= 80) result = "A"
    console.log(result)
>



## 2.Binary Operator
>
    //decimal
    var price = prompt("Enter price")
    price = +price || 0
    var x = 0
    var priceInt = price-(price%1)

    if (price % 1 <= 0.99  ) x = 0.75
    if (price % 1 < 0.75 ) x = 0.50
    if (price % 1 < 0.50 ) x= 0.25
    if (price % 1 < 0.25 ) x = 0.00

    console.log( (priceInt +x).toFixed(2) ) : toFixed(2) decimal 2 point

    //Area circle
    var result = f(8,5)
    function f(a,b)
    {
    return (Math.PI * a * b)
    }
    console.log(result.toFixed(2))
>








