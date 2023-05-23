window.onload = function(){
    //문서를 끝까지 읽은 뒤 실행할 소스코드
    let menuState = false
    let btnMenu = document.querySelector(".btnMenu")
    let navTag = document.querySelector("nav")

    btnMenu.addEventListener("click",function(){
        //클릭 할 때만 실행.
        if(menuState == false){
            //메뉴가 닫혀있는 경우 실행되는 코드
            btnMenu.classList.add("close")
            navTag.classList.add("show")
            menuState = true
        }else{
            //메뉴가 열려있는 경우 실행되는 코드
            btnMenu.classList.remove("close")
            navTag.classList.remove("show")
            menuState = false
        }

    })


}