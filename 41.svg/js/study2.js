$(document).ready(function(){

    $(".btn").click(function(){
        if($(this).parent().hasClass("on")==false){
            $(this).parent().addClass("on")
            // let per = $(this).parent().children("figure").children(".per").text()
            let per = Number($(this).parent().find(".per").text()) 
            //.find는 자식 단위의 클래스로 가기위해 .children을 눌러서 찾을 필요 없이
            // 한번에 직접 그 클래스를 지정해주는 메서드. 자식포함 자손
            let circle = $(this).parent().find("circle")
            
    
            let percentTag = $(this).parent().find(".per")
            let count = 0;
            let timer = setInterval(function(){
                count++
                percentTag.text(count+"%")
                circle.css("stroke-dashoffset",314 - (314*(count/100)))
                if(count>=per){
                    clearInterval(timer)
                }
            },30)
        }
       
    })

})