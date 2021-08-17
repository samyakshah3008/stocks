var initialPrice = document.querySelector('#initial-price')
var stocksQuantity = document.querySelector('#stocks-quantity')
var currentPrice = document.querySelector('#current-price')
var submitbtn = document.querySelector('#submit-btn')
var outputBox = document.querySelector('#output-box')

submitbtn.addEventListener('click',submitHandler)

function submitHandler(){
    var ip = Number(initialPrice.value)
    var qty = Number(stocksQuantity.value)
    var curr = Number(currentPrice.value)

    calculateProfitAndLoss(ip,qty,curr)
}

function calculateProfitAndLoss(initial,quantity,current){
  console.log(typeof(initial))
    if (initial > current) {
      var loss = (initial - current) * quantity
      var lossPercentage = (loss/initial) * 100
      showOutput('Loss is ' + loss + ' and the loss percentage is ' + lossPercentage + '%')
      outputBox.style.color = "red"
      outputBox.style.fontSize = "xx-large"
    }else if (current > initial){
        var profit = (current - initial) * quantity
      var profitPercentage = (profit/initial) * 100
     showOutput('The profit is ' + profit + ' and profit percentage is ' + profitPercentage + '%')
     outputBox.style.color = "green"
     outputBox.style.fontSize = "xx-large"
    }else {
     showOutput('No pain No gain')
     outputBox.style.color = "#D97706"
     outputBox.style.fontSize = "xx-large"
    }


}

function showOutput(message) {
   outputBox.innerHTML = message
}