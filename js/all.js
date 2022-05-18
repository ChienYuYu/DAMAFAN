//滾動到指定位置顯示元素------------------------------
window.addEventListener('scroll',reveal);
function reveal(){
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((item,index)=>{
    let windowHeight = window.innerHeight;//視窗高度
    let itemHeight = reveals[index].getBoundingClientRect().top;//item到頂部的距離
    
    if(itemHeight < windowHeight/1.2){
      reveals[index].classList.add('show-section');
    }else{
      return
    }
    // console.log(windowHeight,`/ 距離頂部:${itemHeight}`)
  })
}