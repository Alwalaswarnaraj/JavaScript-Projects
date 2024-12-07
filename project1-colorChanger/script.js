const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')

console.log(buttons)

buttons.forEach(function(button){
    console.log(button);

    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target);

        if(e.target.id === 'grey'){
            document.body.style.backgroundColor = e.target.id
            document.body.style.color = 'white'
        }
        if(e.target.id === 'yellow'){
            document.body.style.backgroundColor = e.target.id
            document.body.style.color = 'white'
        }
        if(e.target.id === 'orange'){
            document.body.style.backgroundColor = e.target.id
            document.body.style.color = 'white'
        }
        if(e.target.id === 'blue'){
            document.body.style.backgroundColor = e.target.id
            document.body.style.color = 'white'
        }
    })
    
})