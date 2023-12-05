let btcPrice = document.getElementById('btc-price')
let ethPrice = document.getElementById('eth-price')
let dogePrice = document.getElementById('doge-price')


let settings = {
    'async': true,
    'scrossDomain':true,
    'url':'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
    'method':'GET',
    'headers':{}
}
$.ajax(settings).done(function(response){
    console.log(response);
    btcPrice.innerHTML=response.bitcoin.usd
    ethPrice.innerHTML=response.ethereum.usd
    dogePrice.innerHTML=response.dogecoin.usd
})
