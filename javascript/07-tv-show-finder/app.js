const form = document.querySelector('#search-form'); // select form

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // agaar tidak refresh

    document.querySelectorAll('img').forEach((img) => img.remove()); // menghapus img jika ada sebelumnya

    const keyword = form.elements.query.value; // mengambil data inputan
    const config = { // buat paramater untuk diisikan pada links request
        params : {q : keyword}
    }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config) // mengambil data
    getImages(res.data); //jalankan fungsi getImages
    
    form.elements.query.value = '';
})

const getImages = (shows) => { // buat fungsi getImages
    for(let result of shows){ // pecah dari result
        if(result.show.image){ // jika ada bentuknya image
            const img = document.createElement('img'); // bua element img
            img.src = result.show.image.medium; // masukkan src dari hasil result
            document.body.append(img); //tambahkan dalam body
        }
    }
}