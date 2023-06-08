$(document).ready(function(){

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let con2top = $(".con2").offset().top
        if(winst>=con2top){
            $(".con2").addClass("on")
        }else{
            $(".con2").removeClass("on")
        }
    })

    // $(".wrap>div").click(function(){})
    $(".wrap>div").on("wheel DOMMouseScroll",function(event){
        // console.log(event)
        //두 가지로 표현 가능
        //파이어폭스 브라우저에서는 click메서드가 적용 안됨 -> DOMMouseScroll
        //브라우저마다 수치의 표현에 차이가 있어서 그것을 맞춰주는 작업

        let E = event.originalEvent
        let delta = 0;
        if(E.detail){
         delta = E.detail * -40
         //파이어폭스 브라우저
        }else{
         delta = E.wheelDelta  
         //크롬 브라우저
        }
//~브라우저의 호환을 맞춰주는 작업~

// ↓실행할 동작을 입력
        if(delta<0){
         //마우스 휠을 내렸을 때
         if($(this).next().length!=0){
            let posTop = $(this).next().offset().top
            console.log($("html,body").stop().animate({scrollTop:posTop},1000)) 
         }

        }else{
         //마우스 휠을 올렸을 때
         if($(this).prev().length!=0){
            let posTop = $(this).prev().offset().top
           console.log($("html,body").stop().animate({scrollTop:posTop},1000)) 
         }  
        }
        return false

    })

})