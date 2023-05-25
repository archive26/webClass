window.onload = function(){

let station1 = new Swiper(".station1",{
    loop:true,
    direction:'horizontal',
    // slidesPerView:3.2, //슬라이드 개수의 반만큼 최대 적용가능
    // spaceBetween:40,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable : true
        
      },
      navigation: {
          prevEl: ".csPrevBtn",
          nextEl: ".csNextBtn",
      },
      autoplay:{
        delay:2000,
        pauseOnMouseEnter:true
      },
      speed:2,
      breakpoints:{
        320:{
            slidesPerView:1,
            spaceBetween:0
        },
        768:{
            slidesPerView:2,
            spaceBetween:10
        },
        1024:{
            slidesPerView:3,
            spaceBetween:20
        }
      }
})

document.querySelector(".station1").addEventListener("mouseover",function(){
    station1.autoplay.stop()
})
document.querySelector(".station1").addEventListener("mouseout",function(){
    station1.autoplay.start()
})
    

}