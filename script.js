const navBtn = document.querySelector('.nav-toggle')
const links = document.querySelector('.nav-links')

navBtn.onclick = function(){links.classList.toggle('show-links')}

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        links.classList.remove('show-links')
    })
})


// ============ ABOUT ME PAGE ====================
let options = document.querySelectorAll('.tab-links');
for (let i=0; i < options.length; i++) {
  options[i].addEventListener('click', function(){

    let contents = document.querySelectorAll('.tab-contents');
    for (let i= 0; i < contents.length; i++) {
      options[i].classList.remove('active-link')
      console.log(options[i])
      if (contents[i].id == 'show'){
        contents[i].setAttribute('id', 'hide')
      }
      
    }

    let word = this.id
    
    document.querySelector('.' + word).setAttribute('id', 'show')
    this.classList.add('active-link')
    
  })
}

// ============ END OF ABOUT ME PAGE ====================