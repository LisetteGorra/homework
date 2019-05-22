	
var departments = ["d001", "d002", "d003"];

var employeeDepartments = ["e7001, d003", "e7002, d001", "e7004, d001", "e7003, d002", "e7005, d003", "e7006, d003"];

var employees = [ ];
var tempSplit =[];

for ( var i = 0; i < employeeDepartments.length; i++ ) {
    tempSplit.push(employeeDepartments[i].split(", "));
    departments.push(tempSplit[i][1]);
}
departments.sort();
departments = [...new Set(departments)];
// console.log(departments);

// console.log(employees);
for ( var i = 0; i < departments.length; i++ ) {
    employees.push([]);
}
for (var i = 0; i < tempSplit.length; i ++){
    employees[departments.indexOf(tempSplit[i][1])].push(tempSplit[i][0]);
}

 console.log(employees);