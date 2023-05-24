window.onload = function(){
    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes=  document.querySelector(".tabDes")
    let tabDescription = [
        `<h3>title1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tenetur quaerat consectetur blanditiis facilis fugit, accusantium hic quos sint aperiam, voluptate explicabo autem, ipsum praesentium animi aliquam dolore adipisci alias.</p>`,
    `<h3>title2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tenetur quaerat consectetur blanditiis facilis fugit, accusantium hic quos sint aperiam, voluptate explicabo autem, ipsum praesentium animi aliquam dolore adipisci alias.</p>`, 
    `<h3>title3</h3>
    <ul>
        <li>des1</li>
        <li>des2</li>
        <li>des3</li>
        <li>des4</li>
    </ul>`

]

    for(let i=0; i<tabTitles.length; i++){
        tabTitles[i].addEventListener("click",function(){

            for(j=0; j<tabTitles.length; j++){
                tabTitles[j].classList.remove("on")
            }
            this.classList.add("on")
//리스트에 on을 다 지우고 클릭한 리스트에 on을 추가해준다
            tabDes.innerHTML = tabDescription[i]

        })     
    }
}