// INPUT EVENT FROM KEYBOARD
document.querySelector('button').addEventListener('click', () => {
    console.log('keyboard diclick');
})

const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
    switch(e.code){
        case 'ArrowUp' :
            console.log('tombol arah atas')
            break
        case 'ArrowRight':
            console.log('Tombol arah kanan');
            break
        case 'ArrowDown' :
            console.log('Tombol arah bawah');
            break;
        case 'ArrowLeft' :
            console.log('Tombol arah kiri');
            break;
        default:
            console.log('tombol diabaikan');
    }
})

input.addEventListener('keyup', () => {
    console.log('tombol keyboard direleas');
})