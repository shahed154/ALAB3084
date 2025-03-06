// part 1 /2 

const str = ("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26");


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

let rowArray =[]
// two dimensional parent array that holds everything 
let ParentArray = []


let cell = ''


let cellcount = 0
let rowcount = 0

 for (let i = 0; i < str.length; i++) {

     currentLetter = str[i];

   if (currentLetter !== "," && currentLetter !== '\n') { 
   cell += currentLetter;
   }
   else if(currentLetter === ","){
    rowArray.push(cell)
    cell = ''
   }
   else if(currentLetter === '\n')
   {
    rowArray.push(cell)
    ParentArray.push(rowArray)
    
    rowArray = [];
    cell = ''
   }
   
 
}
if (cell !== '' || rowArray.length > 0) {
  rowArray.push(cell);  // Add the last cell
  ParentArray.push(rowArray); // Add the last row
}

console.log(ParentArray)

////////////////////////// PART 3 



let peopleArray = [];

  for (i = 1; i < ParentArray.length; i++ )
  {
    
    let People = {
      ID: '',
      Name: '' ,
      Occupation: '',
      Age: ''
    }

    People.ID = ParentArray[i][0];
    People.Name = ParentArray[i][1].toLowerCase();
    People.Occupation = ParentArray[i][2].toLowerCase();
    People.Age = ParentArray[i][3];
    
   
    peopleArray.push(People);



  }
//////// part 4 

peopleArray.push({ ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" })
peopleArray.splice(1, 0, { ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" })

console.log(peopleArray)

////////// part 5
/// i give up for now 