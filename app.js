const objBond = (name, interestRateType, interestRateValue, timeToMaturity, faceValue) => {
  let obj = {
	  name,
	  interestRateType,
	  interestRateValue,
	  timeToMaturity,
	  faceValue,
	  // isTaxed: false
	  calcFutureValue() {
	  	if (this.interestRateType.toLowerCase() == 'fixed') {
	  		return calcFixed(this.faceValue,this.interestRateValue,this.timeToMaturity)
	  	}
	  }
	  }
  return obj
}

const btn = document.querySelector("button")

btn.addEventListener('click', (e) => {
	e.preventDefault()
	let bond1 = objBond(document.getElementById("Bond").value,document.getElementById("interestRateType").value, document.getElementById("interestRateValue").value, 
		document.getElementById("timeToMaturity").value,
		document.getElementById("faceValue").value)
	console.log(bond1.calcFutureValue())
})

function calcFixed(value, rate, period) {
	let futureValue = 0
	futureValue = value * (1+(rate/100))^period
	return futureValue
}