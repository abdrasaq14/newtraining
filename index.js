// /* console.log
// console.log
// console.log
// console.log
// gggg

// */

// let firstName = `Abdulrasaq`;
// let secondName = 'Suleiman';
// let stack = 'Node';
// //let fullName = firstName + " " + secondName;

// const introduction = `Hi ${firstName} ${secondName}!, welcome to decagon, your stack is ${stack}` 
// console.log(introduction);

// let year = 23;

// if(year >=1801 && year<=1900){
//     console.log(("This is 19th century"));
// }

// else if(year >=1901 && year<=2000){
//     console.log("This is 20th century")
// }
// else if(year >=1901 && year<=2000){
//     console.log("This is 20th century")
// }

// else if(year>=2001 && year <=2100){
//     console.log("This is 21st century")
// }
// else{
//     console.log("This is not in range")
// }

// functions

// function centuryFromYear(year){
//     if(year >=1801 && year<=1900){
//         console.log(("This is 19th century"));
//         return
//     }
    
//     else if(year >=1901 && year<=2000){
//         console.log("This is 20th century")
//         return   
//     }
//     else if(year >=1901 && year<=2000){
//         console.log("This is 20th century")
//         return
//     }
    
//     else if(year>=2001 && year <=2100){
//         console.log("This is 21st century")
//         return
//     }
//     else{
//         console.log("This is not in range") 
//         return
//     }
//     return
// }

// centuryFromYear(1200);
// centuryFromYear(2000)

// function calBirthYear(birthyear){
//     let newyear = 2037 - birthyear
//     console.log(newyear)
// }

// calBirthYear(2002);
/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).Your task is to write some code to help them:Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.Log the value of BMIMark and BMIJohn to the console.*/

function calcBMI(massMark, heightMark, massJohn, heightJohn){
    let BMIMark = massMark / (heightMark*heightMark);
    let BMIJohn = massJohn / (heightJohn*heightJohn);
    console.log(`Mark BMI is ${BMIMark} while John's BMI is ${BMIJohn} `)
}

calcBMI(40, 20, 60, 30)

// function calBmi(mass, height){
//     var massMark = mass;
//     var heightMark = height * height;
//     var BMIMark = massMark/heightMark 
//     console.log("Mark BMI is " + BMIMark);
    

// }
// calBmi(50, 34);

// function calBmi(mass, height){
//     var massJohn = mass;
//     var heightJohn = height * height;
//     var BMIJohn = massJohn/heightJohn; 
//     console.log("John BMI is " + BMIJohn);
    

// }
// calBmi(50, 34);


 











