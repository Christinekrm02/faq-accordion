//Grab toggle buttons
//Loop thru nodeList and add eventListener
//Toggle active class on parent nodeList

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle=>{
  toggle.addEventListener('click', ()=>{
    toggle.parentNode.classList.toggle('active')
  })
})