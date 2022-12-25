import { students } from "../data/students.js";

const loadstudents=()=>{
    let strStudents="";
    students.forEach((student,index)=>{
        strStudents+=` <tr>
        <th scope="row">${index +1}</th>
        <td>${student.name}</td>
        <td>${student.puan}</td>
      </tr>`;
    });
    document.querySelector("#tblStudents tbody").innerHTML=strStudents;
};
const setStudentBg=()=>{
    const rows=document.querySelectorAll("#tblStudents tbody tr");
    for(let row of rows){
        const puan=row.querySelector("td:nth-child(3)").innerText;
    if(puan<50){
        row.classList.add("table-danger");
    }
}
}
loadstudents();
setStudentBg();