
// store date to localStorage
let data = JSON.parse(localStorage.getItem("object")) 
|| [
    {id: 1, dairy: "do homework", note: "at 6pm"},
    {id: 2, dairy: "scrum meeting", note: "at 8am"}
];


function readAll() {
    var tabledate = document.querySelector(".data_table");

    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    let elemnets = '';

    objectdata.map(record => (
        elemnets += `
        <tr>
            <td class="text_box">${record.dairy}</td>
            <td class="text_box">${record.note}</td>
            <td class="text_box">
                <button class="edit" onclick="edit(${record.id})">Edit</button>
                <button class="delete" onclick="remove(${record.id})">Delete</button>
            </td>
        </tr>`
    ))

    tabledate.innerHTML = elemnets;
}

// remove
function remove(id) {
    var choice = prompt("Do you want to delete this note? type (yes) to confirm")

    if (choice === "yes") {
        data = data.filter(rec => rec.id !== id);
        localStorage.setItem("object", JSON.stringify(data));
        readAll();
        }
    }

// create
function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}

// add 
function add() {
    var dairy = document.querySelector(".dairy").value;
    var note = document.querySelector(".note").value;

    var newObj = {id: data.length ? data[data.length - 1].id + 1 : 1, dairy: dairy, note: note};
    data.push(newObj);

    localStorage.setItem("object", JSON.stringify(data));

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}

// edit
function edit(id) {
    document.querySelector(".update_form").style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector(".new_dairy").value = obj.dairy;
    document.querySelector(".new_note").value = obj.note;
    document.querySelector(".id").value = obj.id;
}

// update
function update() {
    var id = parseInt(document.querySelector(".id").value);
    var dairy = document.querySelector(".new_dairy").value;
    var note = document.querySelector(".new_note").value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, dairy, note};

    localStorage.setItem("object", JSON.stringify(data));
    readAll();

    document.querySelector(".update_form").style.display = "none";
}

readAll();
