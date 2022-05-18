window.addEventListener('scroll',reveal);
function reveal(){
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((item,i)=>{
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;
    
    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('show-section');
    }else{
      reveals[i].classList.remove('show-section');
      // return
    }
    // console.log(i)
  })
}