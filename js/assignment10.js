// Problem 1 and 2

const json = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
      {
          "name": "Sam",
          "department": "Tech",
          "designation": "Manager",
          "salary": 40000,
          "raiseEligible": true,
          "wfh": false
        },
        {
            "name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true,
            "wfh": false
        },
        {
            "name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false,
            "wfh": false
        }
    ]
  };

 console.log(json);


 // Problem 3
const newEmployee = {
    "name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false,
    "wfh": false
};

json["employees"].push(newEmployee);
console.log(json);

// Problem 4
var totalSalary = 0;

for(var i = 0; i < json.employees.length; i++)
{
    totalSalary += json.employees[i].salary; 
}

console.log(totalSalary);

// Problem 5
for(var i = 0; i < json.employees.length; i++)
{
    if(json.employees[i].raiseEligible === true)
    {
        json.employees[i].salary = json.employees[i].salary + (json.employees[i].salary * .1);
        json.employees[i].raiseEligible = false;
        console.log(json.employees[i].salary);
    } 
}

// Problem 6
const wfh = ['Anna', 'Sam'];
for(var i = 0; i < json.employees.length; i++)
{
    if(json.employees[i].name === wfh[0] || json.employees[i].name === wfh[1])
    {
        json.employees[i].wfh = true;
    } 
    console.log(json.employees[i]);
}