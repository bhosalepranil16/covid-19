console.log('Helpline')

// Containers
const $displayContainer = document.querySelector('#display-container')

// Templates

const helplineTemplate = document.querySelector('#nos-template').innerHTML;

fetch('/contacts_data')
.then(response => {
    return response.json()
})
.then(data => {
    let html = null;
    for(let i=0;i<36;i++) {
        html = Mustache.render(helplineTemplate,{
            state : data[i].state_or_UT,
            no : data[i].helpline_number,
        })
        $displayContainer.insertAdjacentHTML('beforeend',html);
    }
})
.catch(err => {
    console.log(err)
})