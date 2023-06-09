$(document).ready(function(){
    $(".list>li").each(function(){
        let result = Math.round(Math.random())
        if(result){
            $(this).addClass("mltr")
        }else{
            $(this).addClass("mrtl")
        }
    })
    // $(".list>li").addClass("mrtl")
    

    $(window).scroll(function(){
        let winst = $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.65  //브라우저화면의 높이를 계산 . 500(수치)로 했을 때 는 브라우저 크기가 줄어들면 이미 밑에서 애니메이션 동작이 끝나 있어서 효과를 볼 수 없다
        

        $(".mltr,.mrtl").each(function(){
            if(winst+winHeight>$(this).offset().top){
              $(this).addClass("on")  
            }else{
              $(this).removeClass("on")
            }
        })

    })

})