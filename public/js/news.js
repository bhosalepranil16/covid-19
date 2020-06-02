// Containers

const $displayContainer = document.querySelector('#display-container');


// Templates 
const newsTemplate = document.querySelector('#news-template').innerHTML;


fetch('/news_data')
.then(response => {
    return response.json()
})
.then(data => {
    let html = null;
    for(let i=0;i<data.headlines.length;i++) {
        html = Mustache.render(newsTemplate,{
            src : data.image_link[i],
            heading : data.headlines[i],
            brief : data.headlines_summary[i]
        })
        $displayContainer.insertAdjacentHTML('beforeend',html)
    }
})
.catch(err => {
    console.log(err);
})