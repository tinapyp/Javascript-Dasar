const todo=[{task:"Membuat Website",status:"onprogress",date:"2024-09-29"},];function template(task,status,index){const elementHTML=`
    <li>
        ${task} | ${status} | 2024-09-29
        <button onclick="deleteTODO(${index})">Hapus</button>
        <button onclick="editTODO(${index})">Edit</button>
      </li>
    `;return elementHTML}function addTODO(){const task=prompt("Tasknya apa?");const status=prompt("Statusnya apa?");todo.push({task:task,status:status});todo.map((data,idx)=>{console.log(data,"ini index",idx);document.getElementById("todo-list").innerHTML=template(data.task,data.status,idx)})};function deleteTDO(idx){alert(`${idx} mau dihapos`)};function editTODO(idx){alert(`${idx} mau diedit`)};