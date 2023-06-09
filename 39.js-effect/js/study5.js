$(document).ready(function(){

    let count = 0;
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
