
let allEmployees = readFromLocal();
let tableOfDeparments = document.getElementById('tableOfDeparments');

function Deparment(departmentName, fullName, salary) {
    this.departmentName = this.departmentName;
    this.depEmployees = [fullName];
    this.salary = [salary];
    this.salarySum = 0;
    this.salaryAvg = 0;
}

function insertToObj() {

    for (let i = 0; i < allEmployees.length; i++) {
        let data = allEmployees[i];
        if (data.department == "Development") {
            Development.depEmployees.push(data.fullName);
            Development.salary.push(data.salary);
            Development.salarySum += data.salary;
        }
        if (data.department == "Administration") {
            Administration.depEmployees.push(data.fullName);
            Administration.salary.push(data.salary);
            Administration.salarySum += data.salary;
        }
        if (data.department == "Finance") {
            Finance.depEmployees.push(data.fullName);
            Finance.salary.push(data.salary);
            Finance.salarySum += data.salary;
        }
        if (data.department == "Marketing") {
            Marketing.depEmployees.push(data.fullName);
            Marketing.salary.push(data.salary);
            Marketing.salarySum += data.salary;
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

    for (const dep in Deparment) {
        this.salaryAvg = this.salarySum / (this.depEmployees.length);
    }
}
// --------------------------rendering--------------------------------

Deparment.prototype.render = function () {


    let th = document.createElement('th');
    tableOfDeparments.appendChild(th);
    th.textContent = this.departmentName;

    let tr = document.createElement('tr');
    th.appendChild(tr);
    tr.textContent = this.depEmployees.length;

    let tr = document.createElement('tr');
    th.appendChild(tr);
    tr.textContent = this.salaryAvg;

    let tr = document.createElement('tr');
    th.appendChild(tr);
    tr.textContent = this.salarySum;

}

let Administration = new Deparment("Administration", "", 0);

let Finance = new Deparment("Finance", "", 0);


let Marketing = new Deparment("Marketing", "", 0);

let Development = new Deparment("Development", "", 0);

readFromLocal();
insertToObj();
calculateAvg();
//render
Administration.render();
Finance.render();
Marketing.render();
Development.render(); 




