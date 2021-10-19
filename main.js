const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if (toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.link')

function linkAction(){
	// Active link
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//scroll reveal animation
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duretion: 2000,
	reset: true
})
//scroll home
sr.reveal('.image_5',{})
sr.reveal('.image_4',{delay: 200})
sr.reveal('.image_1',{delay: 400})
sr.reveal('.home__title',{delay: 600})
sr.reveal('.buttom',{delay: 800})
