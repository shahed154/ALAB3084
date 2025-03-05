// part 1 /2 

const str = ("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26");
let rows = str.split('\n');

rows.forEach((rows) => {
	console.log(rows);

});



let numOfColumns = 1






for (let i = 0; i < str.length; i++) {

     if (str[i] === ",") {
       numOfColumns++;
      // console.log(numOfColumns);
     }
     
     if (str[i] === "\n") {
       break;
     }
   }
   
   //console.log("number of columns = ", numOfColumns);
     


     



