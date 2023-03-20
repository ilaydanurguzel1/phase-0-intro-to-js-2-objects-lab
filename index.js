// Write your solution in this file!

const employee={
    name:"Ilayda Guzel",
    streetAddress:"Turkuaz Mah"
};

//1
function updateEmployeeWithKeyAndValue(employee,key,value){
    const updateEmployee = { ...employee,"name":"Sam"};
    updateEmployee[key] = value;
    return updateEmployee;
};
const updateEmployee=updateEmployeeWithKeyAndValue(employee,'streetAddress', '11 Broadway')


//2
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value; 
    return employee;
};

const lastEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress', '12 Broadway');

//3
function deleteFromEmployeeByKey(employee,key,value){
    return {...employee,
        [key]:value
    }
};

const deleteEmployee= deleteFromEmployeeByKey(
    employee,
    "name",
    "undefined");

//4
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}

