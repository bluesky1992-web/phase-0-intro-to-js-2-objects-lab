// Write your solution in this file!
const employee = {
    name: "john",
    streetAddress: "jumpStreet"

}

const updateEmployeeWithKeyAndValue = (employeeObj, key, value) => {
    const newObj = { ...employeeObj } // Using The spread operator to create new copy of the object  
    newObj[key] = value
    return newObj
}
const funcOne = updateEmployeeWithKeyAndValue(employee, "name", "sam")
console.log(funcOne)


const destructivelyUpdateEmployeeWithKeyAndValue = (employeeObj, key, value) => {

    employeeObj[key] = value
    return employeeObj
}
const funTwo = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Asmaa")
console.log(funTwo)


function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee }
    delete newObj[key]
    return newObj

}

const funThree = deleteFromEmployeeByKey(employee,"streetAddress")
console.log(funThree)



const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
     delete employee[key]
   return employee
}
const funFour = destructivelyDeleteFromEmployeeByKey(employee,"name")
console.log(employee)