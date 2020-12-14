const baseURL = "https://picsum.photos/v2/list";

const section = document.querySelector("div");

fetch(baseURL)
    .then(function (result) {
        return result.json();
    })
    .then(function (json) {
        console.log(json);
        displayResults(json);
    });
function displayResults(json) {
    for (let j = 0; j <= 25; j++) {
        let firstBox = document.createElement('span');
        let quote = json;
        let heading = document.createElement('h1');
        console.log(json[j].author)
        heading.textContent = json[j].author;

        let img = document.createElement('img');
        img.src = json[j].download_url
        console.log(img)

        section.appendChild(heading);
        section.appendChild(img);

        section.appendChild(firstBox);
    }
    if (baseURL <= 30) {
        img.src = 'https://picsum.photos/v2/list' + img.multimedia[0].url;
        img.alt = current.headline.main;
    }


}
