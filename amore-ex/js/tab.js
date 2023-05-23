window.onload=function(){
    function tab(classname){
        let tab = document.querySelectorAll("."+classname+">dt")
        for(let i = 0 ; i<tab.length ; i++){
            tab[i].addEventListener("click", function(){
                for(let j=0 ; j<tab.length ; j++){
                    tab[j].classList.remove("on")    
                }
                this.classList.add("on")
            })    
        }
    }
    tab("tabmenu")
    tab("bannertabmenu")
    //정의하는 부분은 onload 안에 들어갈 필요 x 
}
