/*eslint-disable*/


window.onload = function () {
    getEmployees();
    document.getElementById('refresh').onclick = getEmployees;
}

async function getEmployees() {
    let result = await fetch('https://randomuser.me/api/?results=5');
    let employees = await result.json();
    console.log(employees.results);

    renderEmployees(employees.results);
}

function renderEmployees(employees) {
    const empDiv = document.getElementById('empContainer');
    empDiv.innerHTML = '';
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let template = `
            <div class="row">
                <img src="${employee.picture.large}"/>
                <div id="employeeInfo">
                    <p id="name" class="name">${employee.name.first + " " + employee.name.last}</p>
                    <p id="phone">Phone:  ${employee.phone}</p>
                    <p id="email">email: ${employee.email}</p>
                </div>
            </div>
`


        let div = document.createElement('div'); //<div></div>
        div.innerHTML = template; //<div>template</div>
        div.classList = 'row'; //<div class="row">template</div>
        empDiv.appendChild(div);
    }
}