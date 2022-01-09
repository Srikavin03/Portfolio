// show menu

const showMenu=(toogleId,navId)=>{
    const toogle = document.getElementById(toogleId),
        nav=document.getElementById(navId)

    if(toogle && nav){
        toogle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav_toggle','nav_menu')

//active and remove active

const navlink=document.querySelectorAll('.nav_link')
navlink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu=document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click',linkAction))

