$(document).ready(function(){

    let count = 0;
    let perView;
    //train클래스 너비를 변경 => train클래스 너비를 불러와서 perView로 나눈 후 결과를 다시 적용
    let stationWidth;
    let trainWidth;
    
    let winWidth = $(window).width()
    if(winWidth>1024){
        console.log("pc사이즈 입니다.")
        perView = 2.5
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
    }else if(winWidth>=768){
        console.log("태블릿사이즈 입니다.")
        perView = 2
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView 
        $(".train").width(trainWidth)
    }else{
        console.log("모바일사이즈 입니다.")
        perView = 1
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
    }


    $(window).resize(function(){
        let winWidth = $(window).width()
        if(winWidth>1024){
            console.log("pc사이즈 입니다.")
            perView = 2.5
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }else if(winWidth>=768){
            console.log("태블릿사이즈 입니다.")
            perView = 2
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView 
            $(".train").width(trainWidth)
        }else{
            console.log("모바일사이즈 입니다.")
            perView = 1
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }
    })


    $(".btnNext").click(function(e){
        count++
        e.preventDefault()
        //기차가 왼쪽으로 500px 이동
        if(count>4){count=0} //예외처리 :이미지 없는 다음 화면이 계속 나오므로 처리해준다
        moveSlider(count)
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--
        if(count<0){count=0} //예외처리 :0에서 prev버튼을 누르면 마이너스 값이 들어가고 +가 되면서 빈 화면이 보이게 됨.
        moveSlider(count)
    })

    function moveSlider(idx){
        $(".train").css("transform","translateX("+( -20*idx)+"%)")
    }
    moveSlider(2)
})
