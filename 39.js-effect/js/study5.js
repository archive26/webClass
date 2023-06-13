$(document).ready(function(){

    let count = 0;
    let perView;
    //train클래스 너비를 변경 => train클래스 너비를 불러와서 perView로 나눈 후 결과를 다시 적용
    let stationWidth;
    let trainWidth;
    
    //브라우저 화면의 크기가 조정될 때 마다 보이는 방식(pc,tablet,mobile)을 정의하는 영역을 먼저 만들어야 아래 이벤트가 실행됨
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
        // 사용자의 이벤트 (resize)가 일어나야 실행
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
         // 사용자의 이벤트 (click)가 일어나야 실행
        count++
        e.preventDefault()
        //기차가 왼쪽으로 500px 이동
        if(count>4){count=0} //예외처리 :이미지 없는 다음 화면이 계속 나오므로 처리해준다
        moveSlider(count)
    })

    $(".btnPrev").click(function(e){
        // 사용자의 이벤트 (click)가 일어나야 실행
        e.preventDefault()
        count--
        if(count<0){count=0} //예외처리 :0에서 prev버튼을 누르면 마이너스 값이 들어가고 +가 되면서 빈 화면이 보이게 됨.
        moveSlider(count)
    })

    //자동 슬라이드 기능
    let timer = setInterval(function(){
        count++
        if(count>4){count=0} 
        moveSlider(count)
    },2000)


    $(".station").mouseover(function(){
        clearInterval(timer)
    })

    $(".station").mouseout(function(){
        timer = setInterval(function(){
        //let timer 을 만들어주면 마우스를 뗄 때마다 위에 정의한 timer기능이 실행됨. 그러므로 let을 지워준다.(지역변수/전역변수)
            count++
            if(count>4){count=0} 
            moveSlider(count)
        },2000)
    })

    function moveSlider(idx){
        // 정의부 부분 -> 실행되지 않음
        $(".train").css("transform","translateX("+( -20*idx)+"%)")
    }
    moveSlider(2)
})
