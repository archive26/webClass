window.onload = function(){
   let btn1 = document.querySelector(".btnClick")
   btn1.addEventListener("click",function(){
    //클릭했을 때 실행되는 소스코드 (이벤트형태,클릭했을떄 일어나는동작)
    //클릭이벤트핸들러를 추가
    document.querySelector(".txtbox").style.color="black"
   })

   let btnOpen = document.querySelector(".btnPopup")
   btnOpen.addEventListener("click",function(){
      document.querySelector(".hiddenPopup").classList.add("show")
   })

   let btnClose = document.querySelector(".btnPopupClose")
   btnClose.addEventListener("click",function(){
      document.querySelector(".hiddenPopup").classList.remove("show")
   })

}


