    window.onload = function () {

        let bannerDT = document.querySelectorAll(".bannerTabmenu>dt")
        for (let i = 0; i < bannerDT.length; i++) {
          bannerDT[i].addEventListener("click", function () {
            for (let k = 0; k < bannerDT.length; k++) {
              bannerDT[k].classList.remove("on")
            }
            this.classList.add("on")
          })
        }
      
      
        let tapDT = document.querySelectorAll(".tabMenu>dt")
        for (let i = 0; i < tapDT.length; i++) {
          tapDT[i].addEventListener("click", function () {
            for (let k = 0; k < tapDT.length; k++) {
              tapDT[k].classList.remove("on")
            }
            this.classList.add("on")
          })
        }
      
      }
      
      