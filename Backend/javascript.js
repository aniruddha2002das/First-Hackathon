const { json } = require('express');

const spawner = require('child_process').spawn;

let obj = {
    "dept_airp" : "BOM",
    "arr_airp" : "CCU",
    "date": "2023-01-25" 
}

console.log("Data getting passed to python file :: ", obj);

const python_process = spawner('python3', ["./python.py", JSON.stringify(obj)]);

python_process.stdout.on('data', (data) => {
    console.log('Data recieved from python script :: ', JSON.parse(data.toString()));
})

python_process.stderr.on('data', (data) =>{
    console.error(data.toString());
})