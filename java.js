console.log("--------------Q 1-----------------")

let x=98765
function reverNum(num){
    let x=num.toString().split('').reverse().join('');
    let result= parseInt(x)
    return result
}
console.log(reverNum(x))

console.log("--------------Q 2-----------------")

let str="tuwaiq academy"
function captil(st){
       let st1=st.substring(0,6)
           st1=st1.charAt(0).toUpperCase()+st1.slice(1)
       let st2=st.substring(7,14)
           st2=st2.charAt(0).toUpperCase()+st2.slice(1)
     return st1+" "+st2
     
}
console.log(captil(str))

console.log("--------------Q 3-----------------")

let js="Javascript is awesome"
function vowl(str){
    let counter=0
for(let i=0;i<str.length;i++)
    if(str.charAt(i)=='a' ||str.charAt(i)=='e' ||str.charAt(i)=='o' ||str.charAt(i)=='i'||str.charAt(i)=='u' )
       counter++;
   
 return counter    
}
console.log(vowl(js))

console.log("--------------Q 4-----------------")

let prime=7
function isPrime(num){
    if(num>1){
       for(let i=2;i<num;i++){ 
          if(num % i !== 0 ){
             console.log("number is prime")
             break;
            }
            else{
                console.log("number is not prime")
            }
       }}
    else{
        console.log("number is not prime")
       }
 }
 isPrime(prime)

 console.log("--------------Q 5-----------------")

 let long="Kingdom of saudi arabia"
 function longestStr(str){
     let str1=str.split(' ')
     let long=0
     let longW=""
  for (var i=0; i<str1.length;i++){
       if(str1[i].length > long){
           long=str1[i].length
           longW=str1[i]

  }}
        
console.log(longW)

 }
 longestStr(long)

 console.log("--------------Q 6-----------------")

 let str2="webmaster"
function sortStr(str){
    let str1=""
    for (var i=str.length-1; i >=0 ; i--) {
            str1+= str.charAt(i);
    }

    console.log(str1)
}
sortStr(str2)

console.log("--------------Q 7-----------------")

let numbe1=10
let numbe2=-3

function sum(num,num1){
   let result= num+num1
    console.log(result)
}
console.log(sum(numbe1,numbe2))

console.log("--------------Q 8-----------------")

let age=17
function years(num){
    console.log(num*365.24)
}
years(age)

console.log("--------------Q 9-----------------")

let hour=2
function howManysec(h){
    console.log(h*60*60)
}
howManysec(hour)

console.log("--------------Q 10-----------------")

let number1=-2
function lessThanOrEqualToZero(num){
    let res=true
    if(num>0){
        res=false
    }
console.log(res)  
}
lessThanOrEqualToZero(number1)

console.log("--------------Q 11-----------------")

let Numberdigit=103584
function num_of_digits(num){
    let res=num.toString()
        res=res.length
    console.log(res)
}
num_of_digits(Numberdigit)

console.log("--------------Q 12-----------------")

let arr={ a: 1, b: 2 }
function toArray(ar){
    let array=Object.entries(ar)
    console.log(array)
}
toArray(arr)

console.log("--------------Q 13-----------------")

let city=9
function paths(num){
    let res=1
    for(var i=1;i<=num;i++)
       res=res*i
console.log(res)
}
paths(city)

console.log("--------------Q 14-----------------")

let double="loop"
function doubleLetters(str){
    let res=false
   for(var i=0;i<str.length;i++)
      if(i!==(str.length-1)){
        if(str.charAt(i)==str.charAt(i+1)){
             res=true
      }
    
    }
console.log(res)
}
doubleLetters(double)

console.log("--------------Q 15-----------------")

function getDate(){
console.log(new Date().toLocaleDateString())   
}
getDate()

console.log("--------------Q 16-----------------")

let date1= new Date("June 14, 2019")
let date2= new Date("June 20, 2019")
function getDays(d1,d2){
    let diff=d2.getTime()-d1.getTime()
    let res=diff/ (1000*60*60*24)
    console.log(res)
}
getDays(date1,date2)

console.log("--------------Q 17-----------------")

let animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]
let animal="cockdogwdufrbir"
function countAnimals(str){
    let counter=0;
    for(var i=0; i<animals.length;i++){
        for(var j=0;j<animals[i].length;j++){
            for(var k=0;k<str.length;k++){
             if(animals[i][j].includes(str.charAt(k))){
                  
               }
    }}
    }
console.log(counter)}
countAnimals(animal)

console.log("--------------Q 18-----------------")

let n1=10
let n2=20
function larger(num,num2){
    let res=0
     if(num>num2)
      res=num
    else
       res=num2
console.log(res)
}
larger(n1,n2)

console.log("--------------Q 19-----------------")

let mostExpensive =({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
   }) 
function expensive(arr){
    let obj=Object.values(arr)
    let res=Math.max(...obj)
console.log( "The most expensive one " + res1)  
}
expensive(mostExpensive)

