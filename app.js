var initialPrice = document.querySelector('#initial-price')
var stocksQuantity = document.querySelector('#stocks-quantity')
var currentPrice = document.querySelector('#current-price')
var submitbtn = document.querySelector('#submit-btn')
var outputBox = document.querySelector('#output-box')

submitbtn.addEventListener('click',submitHandler)

function submitHandler(){
    var ip = initialPrice.value
    var qty = stocksQuantity.value
    var curr = currentPrice.value

    calculateProfitAndLoss(ip,qty,curr)
}

function calculateProfitAndLoss(initial,quantity,current){
    if (initial > current) {
      var loss = (initial - current) * quantity
      var lossPercentage = (loss/initial) * 100
      showOutput('yes')
    }else if (current > initial){
        var loss = (initial - current) * quantity
      var lossPercentage = (loss/initial) * 100
     showOutput('no')
    }else {
     showOutput('yes and no')
    }


}

function showOutput(message) {
   outputBox.innerHTML = message
}