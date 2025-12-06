// Chapter no 5             Math Expression



// Q no 1

// var num1 = 3
// var num2 = 5
// var total = num1 + num2;
// alert("Sum of 3 and 5 is",total);

// Q no 2 subtraction
// var num1 = 3
// var num2 = 5
// var total = num1 - num2;
// console.log("Subtraction of 3 and 5 is", total);

// multiplication
// var num1 = 3
// var num2 = 5
// var total = num1 * num2;
// console.log("Multiplication of 3 and 5 is", total);

// Division
// var num1 = 3
// var num2 = 5
// var total = num1 / num2;
// console.log("Division of 3 and 5 is", total);

// Modulus
// var num1 = 3
// var num2 = 5
// var total = num1 % num2;
// console.log("Modulus of 3 and 5 is", total);

// Q no 3

// var num;
// console.log("Value after variable declaration is :",num)
// var num = 5
// console.log("Initial value",num);
// num++;
// console.log("Value after increment is", num);
// console.log("Value after addition is ", num + 7);
// console.log("Value after decrement is ", --num + 7);
// console.log("The output is ", (num + 7) % 3);


// Q no 4
// var ticket_price = 600;
// var total = ticket_price * 5;
// document.write("Total cost to buy 5 tickets to a movie is :", total + "PKR")





// Q no 5
// var table = 4;
// for (let i = 1; i<=10; i++) {
//     console.log(table, "X" , i , "=",   table*i);      
// }


// Q no 6





// Q no 7 
// document.write("<b> <h1> Shopping Cart </h1> </b> <br><br><br>")
// var price_item = 650;
// document.write("Price of item 1 is : " ,price_item , "<br>") 
// document.write("Quantity of item 1 is  3 : ", price_item * 3 ,"<br>")
// var price_item2 = 100;
// document.write("Price of item 2 is : ", price_item2,  "<br>") 
// document.write("Quantity of item 2 is  7 : ", price_item2 * 7  , "<br>")
// var shipping_charges = 100;
// document.write("Shipping charges is ", shipping_charges , "<br><br><br>")
// document.write("Total cost of your order is : ", price_item * 3 + price_item2 * 7 + shipping_charges, "<br>")

// Q no 8
// document.write("<b> <h1> Mark Sheet </h1> </b> <br><br><br>")
// var total_marks = 980;
// document.write("Total marks : ", total_marks, "<br>");
// var marks_obtained = 804;
// document.write("Marks Obtained : ", marks_obtained , "<br>");
// var percentage = (marks_obtained / total_marks) * 100;
// document.write("Percentage :", percentage, "%")


// Q no 9
// document.write("<b> <h1> Currency Converter  </h1> </b> <br><br><br>")
// var us_dollar = 104.80;
// var saudi_curr = 28;
// var total_dollar = us_dollar * 10; 
// var total_riyal = saudi_curr * 25;
// document.write("Total Currency in PKR : ", total_dollar + total_riyal ,  "<br>");

// Q no 10
// var num = 10;
// console.log(num + 5 * 10 / 2 );

// Q no 11
// document.write("<b> <h1> Age Calculator  </h1> </b> <br><br><br>")
// var current_year = prompt("Enter your current year");
// document.write("Current Year :", current_year ,"<br>")
// var birth_year = prompt("Enter your birth year");
// document.write("Birth Year :", birth_year, "<br>")
// var your_age = current_year - birth_year;
// document.write("Your Age is :", your_age)

// Q no 12
// document.write("<b> <h1> The Geometrizer  </h1> </b> <br><br><br>")
// var radius_circle = prompt("Radius of a circle");
// document.write("Radius of a Circle :", radius_circle ,"<br>")
// var circum = ((2 * 3.142 * radius_circle));
// document.write("The circumference is  :", circum ,"<br>")
// var area = ((3.142 * radius_circle * 2))
// document.write("The area is :", area)

// Q no 13 
// document.write("<b> <h1> The Lifetime Supply Calculator </h1> </b> <br><br><br>");
// var favorite_snack = prompt("Favorite Snack");
// document.write("Favorite Snacks :", favorite_snack ,"<br>")
// var current_age = prompt("Current Age");
// document.write("Current Age :", current_age ,"<br>")
// var max_age = prompt("Maximum Age");
// document.write("Estimated Maximum Age :", max_age ,"<br>")
// var amount_snack = prompt("Amount of snack per day");
// document.write("Amount of snack per day :", amount_snack ,"<br>")
// var total = (max_age - current_age)  * 365 * amount_snack;
// document.write( "You will need chocolate chip to  :", total ,"<br>")


//  Chapter no 7           Math Expression
// // Q no 1
// var a = 10;
// document.write("Result : <br> The value of a is :", a , "<br><br>"); // 10
// document.write("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" , "<br><br>")
// ++a; // 11
// document.write("The value of ++a is :", a , "<br>"); // 11
// document.write("Now the value of a is :", a , "<br><br><br>"); // 11

// document.write("The value of a++ is :", a++ , "<br>"); // 11
// document.write("Now the value of a is :", a , "<br<br><br><br><br>"); // 12

// document.write("The value of --a is :", --a , "<br>"); //11
// document.write("Now the value of a is :", a , "<br><br><br>"); // 11

// document.write("The value of a-- is :", a-- , "<br>"); // 11
// document.write("Now the value of a is :", a , "<br>"); // 10


// Q no 2 
// var a = 2;
// document.write("a is ", a , "<br>");
// var b = 1;
// document.write("b is ", b , "<br>");
// var result = --a - --b + ++b + b--;      // 1 - 0 + 2 + 0  => 3
// document.write("Result is ", result)


// Q no 2
// --a                    => 1
// --a - --b => 1 - 0     => 1
// --a - --b + ++b        => 2 - 2 + 2 => 2
// --a - --b + ++b + b--  +> 1 - 0 + 2 + 0 => 3


// Q no 3
// var name1 = prompt("Enter your name");
// document.write("Welcome my website " + name1)

// Q no 6
// var subject1 = prompt("Enter first subject name");
// document.write("Enter first subject name" , subject1)
// var subject2 = prompt("Enter second subject name");
// document.write("Enter second subject name" , subject2)
// var subject3 = prompt("Enter third subject name");
// document.write("Enter third subject name" , subject3)
// var total_marks_subject = 300;
// var obtained1 = prompt("obtained marks first subject");
// document.write("obtained marks first subject" , obtained1)
// var obtained2 = prompt("obtained second subject");
// document.write("obtained marks second subject" , obtained2)
// var obtained3 = prompt("obtained third subject");
// document.write("obtained marks third subject" , obtained3)
// var result = (obtained1 + obtained2 + obtained3 / total_marks_subject) * 100;
// document.write("your percentage is " , result + "%");


// 













