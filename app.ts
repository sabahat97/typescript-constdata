                          //  question {02}  \\
     
                     let Name  :   string  =  'Jungkook';
  
    console.log (`"Hello ${Name}, would you like to learn some phyton today?"`);


                         //  question  {03}   \\

                    let name1  :   string  = 'Jeon Jungkook';    

    console.log (name1.toLowerCase());           


                    let name2  :   string  = 'Jeon Jungkook';
    
    console.log (name2.toUpperCase());                

               
                    let name3  :   string  = 'Jeon Jungkook';

    console.log (name3.charAt(0).toUpperCase() + name3.slice (1).toLowerCase());     
    
    
                         //  question   {04}  \\

    let qoute  :  string =  '“Don’t tell me the moon is shining; show me the glint of light on broken glass.”';               
    
                  let author  :  string  = 'Anton Chekhov once said,';

    console.log (` ${author}  ${qoute} `);         
    
    
                       // question {05} repeat ex 4 \\


    let qoute1  :  string =  '“Don’t tell me the moon is shining; show me the glint of light on broken glass.”';            
    
                   let famous_author  :  string  = 'Anton Chekhov once said,';

    console.log (` ${famous_author}  ${qoute1} `);               


                   //  question {06}   \\

     let person_name  :  string  =  '\t\n  Suga  \t\n';

                 
                 console.log (person_name);           //  whitespace name  \\
                
                 
                 console.log (person_name.trim());    // strippingname \\
                   

                      
                 //   question {07 & 08 }    \\

                 
     let a  =  (5 + 3);
                                               //  add, sum, multi,divid  \\
             console.log (a);                 //       output 8            \\

      
     
     let b  =  (16 - 8);

             console.log (b);


    
      let c  =  (4 * 2);

             console.log (c);



     let d  =  (16 / 2);
       
             console.log (d);


                 //   question {0SS9}   \\  

    
                 let FavoriteNumber  :  number  = 6;
     
     let message  :  string  = (`${FavoriteNumber} is my lucky number" `)

                 console.log (message);


                 //  question  {10}  adding comments  choose two programs \\
           
     /* this is sabahat 
      03 - march - 2024 */   
     console.log ('Hi! how are you?');

      // this is sabahat 
     // 03 - march - 2024 
     console.log ('I like to learn programming');


                 //     question {11}   \\               
                 

let Friendnames  :  string []  = ['Miraal', 'Mahanoor', 'Kinza', 'Fabiha'];

  for (let i=0; i<Friendnames.length; i++) {
              
   console.log (Friendnames [i]);
}


                //     question  {12}    \\     

let greeting  :  string []  = ['Miraal', 'Mahanoor', 'Kinza', 'Fabiha'];


 let invite   :  string     =  '!Hey, it is party time lets be celebrate my birthday bash tomorrow!.'
                
  for (let i=0; i<Friendnames.length; i++) {
              
     console.log (greeting [i] + invite);
  }

         
                //      queation  {13}     \\


 let my_favorite_transport  :  string  =  ' I would like to own a Revo. '              

          console.log (my_favorite_transport);


                //      question {14}          \\


let guest_member : string [] = ['Miraal', 'Mahanoor', 'Kinza', 'Fabiha'];       
guest_member.forEach(guest_member => {
        console.log (`dear ${guest_member}, please join and joy my dinner at 10.pm? `)
});


                //       question  {15}     \\

                
let absentGuest : string = 'fabiha';

              console.log (`${absentGuest}, can't make it to dinner.`);


let newGuest : string = 'sara';

   guest_member[guest_member.indexOf(absentGuest)] = newGuest;
  
    
             console.log(`${newGuest}, please join and joy my dinner at 10.pm? `);


                //          question {16}      \\


                let guests: string[] = ['Miraal', 'Mahanoor', 'Kinza','Sara'];
                console.log("Great news! I found a bigger dinner table!");
                
                // Adding more guests
                
                guests.unshift('Asma');
                guests.splice(guests.length / 2, 0, "Bushra");
                guests.push("Lubna");
                
                guests.forEach(guest => {
                    console.log(`Dear ${guest}, would you like to join me for dinner?`);
                });
                              


                                    //   question {17}      \\

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests);   


                   //   question {18}         \\


