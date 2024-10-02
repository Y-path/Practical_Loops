//Part 1

for (var x = 1; x < 101; x++) {
    if (x % 15 == 0) console.log("FizzBuzz");
    else if (x % 3 == 0) console.log("Fizz");
    else if (x % 5 == 0) console.log("Buzz");
    else console.log(x);
}

//output: 1
//        2
//        Fizz
//        4
//        Buzz
//        Fizz
//        7
//        8
//        Fizz
//        Buzz
//        11
//        Fizz
//        13
//        14
//        FizzBuzz
//        etc...........

//Part 2

let n = 13;
let isPrime = (n) => {
   let sqrtn = Math.floor(Math.sqrt(n));
   let prime = n !== 1;
   for(let i = 2; i < sqrtn + 1; i++){
      if(n % i === 0){
         prime = false;
         break;
      };
};
return prime;
}
let nextPrime = (n = 1) => {
    while(!isPrime(++n)){
    };
    return n;
 };
 console.log(nextPrime(n));

 //output: 17

//Part 3

let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let rows = csvData.split ('\n');

for (let x = 0; x < rows.length; x++) { 
    let row = rows[x].split(',');
    let cell1 = row[0];
    let cell2 = row[1];
    let cell3 = row[2];
    let cell4 = row[3];
    console.log(cell1, cell2, cell3, cell4);
}

//output: ID Name Occupation Age
//        42 Bruce Knight 41
//        57 Bob Fry Cook 19
//        63 Blaine Quiz Master 58
//        98 Bill Doctor’s Assistant 26

//output2: Index Mass (kg) Spring 1 (m) Spring 2 (m)
//         1 0.00 0.050 0.050
//         2 0.49 0.066 0.066
//         3 0.98 0.087 0.080
//         4 1.47 0.116 0.108
//         5 1.96 0.142 0.138
//         6 2.45 0.166 0.158
//         7 2.94 0.193 0.174
//         8 3.43 0.204 0.192
//         9 3.92 0.226 0.205
//         10 4.41 0.238 0.232

