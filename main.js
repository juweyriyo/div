


// for(let num=1; num<=5; num++){
//     console.log(num)
// }

// for(let num=100; num>=1; num--){
//     console.log(num)
// }

// let name = prompt("enter your name")
// for(let coint=1; coint<=15; coint++){
//     document.writeln(coint,"  "+name,"<br>")
// }

// 

// let number = 1

// do{
//     console.log(number)
//     number++
// }while(number<=5);

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// let count=0;
// do{
//     document.write("Hello your name is :",name ,"and you age is:", age, "<br>")
//     count++;
// }while(count<=5)


// let num=5;
// do{
//     document.write(num,"<br>")
//     num+=5
// }while(num<=40)

// function syHi(){
//     document.write("my name is : juweyriyo")
// }

// syHi()

// function addion(){
//     let num1=2
//     let num2=4
//     document.write(num1+num2)
// }
// addion()


// function myName(name, age){
//     console.log("Hello", name, "your age is:", age)
// }

// myName("juwa")
// myName("muna",50)

// function max(num1,num2,num3){
//     if(num1>num2 & num1>num3){
//         document.write("The max is ",num1)
//     }
//     else if(num2>num1 & num2>num3){
//         document.write("max is ",num2)
//     }
    
//     else if(num3>num1 & num3>num2){
//         document.write("the max is", num3)
//     }
//     else if(num1 = num2 =num3){
//         document.write("there all same")
//     }
//     else{
//         document.write("undifined")
//     }
// }
// max(100,200,1000)


//function return type

// function syHi(){
//     let name ="Ali"
//     return name
// }
// console.log(syHi())

// function Addion2(){
//     let n1 = 10
//     let n2 = 20 
//     let sum = n1+n2
//     return sum
// }
// console.log(Addion2())

//function parameter and argument with return type
// function multiply(num1, num2, num3){
//     let resul = num1*num2*num3
//     return resul
// }

// console.log(multiply(2,2,2))

//fat arrow
// const addion = () =>{
//     console.log("abdi")
// } 
// addion()
//class work
// const hi =(name, age) =>{
//     console.log("Hello ",name,"you are age: ",age,"  year old")
// }

// hi("Juweyriyo", 18)

//array
// let myFriend=["Ali","Ahmed", "Abdi"]
// console.log(myFriend[0])
// console.log(myFriend[1])
// console.log(myFriend[2])
// console.log("....All name .....")
// console.log(myFriend)

// //loop
// console.log("....print usin loop........")
// let num=0
// while(num<myFriend.length){
//     console.log(myFriend[num])
//     num++
// }

//object

// let student = {
//     name:"Ali",
//     ID: "IT212",
//     Age:20,
//     number:27829,
//     addres:"Hodan",
//     sayHi: ()=>{
//         console.log("Hi function")
//     }
// }

// console.log("name: ",student.name)
// console.log("ID: ",student.ID)
// console.log("Age: ",student.Age)
// console.log("number: ",student.number)
// console.log("Addres: ",student.addres)
// console.log("function",student.sayHi())

//array method
// let fruits = ["Apple", "Bananaa", "mango","Lemo"]
// let iskudar = fruits.join(" , ") //adds all array element
// fruits.push("Lemon")//adds new element
// fruits.pop()//remove last element
// fruits.shift()//remove frist element
// fruits.unshift("ypple") //adds new frist element
// fruits.sort()//sorting array
// fruits.reverse()//kala gadi go to opposite side
// fruits.splice(3,0 , "Ali😒")  //waxna wu remove gareya waxna wu ku dara
// console.log(fruits)
// console.log(iskudar)

// fruits.forEach(function(item){
//     console.log(item)
// })//loop

// let ages = [14,15,16,18,19,20]
// // let newage = ages.filter(function(resul){
// //     return resul>15
// ages.map( (age)=>{
//     console.log(age)
// })//as a loop
// // console.log(newage)
// let names = ["Ali", "Ahmed", "Anas"]

// let newname = names.filter(function (result){
//     return result == "Ahmed"
// })
// console.log(newname)

//DOM Document Object Model
// const element = document.getElementById("elem")

// const text = document.getElementsByTagName("p")[0]

// const buton = document.getElementsByClassName("btn")[0]

// const universal = document.querySelector(".btn")

// const textElement = document.querySelector("#elem")
// textElement.innerHTML = "It is java😲"//changin html
// textElement.style.color = "red"//changin css
// textElement.style.backgroundColor= "yellow"
// universal.style.backgroundColor= "blue"
// universal.style.color = "white"
// universal.style.fontSize = "70px"

// console.log(universal)

// console.log(buton)

// console.log(text)

// console.log(element)

//events
// const title = document.querySelector(".elem")

// const body = document.querySelector(".body")

 const butonOf = document.querySelector(".btnOf")

const buttonOn = document.querySelector(".btnOn")

// buton.addEventListener("click", function(){
//     title.style.color = "yellow"
//     buton.style.backgroundColor = "yellow"
//     body.style.backgroundImage(ur) = "red"
    
// })

// button.addEventListener("click", function(){
//     title.style.color = "black"
//     button.style.backgroundColor = "red"
//     body.style.backgroundColor = "yellow"

// })

const ligth = document.querySelector(".ligth-box")

buttonOn.addEventListener("click", function(){
    ligth.style.backgroundColor = "yellow"  
    buttonOn.style.color = "red"
    butonOf.style.color = "black"
    
})

butonOf.addEventListener("click", function(){
    ligth.style.backgroundColor = "white"
    butonOf.style.color = "red"
    buttonOn.style.color = "black"
    
})


