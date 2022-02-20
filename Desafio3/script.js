/**
 * Pega o botão da tela e recebe o valor do input
 */
const btn = document.querySelector('#send');

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.querySelector('#anagrama');
    const value = name.value;
    exibir(value);
})

/**
 * 
 * recebe o valor do input da tela 
 * separa as letrass iguais em um array
 * logo apos e mostrado na tela o tamanho do array
 */
function exibir(strs) {
    anagrama = {};

    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    for (const str of strs) {
        let key = str.split('').reduce((total, char) => total * primes[char.charCodeAt() - 97], 1);
        console.log(key);
        (!anagrama[key]) ? anagrama[key] = [str] : anagrama[key].push(str);

        let fim = Object.values(anagrama);
        let tamanhoArray = fim.length
        document.getElementById('exibir').innerHTML = '[' + fim + ']' + '<br>' + ' Tamanho do array ' + tamanhoArray;
        console.log(fim)
    }
}