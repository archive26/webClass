function Dog(dogName,dogAge){
    this.name = dogName
    this.age = dogAge
    this.feel = Math.floor(Math.random()*3) 
    this.say = function(){
        if(this.feel==0){
            document.write(`멍멍! 나는 ${this.name}다! 기분이가 좋다! <br>`)
        }else if(this.feel==1){
            document.write(`${this.name}는 오늘 심심하군 머 먹을거 없나~ 멍멍!!!<br>`)
        }else {
            document.write(`${this.name}는 오늘 굉장히 화가난다 와아아오랑<br>`)
        }            
    }
} 
  






// let dog1 = new Dog("뽀삐",2)
// let dog2 = new Dog("흰둥이",4)
//아래의 식과 같다.
// let dog1 = {
//     name : "뽀삐",
//     age : 2,
//     say : function(){
//         document.write("멍멍!")
//     }
// }
// let dog2 = {
//     name : "흰둥이",
//     age : 4,
//     say :function(){
//         document.write("멍멍!")
//     }
// } 