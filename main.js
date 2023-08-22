// navbar style
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100)
})
//show or hide faq
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>
    {
        faq.classList.toggle('open');
        //change icon
        const icon=faq.querySelector('.faq_icon i');
        if(icon.className==='ri-add-circle-fill')
        {
            icon.className='ri-close-circle-fill';
        }else{
            icon.className='ri-add-circle-fill';
        }
    })
})

// ###toggle menu bar### 
const menu=document.querySelector(".nav_menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closebtn=document.querySelector("#close-menu-btn");
menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    menuBtn.style.display="none";
})

// ##closebtn keliye## 
const closeNav=()=>
{
    menu.style.display="none";
    closebtn.style.display="none";
    menuBtn.style.display="inline-block";
}
closebtn.addEventListener('click',closeNav);