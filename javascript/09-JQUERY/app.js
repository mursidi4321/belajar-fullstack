$(document).ready(function(){
    // memilih li Bandung
    const pilih = $('li').first() // Bandung
    const Jakarta = pilih.next();
    const ulJakarta = Jakarta.next();
    const liAll = $('#destinations').children('li');
    console.log(liAll)

})