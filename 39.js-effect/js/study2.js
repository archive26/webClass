$(document).ready(function(){
    //문서가 다 읽힌 뒤 한번 실행되는 소스코드


    $(".box").click(function(){
        alert("box태그를 클릭하였습니다.")
    })
    //span태그를 눌러도 알림이 뜸
        
    $(".btn").click(function(){
        alert("span태그를 클릭하였습니다.")
        return false
    // return false를 통해서 버블링 현상을 막아줄 수 있다.
    })

})
