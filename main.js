//console.log("Hello world")
//console.log("this is a tast Java file")


//string number boolen Null Object Array
//รูปแบบการประกาศตัวแปร 
// etสามารถปรับเปลี่ยนค่าได้
/**let fname = "John";  //string
console.log("Name: ",fname);
const PI=3.14;  //const ค่าคงที่ ประกาศค่าไหน เก็บค่านั้น

let age =30;//number
let height=5.9;

//สามารถปรับเปลี่ยนค่าได้
fname = "Fanta";

console.log("Name: ",fname);
console.log("Age: ",age);
console.log("Height:",height)

/**
+ บวก
- ลบ
* คูณ
 / หาร
 %หารเอาเศษ
 

 let number1 = 10;  //'10' จะเป็นstring
 let number2 = 3;   //'3' จะเป็นstring จะไม่นำมาบวกจะจะต่อกันเป็น 103

 let resulit = number1 + number2
 console.log("ผลบวก =",resulit)


 == เท่ากับ
 =! ไม่เท่ากับ
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าหรือเท่ากับ
 <= น้องกว่าหรือเท่ากับ
*/
 

//let number1 = 5;
//let number2 = 5;
//let condition number1 < number2 ;
//console.log("Congitio:",conditio); 


// if -else condition
/**if(number1 > number2) {
    console.log("this  is if!!")
} else if (number1 < number2){
    console.log("this  is else if!!")
}else{
    console.log("this  is else!!")
}
*/

//คำนวณเกรด
//let  score = 75 ;
/**
 * 
 * 
if (score >= 80){
    console.log(" เกรด A");
}else if (score >= 70){
    console.log("เกรด B");
}else if (score >= 60){
    console.log("เกรด C")
}else if (score >=50){
    console.log("เกรด D")
}else{
    console.log("เกรด F!!")
}
 */

/**
 * && และ
* || หรือ
* ! not หรือ ไม่
  */ 

/**let  number1 = 5
let number2 = 10

let conditio1 = (number1 > 0) && (number2>0) // true && true = true
console.log("conditio1: ",conditio1)
let conditio2 = (number1 > 0) || (number2>0) // true && true = true


let age = 25
let gender = "femaie"
if (age >= 18 && gender == "femaie"){
    console.log ="คุณสามารถเข้าได้"
}
    */

/**
 * 

let number1 =20
if (!(number1 % 2 == 0)){
    console.log("Even")
}
else{
    console.log("Odd")
}
 */

/**
 * Loop
 * ehile
 * for
 
let conter = 0
while (conter <= 4){
 conter+=1
 console.log("while",conter)
}

for (let i =0; i <=4 ; i= i + 1){
    console.log("for:",i);
}
*/
let age = 25
let gpush(55);
console.log(ages.length); // [40,45,50,55]

// ต่อความยาวของอาเรย์
console.log(ages.length); //4 

// ลบสมาชิกตัวสุดท้าย
ages.pop();
console.log(ages); // [40,45,50]

if (ages.includes(45)) { //true
    console.log("พบ 45 ในอาเรย์"); // พบ 45 ในอาเรย์
}

let numbers= [90,60,80,40,50];
numbers.sort();
console.log(numbers); // [40,50,60,80,90] // เรียงลำดับตัวเลขจากน้อยไปมาก

let names = ["John","Jane","Doe"];
names.push("Smith");
console.log(names); 
console.log(names.length);

for (let i =0 ; i < names.length ; i++){ //Loop เอาค่าใน Array ออกมา 
    console.log("Name:",names[i]);
}
// opject ไว้เก็บข้อมูลที่มีความซับซ้อนหลายประเภท
let stu = [{
    age : 20,
    name : "Emma",
    grade : 'A'
},{
    age : 22,
    name: "Liam",
    grade : 'B'
}];

for (let i = 0 ; i < student.length; i++){
    console.log("Student "+(i+1)+":")
    console.log("Name:",student[i].name);
    console.log("Age:",student[i].age);
    console.log("Grade:",student[i].grade);
}
student.push({
    age: 21,
    name: "Olivia",
    grade: 'A'
})
console.log(student);


funcion //ประกาศฟังชั่น
function calculate_grade(score){
    if (score >=90) {
        return 'A';
    }else if (score >=80) {
        return 'B';
    }else if (score >=70) {
        return 'C';
    }else if (score >=60) {
        return 'D';
    }else {
        return 'F';
    }
}
//เรียกใช้funcion
let student_score = 85;
let student_grade = calculate_grade(student_score);
console.log("Student Grade:",student_grade); 

/**
 array
 */

 let score = [10,20,30,40,50];

 for (let i=0; i < score.length; i++){
    console.log(`Score at index `+i+`is`+score[i]); 
    console.log(`Score at indeks ${i} is ${score[i]}`);
 }

 score.forEach((s) =>{ // Loop array การใช้ 's' แทนตัวแปรใน array
       console.log('score',s);
 })

 score[0] = score[0] *2
score[1] = score[1] *2
 score.forEach((s) =>{
    console.log('new score',s)
 })

 // map อีกวิธีในการเข้าถึง indek

 let score = [10,20,30,40,50];

 let newScore = score.map=[]

 for (let indek = 0; indek <score.length; indek++) {
    console.log('score ',score[indek])
    if (score[indek] >= 30) {
        newScore.push(score[indek])
    }    
 }

 console.log('newScore :',newScore)

 newScore.forEach((ns) =>{
    console.log('new score:',ns)
 })
 // การทำ shotr cut
 for (let indek = 0; indek <score.length; indek++) {
    console.log('score',score[indek])
 }

 // object + funcion

 let students = [
    {
        name: "aa",
        score: '50',
        grade: 'A'
    },
    {
        name: "bb",
        score: '60',
        grade: 'B'
    }
 ]
// หา student name bb
 console.log('student:', students[0])

 let student1 = students_score.find((s) =>{
    if (s.name == 'bb') {
        return true
    }
 })
 let doublescore_student = student1.map((s) => {
    return s.score * 2;
    return s
})

 console.log('student1:',student1)

 console.log(doublescore_student)

 let heightScore_student = students.filter((st) => {
    if (s.score >= 110) {
        return true;
    }
 })

 console.log('heightScore_student:',heightScore_student)ender = "femaie"
if (age >= 18 && gender == "femaie"){
    console.log ="คุณสามารถเข้าได้"
}
    */

/**
 * 

let number1 =20
if (!(number1 % 2 == 0)){
    console.log("Even")
}
else{
    console.log("Odd")
}
 */

/**
 * Loop
 * ehile
 * for
 */
let conter = 0
while (conter <= 4){
 conter+=1
 console.log("while",conter)
}

for (let i =0; i <=4 ; i= i + 1){
    console.log("for:",i);
}
/** วันที่ 6 ธันวาคม 2568
array
*/

let age1 = 25;
let age2 = 30;
let age3 = 35; 

let ages= [25, 30, 35];
console.log(ages); // [25,30,35]
console.log(ages[1]); // 25 30 35 

// เเทนที่ค่าอาเรย์
age = [40,45,50];
console.log(ages); // [40,45,50]