
//scroll事件------------------------------
window.addEventListener('scroll',reveal);
function reveal(){
  //滾動到指定位置顯示元素----------------
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((item,index)=>{
    let windowHeight = window.innerHeight;//視窗高度
    let itemHeight = reveals[index].getBoundingClientRect().top;//item到頂部的距離
    
    if(itemHeight < windowHeight/1.2){
      reveals[index].classList.add('show-section');
    }else{
      return
    }
  })

  //至頂按鈕顯示-------------------------------------
  const gotopBtn = document.querySelector('.gotop-btn');
  if(window.scrollY >800){
    gotopBtn.style.opacity = 1;
  }else{
    gotopBtn.style.opacity = 0;
    gotopBtn.style.transform=`translateY(0)`;
  }
}