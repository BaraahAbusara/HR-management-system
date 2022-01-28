
let allEmployees = readFromLocal();
let tableOfDeparments = document.getElementById('tableOfDeparments');

let allDepartments=[]; 

function Deparment(departmentName) {
    this.departmentName = departmentName;
    this.depEmployees = [];
    this.salary = [];
    this.salarySum =0 ;
    this.salaryAvg =0 ;
    this.numOfEmployees=0;
}

function insertToObj() {

    for (let i = 0; i < allEmployees.length; i++) {
        let data = allEmployees[i];
        
        if (data.department == "Development") {
            Development.depEmployees.push(data.fullName);
            Development.salary.push(data.salary);
            Development.salarySum += data.salary;
            Development.numOfEmployees++;
            
        }
        if (data.department == "Administration") {
            Administration.depEmployees.push(data.fullName);
            Administration.salary.push(data.salary);
            Administration.salarySum += data.salary;
            Administration.numOfEmployees++;
        }
        if (data.department == "Finance") {
            Finance.depEmployees.push(data.fullName);
            Finance.salary.push(data.salary);
            Finance.salarySum += data.salary;
            Finance.numOfEmployees++;
        }
        if (data.department == "Marketing") {
            Marketing.depEmployees.push(data.fullName);
            Marketing.salary.push(data.salary);
            Marketing.salarySum += data.salary;
            Marketing.numOfEmployees++; 
        }
    }
}

function readFromLocal() {                          //returns a normal array 
    let jsonArray = localStorage.getItem('allEmployees');
    let arr = JSON.parse(jsonArray);
    if (arr !== null)
        return arr;
    else
        return [];
}

function calculateAvg() {

    for (let i=0;i<allDepartments.length;i++) {
        if(allDepartments[i].salarySum==0)
        continue  ;

        allDepartments[i].salaryAvg = allDepartments[i].salarySum / (allDepartments[i].numOfEmployees);
        
    }
    
    return; 
    
}
// --------------------------rendering--------------------------------
function render (){

    for (let i=0;i<allDepartments.length;i++){
        let tr = document.createElement('tr');
        tableOfDeparments.appendChild(tr);

        let th1 = document.createElement('th');
        tr.appendChild(th1);
        th1.textContent=`${allDepartments[i].departmentName}`;

        let th2 = document.createElement('td');
        tr.appendChild(th2);
        th2.textContent=`${allDepartments[i].numOfEmployees}`;

        let th3 = document.createElement('td');
        tr.appendChild(th3);
        th3.textContent=`${allDepartments[i].salaryAvg}`;

        let th4 = document.createElement('td');
        tr.appendChild(th4);
        th4.textContent=`${allDepartments[i].salarySum}`;
//------------------------------------------------------------------------
      
    }
    let trAll = document.createElement('tr');
    tableOfDeparments.appendChild(trAll);

    let th = document.createElement('th');
    trAll.appendChild(th);
    th.textContent=`Total`; 

    let th5 = document.createElement('th');
    trAll.appendChild(th5);
    let totalNumOfEmployees=findTotalNumOfEmployees();
    th5.textContent=`${totalNumOfEmployees}`;

    let th6 = document.createElement('th');
    trAll.appendChild(th6);
    let totalSumOfSalary=findSumOfSalaries();
    let totalAvgOfSalary=totalSumOfSalary/totalNumOfEmployees;
    th6.textContent=`${Math.round(totalAvgOfSalary)}`

    let th7 = document.createElement('th');
    trAll.appendChild(th7);
    th7.textContent=`${Math.round(totalSumOfSalary)}`; 

    console.log(th7);
}

function findSumOfSalaries ()
{
    let sum = 0 ;
    for(let i=0; i<allDepartments.length;i++)
    sum+=allDepartments[i].salarySum;

    
    return sum; 
}
function findTotalNumOfEmployees ()
{
    
    let sum = 0 ;
    for(let i=0; i<allDepartments.length;i++)
    {
        sum+=allDepartments[i].numOfEmployees;
    }

    
    return sum; 
}


let Administration = new Deparment("Administration", "", 0);
allDepartments.push(Administration);

let Finance = new Deparment("Finance");
allDepartments.push(Finance);

let Marketing = new Deparment("Marketing");
allDepartments.push(Marketing);

let Development = new Deparment("Development");
allDepartments.push(Development);

allEmployees= readFromLocal();
insertToObj();
calculateAvg();
console.log(allDepartments);
render(); 




