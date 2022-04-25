const container = document.querySelector('.container')
const range = document.querySelector('#range')


range.addEventListener('input',function(event){
    container.style.filter='brightness('+event.target.value+'%)'
})