function carregar() {
    document.querySelector('#text').innerHTML = ' <img src="https://media2.giphy.com/media/gpOwJ5oyraxk4/giphy.gif?cid=ecf05e47b508f6e74f5d1323c436732a19a75c05458e3836&rid=giphy.gif" > ';
}
let img = setTimeout(() => {
    document.querySelector('#text').innerHTML = 'Carregado com sucesso!'
}, 5000);