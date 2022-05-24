## Vue

{{ city }}   // variable
@click       // click event
v-on:click   // click event same
v-for="i in data" // for i in data array


### File=index.html
/// type then click add to show what you have type
>
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iCoffee</title>
    </head>
    <body>
    <div id ="main">...</div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
        var Form = { }
        Form.template = `
        Welcome to {{brand}}. <br>
        <input v-model="job">
        <button v-on:click="add()">Add</button>
        <p v-for="i in all">{{i}}</p>   
                        `
        Form.data = function(){
            return{
            brand:"iCoffee",
            job:" ",
            all:[],
            } 
        }
        Form.methods={}
        Form.methods.add=function(){
            this.all.push(this.job)
            this.job=" "
        }
        Vue.createApp(Form).mount("#main")
    </script>
        
    </body>
    </html>
>

### File:sampleshowtext.html
/// show data from coinbase to text
>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sample</title>
        <button onclick="refresh()">refresh</button>
    </head>
    <body>
        <div id="target">...</div>
        <script>
            function refresh(){
                var url="https://api.coinbase.com/v2/prices/BTC-USD/spot"
                fetch(url).then(convert).then(show)
            }
            function convert(response){
                return response.text()
            }
            function show(data){
                var e =document.getElementById("target")
                e.innerText=data
            }
        </script>
    </body>
    </html>
>
### File:sampleshowjson.html
/// show data from coinbase to json
>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sample</title>
        <button onclick="refresh()">refresh</button>
    </head>
    <body>
        <div id="target">...</div>
        <script>
            function refresh(){
                var url="https://api.coinbase.com/v2/prices/BTC-USD/spot"
                fetch(url).then(convert).then(show)
            }
            function convert(response){
                return response.json()
            }
            function show(data){
                var e =document.getElementById("target")
                e.innerText=data.data.amount
            }
        </script>
    </body>
    </html>
>

### File:samplespreadjson.html
//show spread value
>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sample</title>
        <button onclick="refresh()">refresh</button>
    </head>
    <body>
        <div id="target">...</div>
        <div id="targetB">...</div>
        <div id="targetS">...</div>
        <script>
            var result=[]
            function refresh(){
                var url="https://api.coinbase.com/v2/prices/BTC-USD"

                fetch(url+"/buy").then(convert).then(show)
                fetch(url+"/sell").then(convert).then(show)
            }
            function convert(response){
                return response.json()
            }
            function show(data){
                result.push(data)
                if(result.length == 2){
                var spread =  result[0].data.amount - result[1].data.amount 
                var e = document.getElementById("target")
                e.innerText = "Spread is " + spread.toFixed(2)
                }
                var f = document.getElementById("targetB")
                f.innerText="Buy price = " + result[0].data.amount
                var g = document.getElementById("targetS")
                g.innerText="Buy price = " + result[1].data.amount
            }
        </script>
    </body>
    </html>
>

## with nodejs
//// canuse localhost:15000/go || demo || display



### create simple web server

'--foldername
    '--index.html
    '--sampleshowjson.html
    '--sampleshowtext.html
    '--sampleshowspreadjson.html
    '--web.js

cd web-19
npm install express

File:web.js
>
    var express = require("express")
    var server = express()
    server.listen(15000)
    server.use(express.static("."))
>


### Modern way to call web service
File: modernway to call web service
>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <button onclick="refresh()">Go</button>
        <div id="target">....</div>
        <script>
            async function refresh(){
                var url="https://api.coinbase.com/v2/prices/BTC-USD/spot"
                var response= await fetch(url)
                var data = await response.text()
                var e = document.getElementById("target")
                e.innerText = data

            } 
        </script>
    </body>
    </html>
>
//

### Web3 / Ethereum to ask user to choose account and show the balance in Ether
File: display.html
>
    <!DOCTYPE html>
    <html>
    <head><title>Display</title></head>
    <body>
        <button onclick="chooseAccount()">Choose</button>
        <div id="target">...</target>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/3.0.0-rc.5/web3.min.js">
        </script>
        <script>
        async function chooseAccount() {
            if (typeof ethereum == "undefined") {
            alert("Please install provider")
            return    // end of function
            }
            var detail = {method: "eth_requestAccounts"}
            var accounts = await ethereum.request(detail)
            var e = document.getElementById("target")
            e.innerText = JSON.stringify(accounts)
            await getBalance( accounts[0] ) 
        }
        async function getBalance(address) {
            var w = new Web3(ethereum)
            var balance = await w.eth.getBalance(address)
            var ether = w.utils.fromWei(balance)
            var e = document.getElementById("target")
            e.innerText += " Your balance is " + (+ether).toFixed(8)
        }
        </script>
    </body>
    </html>
>
