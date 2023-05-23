async function fetchData() {
    try {
        let response = await fetch('https://swapi.dev/api/people/1');
        let data = await response.json();
        console.log("response", response);
        console.log("object", data);
        return (data);
    } catch (error) {
        console.log(error)
    }
};

let btn = document.getElementById('btn');
btn.addEventListener('click', fetchData);
let tbody = document.getElementById('tbody');

let objekat1 = fetchData().then(data => {
    let values1 = Object.values(data);
    let keys1 = Object.keys(data);
    console.log(values1);
    console.log(keys1);

    for (let i = 0; i < keys1.length; i++) {
        let trow = document.createElement("tr");
        let tdata1 = document.createElement("td");
        let tdata2 = document.createElement("td");
        tdata1.innerText = `${keys1[i]}`;
        tdata2.innerText = `${values1[i]}`;

        tbody.appendChild(trow);
        trow.appendChild(tdata1);
        trow.appendChild(tdata2);
    };

});
console.log(objekat1);








