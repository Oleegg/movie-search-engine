let url = `https://api.themoviedb.org/3/search/movie?query=spring&api_key=58f80e50b7e31f11334091c645181f83`

const contentGallery = document.querySelector('.content')

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data)
}
getData();



//   results", затем индекс элемента в массиве 0, затем ключ "poster_path
//ки "https://image.tmdb.org/t/p/w1280"


function showData(d) {
    for (let i = 0; i < d.results.length; i++) {
        const img = document.createElement('img');
        img.classList.add('gallery-img')
        img.src = `https://image.tmdb.org/t/p/w1280${d.results[i].poster_path}`;
        img.alt = `image`;
        contentGallery.append(img);
    }
}




