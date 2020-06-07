


console.log('Index')

// Containers
const $indiaContainer = document.querySelector('#india-container');
const $globalContainer = document.querySelector('#global-container');
const $timeContainer = document.querySelector('#time-container');

// Templates
const dataTemplate = document.querySelector('#all-data-template').innerHTML;
const timeTemplate = document.querySelector('#time-template').innerHTML;
const loaderTemplate = document.querySelector('#loader-template').innerHTML;


$globalContainer.insertAdjacentHTML('beforeend',loaderTemplate);
$indiaContainer.insertAdjacentHTML('beforeend',loaderTemplate);

fetch('/global_data')
.then(response => {
    return response.json();
})
.then(data => {
    const html = Mustache.render(dataTemplate,{
        active : data.active_cases,
        recovered : data.death_cases,
        deaths : data.recovered_cases,
        total : data.confirmed_cases
    })
    $globalContainer.innerHTML = '';
    $globalContainer.insertAdjacentHTML('beforeend',html);
    
})
.catch(err => {
    console.log(err)
})


fetch('/india_data')
.then(response => {
    return response.json();
})
.then(data => {
    const html = Mustache.render(dataTemplate,{
        active : data.active_cases,
        recovered : data.recovered_cases,
        deaths : data.death_cases,
        total : data.confirmed_cases
    })

    const markup = Mustache.render(timeTemplate, {
        timeAndDate : data.last_updated
    })
    $indiaContainer.innerHTML = '';
    $indiaContainer.insertAdjacentHTML('beforeend',html);
    $timeContainer.insertAdjacentHTML('beforeend',markup);
})
.catch(err => {
    console.log(err)
})

