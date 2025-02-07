
function multiplication() {
    document.getElementById('table-heading').innerText = '';
    document.getElementById('list-item').innerHTML = '';
    const inputValue = document.getElementById('input-number').value;

    if(isNaN(inputValue) || inputValue <= 0) {

        if(isNaN(inputValue) || inputValue == "") {
            window.alert("Please Enter a valid number");
            document.getElementById('input-number').value = '';
            document.getElementById('table-heading').innerText = '';
            document.getElementById('list-item').innerHTML = '';
            return;
        }
        else if(Number(inputValue) <= 0) {
            window.alert("Please enter a number greater than 0!");
            document.getElementById('input-number').value = '';
            document.getElementById('table-heading').innerText = '';
            document.getElementById('list-item').innerHTML = '';
            return;
        }
        
    }

    let listString = '';
    for (let i=1; i<=10; i++) {
        listString += `<li class="multi-table">${Number(inputValue)} &#215; ${i} = ${Number(inputValue) * i}</li>`;
    }

    tableHading = document.getElementById('table-heading');
    listValue = document.getElementById('list-item');
    tableHading.innerText = `Multiplication Table of ${Number(inputValue)}`;
    listValue.innerHTML = listString;
    document.getElementById('input-number').value = '';

}