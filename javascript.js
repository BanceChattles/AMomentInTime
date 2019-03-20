var moment = require('moment');
const chalk = require('chalk');
//Displays current day of the week
console.log(moment().format("dddd"));

//if/else loop to display greeting
if (moment().hour()>12 && moment().hour()<17){
    console.log("Good Afternoon")
}
else if(moment().hour()>0 && moment().hour()<12){
    console.log("Good Morning")
}
else{console.log("Good Evening")}

//display BUT WITH CHALK
console.log(chalk.underline.bgBlue(moment().format("dddd")));

//if/else loop to display greeting
if (moment().hour()>12 && moment().hour()<17){
    console.log(chalk.underline.red("Good Afternoon"))
}
else if(moment().hour()>0 && moment().hour()<12){
    console.log(chalk.underline.blue("Good Morning"))
}
else{console.log(chalk.underline.yellow("Good Evening"))}