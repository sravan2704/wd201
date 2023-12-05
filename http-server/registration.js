let Form=document.getElementById("data");

const Input = document.getElementById('dob');

Input.addEventListener('input', (event) => {
    const d = new Date(event.target.value);
    const n = new Date();
    const age = n.getFullYear() - d.getFullYear();

    if ((age < 18) || age > 55) {
        Input.setCustomValidity('Please enter a valid date of birth between ages 18 and 55.');
    }
    else{
        Input.setCustomValidity('');
    }
});

let retrive=() =>{
    let bring=localStorage.getItem("entries");
    if(bring){
        bring=JSON.parse(bring);
    }
    else{
        bring=[];
    }
    return bring;
}
let entries=retrive();

const display=()=>{
    const bring = retrive();
    const tableentries=bring.map((entry)=>{
        const namecell=`<td >${entry.name}</td>`;
        const emailcell=`<td >${entry.email}</td>`;
        const passwordcell=`<td  >${entry.password}</td>`;
        const datecell=`<td >${entry.date}</td>`;
        const acceptcell=`<td >${entry.accept}</td>`;
        
        const row=`<tr>${namecell} ${emailcell} ${passwordcell} ${datecell} ${acceptcell}</tr>`;
        return row;
    }).join("\n");

    const table=`<table class="center"><tr>
    <th >Name</th>
    <th >Email</th>
    <th >Password</th>
    <th >Dob</th>
    <th >Accepted terms?</th>
</tr>${tableentries}</table> `;
  
let details=document.getElementById("entries");
details.innerHTML=table;

}
const savedata= (event) =>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const date=document.getElementById("dob").value;
    const accept=document.getElementById("checkbox").checked;
    const entry={
        name,
        email,
        password,
        date,
        accept
        
    };
    console.log(entry)
    entries.push(entry);
    localStorage.setItem("entries",JSON.stringify(entries));
    display();
}
Form.addEventListener("submit",savedata);
display();