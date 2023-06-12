4%3
$(document).ready(function(){
    $(".list>li").each(function(){
        let result = Math.round(Math.random()*1000)%4
        if(result==0){
            $(this).addClass("mltr")
        }else if(result==1){
            $(this).addClass("mrtl")
        }else if(result==2){
            $(this).addClass("mbtt")
        }else {
            $(this).addClass("mttb")
        } 
    })
    //mltr과 mrtl 이 랜덤으로 적용되는 소스코드 ,사용자의 이벤트가 일어나기 전에 실행됨
    
    $(window).scroll(function(){
        //사용자의 이벤트 실행 (.scroll)
        let winst = $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.65  //브라우저화면의 높이를 계산 . 500(절대수치)로 했을 때 는 브라우저 크기가 줄어들면 이미 밑에서 애니메이션 동작이 끝나 있어서 효과를 볼 수 없다
        $(".mltr,.mrtl,.mttb,.mbtt").each(function(){
            if(winst+winHeight>$(this).offset().top){
              $(this).addClass("on")  
            }else{
              $(this).removeClass("on")
            }
        })

    })

})