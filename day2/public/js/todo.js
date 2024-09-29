const todo = [
    {task : "Membuat Website", status : "onprogress", date : "2024-09-29"},
];

function template(task, status, index){
    const elementHTML = `
    <li>
        ${task} | ${status} | @{NOW.format("YYYY-MM-DD")}
        <button onclick="deleteTODO(${index})">Hapus</button>
        <button onclick="editTODO(${index})">Edit</button>
      </li>
    `;
    return elementHTML;
}

function addTODO() {
    const task = prompt("Tasknya apa?");
    const status = prompt("Statusnya apa?");

    // Add new task
    todo.push({task: task, status: status});

    // Update Html
    todo.map((data, idx) => {
        console.log(data, "ini index", idx);

        document.getElementById("todo-list").innerHTML += template(data.task, data.status, idx);
    })
};

function deleteTDO(idx) {
    alert(`${idx} mau dihapos`);
};

function editTODO(idx) {
    alert(`${idx} mau diedit`);
};