var initialPrice = document.querySelector('#initial-price')
var stocksQuantity = document.querySelector('#stocks-quantity')
var currentPrice = document.querySelector('#current-price')
var submitbtn = document.querySelector('#submit-btn')
var outputBox = document.querySelector('#output-box')



function submitHandler(){
    var ip = Number(initialPrice.value)
    var qty = Number(stocksQuantity.value)
    var curr = Number(currentPrice.value)
if (ip>=0 && qty> 0 && curr>= 0) {
    calculateProfitAndLoss(ip,qty,curr)
} 
    else {
      alert("Please enter valid value")
      document.body.classList.remove("lossBg")
      document.body.classList.remove("profitBg")
    }
}

function calculateProfitAndLoss(initial,quantity,current){
  console.log(typeof(initial))
    if (initial > current) {
      let lossPercentage=(((initial-current)/initial)*100).toFixed(2);
     showOutput(`The loss is   ${(initial-current)*quantity} rupees  and loss percentage is   ${lossPercentage} %`)
      
      outputBox.style.color = "white"
      outputBox.style.fontSize = "xx-large"
       document.body.classList.remove("profitBg")
      document.body.classList.add("lossBg")
    }else if (current > initial){
      let profitPercentage=(((current-initial)/initial)*100).toFixed(2);
     showOutput(`The profit is   ${(current-initial)*quantity} rupees  and profit percentage is   ${profitPercentage} %`)
     outputBox.style.color = "white"
     outputBox.style.fontSize = "xx-large"
     document.body.classList.add("profitBg")
     document.body.classList.remove("lossBg")

    }else {
     showOutput('No pain No gain')
     outputBox.style.color = "#D97706"
     outputBox.style.fontSize = "xx-large"
    

    }


}

function showOutput(message) {
   outputBox.innerHTML = message
}

submitbtn.addEventListener("click",submitHandler)