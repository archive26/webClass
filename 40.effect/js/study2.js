$(document).ready(function(){

    // let animationTerm = 0.1
    // let animationDuration = 5
    // // console.log($(".floatingTxt h1 b").length) //선택한 태그들은 배열형태로 리턴된다. 그래서 배열의 원소의
    // //개수를 .length를 통해 구해볼 수 있다.



    // for(let i=0 ; i<$(".floatingTxt h1 b").length ; i++){
    //    $(".floatingTxt h1 b:nth-last-of-type("+(i+1)+")").css("animation","introAni "+animationDuration+" 1S ease "
    //    +(animationTerm*i)+"s forwards") 
    // }

    
    function textAni(cssSelector,option){
        //option정보
        //aniDelay 글자들이 나타나는 간격
        //aniSpeed 글자들이 나타나는 속도
        //textSize 글자들에게 적용하는 크기

        let animationTerm = option.aniDelay
        let animationDuration = option.aniSpeed
        $(cssSelector).css("font-size","0")
        $(cssSelector+" b").css("opacity","0").css("line-height","1").css("display","inline-block").css("font-size",option.textSize+"px")

        for(let i=0 ; i<$(cssSelector+" b").length ; i++){
            $(cssSelector+" b:nth-of-type("+(i+1)+")").css("animation","introAni "+animationDuration+"s ease "+(animationTerm*i)+"s forwards") 
        }
    }

    textAni(".floatingTxt",{
        aniDelay:0.2,
        aniSpeed:0.7,
        textSize:50
    })

    textAni(".txtbox",{
        aniDelay:1,
        aniSpeed:0.5,
        textSize:90
    })

})