let places: string[] = ["South korea", "Saudi Arab", "England", "Norway", "thailand"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);
          


                     //            question   {19}     \\


let guest_member1 : string [] = ['Miraal', 'Mahanoor', 'Kinza', 'Fabiha'];       
guest_member1.forEach(guest_member => {
        console.log (`dear ${guest_member1},invitation for dinner, Please being part of us and enjoy every moment. `)
});                     


                 // question {20}     \\

let liked : string[ ] = [ 'South Korea ', 'K2,Mountain', 'Nile river', 'Arab', 'Madina', 'Arbi'] 

console.log (`i would like to go ${liked[0]}\ni wanna like to see ${liked[1]}\ni would like to go ${liked[2]} in egpt \n${liked[3]} is my favorite country \ni want to live in ${liked [4]}\ni love to speak in ${5} language`);

        
               //   question {21}         \\

let data :{

       name        :   string
       age         :   Number
       isStudent   :   boolean
       null        :   null
       undefined   :   undefined
}={

      name       : 'kinza' ,
       age       : 18,         // primitive data type
     isStudent   : true ,
      null       : null,
      undefined  :undefined 
}               
               console.log (data);



               //   question {22}      \\

    // index error
    
    

    let names : string [] = ['ASIA , NAIMAL, FABIHA , SARA'];
   
    console.log (names[4]);
     names[3]= ' SARA';
     console.log (names[3]);


 // Correcting the error by accessing a valid index.



              //  question   {23}           //


let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
         console.log(car == 'subaru');                 // True

 console.log("is car == 'subaru?' i predict is true");  //true 
         console.log (car == 'subaru');

console.log("is car == 'subaru?' i predict is true");  //true 
         console.log (car == 'subaru');


console.log("is car == 'subaru?' i predict is true");  //true 
       console.log (car == 'subaru');


console.log("is car == 'subaru?' i predict is true");  //true 
        console.log (car == 'subaru');



console.log("Is car == 'toyota'? I predict False.");
         console.log(car == 'toyota');             // False`     

console.log ("is car == 'mira'? i predict false" );
         console.log (car == 'mira');              // false

console.log ("is car == 'revo'? i predict false");
       console.log (car == 'revo');
       
console.log ( "is car == ' mitsubishi Ek wagon'?")     // false
        console.log (car == 'Mitsubishi Ek Wagon');

console.log ('is car == "civic"')              // false 
        console.log (car == 'civic')        



        //             question   {24}      \\



        // Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False 

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True


                        // question   {25}      \\

let alien_color : string = "green";
if (alien_color == 'green'){
console.log ('you just earned 12 point for shot down the alien!')};


let alien_Color : string = 'red';
if (alien_Color == 'green'){
console.log ('no output because the condition is false')
}



                 //    if condition     queston {26}               \\
 
 alien_color = "yellow";
         if (alien_color == "yellow") {
     console.log("You just earned 5 points for shooting the alien!");
 } else {
 console.log("You just earned 15 points.");
 }

 // else conditon


 alien_color = "green";
 if (alien_color == "yellow") {
     console.log("You just earned 5 points for shooting the alien!");
 } else {
     console.log("You just earned 10 points.");
 }

       
                 //      question  {27}     \\

//green
alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}                 

//yellow


if (alien_color == "green") {
        console.log("You earned 5 points.");
    } else if (alien_color == "yellow") {
        console.log("You earned 10 points.");
    } else if (alien_color == "red") {
        console.log("You earned 15 points.");
    }

    //red

    alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}