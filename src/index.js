let page = 0;

const back = document.getElementById("back");
const next = document.getElementById("next");

const getCities = async function() {
    const url = 'https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=' + page + '&size=30';
    const response = await fetch(url);
    const cities = response.json();
    return cities;
}
getCities().then((data) => loop(data));
getCities();

back.addEventListener('click', function() {
    if (page <= 0) {
        const div = document.getElementsByTagName('div')[0];
        div.innerHTML = "Er zijn geen pagina's meer om naar terug te gaan!";

    } else {
        page--;
        const div = document.getElementsByTagName("div")[0];
        div.remove();
        const getCities = async function() {
            const url = 'https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=' + page + '&size=30';
            const response = await fetch(url);
            const cities = response.json();
            return cities;
        }
        getCities().then((data) => loop(data));
    }
})


next.addEventListener('click', function() {
    page++;
    const div = document.getElementsByTagName("div")[0];
    div.remove();
    const getCities = async function() {
        const url = 'https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=' + page + '&size=30';
        const response = await fetch(url);
        const cities = response.json();
        return cities;
    }
    getCities().then((data) => loop(data));
})




function loop(data) {
    const div = document.createElement("div");
    for (let i of data) {
        const el = document.createElement('p');
        el.innerHTML = i.name;
        div.appendChild(el);
    }
    document.body.appendChild(div);
}