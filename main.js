// show menu 

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }       
}

showMenu('nav_toggle', 'nav_menu')

// active & remove active  

const navlink = document.querySelectorAll('.nav-link')

    function linkAction(){
          navlink.forEach(n => n.classList.remove('active'))
          this.classList.add('active')

          const navMenu = document.getElementById('nav_menu')
          navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click', linkAction))


// typing script

var typed = new Typed(".multiple-text",{
      strings: ["Frontend Developer", "Web Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true   
  })

  // connecting-google sheets

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxVSp2JbXKvzO6FmOclChRS6AeA92waKa5nk2usvLOn6tIvuZrlwshYxtfhGWV3jfWU/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Message sent successfully !"
            setTimeout(function(){
                  msg.innerHTML = ""
            },5000)
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })