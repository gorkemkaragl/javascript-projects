const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const movieList = document.getElementById('movieList');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    message.textContent = "Yükleniyor...";
    movieList.innerHTML = "";
    event.preventDefault();
    const filmAdi = searchInput.value;
    
    //OMDb API adresi
    const url = `https://www.omdbapi.com/?apikey=240c8fec&s=${filmAdi}`;

    //API'ye istek gönder
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.Search) {
                message.textContent = "Film bulunamadı.";
                return;
            }
            message.textContent = ""; // mesajı temizle
            movieList.innerHTML = "";


            data.Search.forEach(film => {
                const filmCard = document.createElement('div');

                filmCard.innerHTML = `
                <h3>${film.Title}</h3>
                <p>Yıl: ${film.Year}</p>
                <img src="${film.Poster}" alt="${film.Title}" />
                `;

                movieList.appendChild(filmCard);

            });
           
        })
        .catch(error => {
            console.error('Hata:', error);
            message.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
        });

        
});

