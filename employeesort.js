	
var departments = ["d001", "d002", "d003"];

var employeeDepartments = ["e7001, d003", "e7002, d001", "e7004, d001", "e7003, d002", "e7005, d003", "e7006, d003"];

var employees = [ ];
var tempSplit =[];

for ( var i = 0; i < employeeDepartments.length; i++ ) {
    employees.push([]);
}
for ( var i = 0; i < employeeDepartments.length; i++ ) {
    tempSplit = employeeDepartments.split(", ");
    
    
}
console.log(tempSplit);
console.log(employees);