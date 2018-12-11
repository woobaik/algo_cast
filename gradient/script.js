
let content = document.querySelector('.content')
let color1 = document.querySelector('#color-1')
let color2 = document.querySelector('#color-2')
// body.style.backgroundColor = '#D8BFD8'
let colorChanger = () => content.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`

color1.addEventListener('input',() => {
  colorChanger()
})
color2.addEventListener('input',() => {
  colorChanger()
})
