const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const bill = {
    officeName:  "the office" ,
    streetAddress: "1 st",  
    doctorName:   "Dr mister",
    patientName:   "Patient Sick",
    visitDate:   "today",
    amountBilled: "to much",  
    dueDate:  "yesterday"
}

// //lightning exercise 2
// console.log(bill[dateVisited]);
// console.log(bill[owed]);
// console.log(bill[patient]);


// //lightning exercise 3
const outputElement = document.querySelector("#app")

// for (const value of Object.values(bill)) {
//     outputElement.innerHTML += `<div>${value}</div>`
//   }


//lightning exercise object.keys
const keySection = document.createElement("section")
const valueSection = document.createElement("section")
for (const key of Object.keys(bill)) {
    keySection.innerHTML += `<span>${key} </span>`
  }
  outputElement.appendChild(keySection)

for (const value of Object.values(bill)) {
    valueSection.innerHTML += `<span>${value}  </span>`
  }
  outputElement.appendChild(valueSection)



//lightning exercise object.entries()

const dimSum = {
    first: "dumpling",
    second: "lo mein",
    third:  "fried rice",
    fourth: "eggplant",
    fifth:  "string beans"
}

for (const entry of Object.entries(dimSum)) {
    outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
}
