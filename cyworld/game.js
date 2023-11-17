let start = () =>{
    let word = document.getElementById("word").innerText
    let myword = document.getElementById("myword").value

    if(myword[0] === word[word.length - 1]){
        document.getElementById("result").innerText = "정답입니다."
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""

    }else{
        document.getElementById("result").innerText = "오답입니다."
        document.getElementById("myword").value = ""

    }
}

const createnum = () => {
    let lotto = [];
    while(lotto.length < 6){
    let num = Math.floor(Math.random()*45+1)
    if(lotto.indexOf(num) == -1){
        lotto.push(num)
      }
    }
    lotto.sort((a,b)=>a-b);

    document.getElementById("lotto__num1").innerText = lotto[0]
    document.getElementById("lotto__num2").innerText = lotto[1]
    document.getElementById("lotto__num3").innerText = lotto[2]
    document.getElementById("lotto__num4").innerText = lotto[3]
    document.getElementById("lotto__num5").innerText = lotto[4]
    document.getElementById("lotto__num6").innerText = lotto[5]
}