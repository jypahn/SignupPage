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