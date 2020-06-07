console.log('Helpline')

// Containers
const $displayContainer = document.querySelector('#display-container')

// Templates

const helplineTemplateWhite = document.querySelector('#nos-template-white').innerHTML;
const helplineTemplateBlack = document.querySelector('#nos-template-black').innerHTML;


const arr = [helplineTemplateWhite,helplineTemplateBlack];

fetch('/contacts_data')
.then(response => {
    return response.json()
})
.then(data => {
    let html = null;
    for(let i=0;i<36;i++) {
        html = Mustache.render(arr[i%2],{
            state : data[i].state_or_UT,
            no : data[i].helpline_number,
        })
        $displayContainer.insertAdjacentHTML('beforeend',html);
    }
})
.catch(err => {
    console.log(err)
})