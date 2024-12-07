const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const re = document.querySelector('#res')
    let res 

    if(height==='' || height <=0 || isNaN(height)){
        result.innerHTML = "please provide valid height"
        
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = "please provide valid weight"
    }else{
        res = (weight /((height * height)/10000)).toFixed(2)
        result.innerHTML = `BMI : ${res}`
        if( res < 18.6 ){
            re.innerHTML = "under weight"
            re.style.backgroundColor = 'red'
        }else if(res > 18 && res < 24.9){
            re.innerHTML = "Normal Range"
            re.style.backgroundColor = 'green'
        }else {
            re.innerHTML = "overweight"
            re.style.backgroundColor = 'red'
        }
    }
    


})