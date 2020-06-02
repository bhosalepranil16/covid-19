

console.log('States')

// Containers
const $rowContainer = document.querySelector('#display-container');

// templates 
const rowTemplate = document.querySelector('#row-template').innerHTML;
const loaderTemplate = document.querySelector('#loader-template').innerHTML;


$rowContainer.insertAdjacentHTML('beforeend',loaderTemplate);

fetch('/states_data')
.then(response => {
    return response.json()
})
.then( data => {
    $rowContainer.innerHTML = '';
    let html = null;
    data.forEach(element => {
        html = Mustache.render(rowTemplate,{
            state : element.state,
            active : element.active,
            recovered : element.recovered,
            deaths : element.deaths,
            total : element.confirmed
        })
        $rowContainer.insertAdjacentHTML('beforeend',html);
    });
})
.catch( err => {
    console.log(err);
})