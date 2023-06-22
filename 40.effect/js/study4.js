$(document).ready(function(){
    
    let result =""
    // for(let i=1 ; i<=20 ; i++){
    //     result+=`<li>
    //     <img class="small" src="./img/s${artwork[0].imgFileName}"  alt="${art work[0]}"> 
    //     <img class="big" src="./img/pic${i}.jpg" alt="큰이미지${i}">
    //     <h2 class="title">art work ${i}</h2>
    //     <p>Artwork description comes here. <br>2023.06.20 </p>
    //     <span class="btnClose">close</span>
    // </li>`
    // }
    
    for(let i=0 ; i<20 ; i++){
        result+=`<li>
        <img class="small" src="./img/${artwork[i].
        imgFileName}"  alt="${artwork[i].title}"> 
        <h2 class="title">${artwork[i].title}</h2>
        <p>${artwork[i].description}</p>
        <span class="btnClose">close</span>
    </li>`
    }
    
    $(".train").html(result)

    $(".stationMenu>li").click(function(){
        let idx = $(this).index() //클릭한 리스트의 순번을 리턴함.
        count = idx*5 //정해진 순번에 5를 곱한 값을 전역변수 count에 저장함으로써 휠을 내렸을 때 이동되는 기능이 정상적으로 작동되게끔 해주는 코드
        // alert(idx)
        // 01-> 0px
        // 06-> -1000px
        // 11-> -2000px
        // 16-> -3000px
        $(".train").css("transform","translateX("+(-1000*idx)+"px)")
    })

    let count=0;
    //변수가 만들어지는 공간도 중요
    $(".station").on("wheel DOMMouseScroll",function(event){
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){
         delta = E.detail * -40
        }else{
         delta = E.wheelDelta  
        }

        if(delta<0){
         //마우스 휠을 내렸을 때
         count++
         console.log(count)
         if(count>15){count=15}
         $(".train").css("transform","translateX("+(-200*count)+"px)")
        }else{
        //마우스 휠을 올렸을 때
        count--
        console.log(count)
        if(count<0){count=0}
        $(".train").css("transform","translateX("+(-200*count)+"px)")
        }
        return false

    })

    // 클릭한 리스트(기차칸)의 활성화 스타일 기능
    $(".train>li").click(function(){
        $(".train>li").removeClass("on")
        $(this).addClass("on")

        let idx = $(this).index()
        count = idx //동기화시킴
        $(".train").css("transform","translateX("+(-200*idx)+"px)")
    })
    //닫는버튼 기능
    $(".btnClose").click(function(){
        $(".train>li").removeClass("on")
        return false //-> 상위태그로 클릭이벤트가 전달되지않게(버블링되지않게)설정
    })

    //  버블링 -> 자식을 클릭해도 부모가 같이 클릭되는 현상
    //  btnclose를 클릭하는 것은 list전체를 클릭하는 것과 동일하므로
    //  list한테 준 이벤드도 동시에 일어나서 close버튼이 안 눌림 
    //  -> return false을 적어줘서 버블링 현상을 방지
                   
})