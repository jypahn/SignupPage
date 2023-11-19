let phoneCheck = false

const regist = () => {
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let password2 = document.getElementById("password2").value
    let location = document.getElementById("location").value
    let female = document.getElementById("female").checked
    let male = document.getElementById("male").checked

    let valid = true


    if(email.includes("@") === false){
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        valid = false
    }else{
        document.getElementById("error__email").innerText=""
    }

    if(name === ""){
        document.getElementById("error__name").innerText="이름을 입력해주세요."
        valid = false
    }else{
        document.getElementById("error__name").innerText=""
    }

    if(password === ""){
        document.getElementById("error__pw").innerText="비밀번호를 입력해주세요."
        valid = false
    }else{
        document.getElementById("error__pw").innerText=""
    }

    if(password2 !== password || password2 === ""){
        document.getElementById("error__pw2").innerText="비밀번호가 일치하지 않습니다."
        valid = false
    }else{
        document.getElementById("error__pw2").innerText=""
    }

    if(phoneCheck === false){
        alert("휴대폰 인증을 해주세요.")
        valid = false
    }else{

    }

    if(location === "지역을 선택하세요."){
        document.getElementById("error__location").innerText="지역을 선택해주세요."
        valid = false
    }else{
        document.getElementById("error__location").innerText=""
    }

    if(female === false && male === false){
        document.getElementById("error__gender").innerText="성별을 선택해주세요."
        valid = false
    }else{
        document.getElementById("error__gender").innerText=""

    }

    if(valid === true ){
        alert("가입이 완료되었습니다.")
    }
}
 const changeFocus = () =>{

    let phone1 = document.getElementById("phone1").value
    let phone2 = document.getElementById("phone2").value
    let phone3 = document.getElementById("phone3").value

    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }
    
    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }

 }


 const changeFocus2 = () =>{

    let phone1 = document.getElementById("phone1").value
    let phone2 = document.getElementById("phone2").value
    let phone3 = document.getElementById("phone3").value

    if(phone1.length === 3 && phone2.length === 4 && phone3.length ===4){
        document.getElementById("sendnumbtn").removeAttribute("disabled")
        document.getElementById("sendnumbtn").style = 'color: #0068FF;border: 1px solid #D2D2D2; background-color: white;'
    }else{
        document.getElementById("sendnumbtn").style = 'color: black;border: 1px solid #D2D2D2; background-color: gray;'
        document.getElementById("sendnumbtn").disabled = true

    }
    
 }


 const sendNum = () => {
    let phone1 = document.getElementById("phone1").value
    let phone2 = document.getElementById("phone2").value
    let phone3 = document.getElementById("phone3").value

    if(phone1 !== "" && phone2 !== "" && phone3 !== ""){
            document.getElementById("phone1").readOnly = true
            document.getElementById("phone2").readOnly = true
            document.getElementById("phone3").readOnly = true

            document.getElementById("checkbtn").style = 'color: white; border: 1px solid #0068FF; background-color: #0068FF;'

            let number = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
            document.getElementById("sendnum").innerText = number
            document.getElementById("checkbtn").removeAttribute("disabled")
            getTimer()
    }


 }

 let isStarted = false;
 let timer;

 const getTimer = () =>{

    if(isStarted === false){
        isStarted = true
        let time = 5
    
        timer  = setInterval(() =>{
            if(time>=0){
                let hour = String(Math.floor(time / 60)).padStart(2,"0")
                let min = String(Math.floor(time % 60)).padStart(2,"0")
                time -= 1
                document.getElementById("timer").innerText = `${hour}:${min}`
            
            }else{
                document.getElementById("checkbtn").disabled = true
                isStarted = false
                clearInterval(timer)
            }
        },1000)
    }else{
        clearInterval(timer)
        time = 5
        timer  = setInterval(() =>{
            if(time>=0){
                let hour = String(Math.floor(time / 60)).padStart(2,"0")
                let min = String(Math.floor(time % 60)).padStart(2,"0")
                time -= 1
                document.getElementById("timer").innerText = `${hour}:${min}`
            
            }else{
                document.getElementById("checkbtn").disabled = true
                isStarted = false
                clearInterval(timer)
            }
        },1000)
    }

 }

 const checkNum = () =>{
    clearInterval(timer)
    document.getElementById("sendnum").innerText = '인증 완료'
    document.getElementById("timer").innerText = `00:00`
    document.getElementById("checkbtn").disabled = true
    alert("인증이 완료되었습니다.")
    document.getElementById("sendnumbtn").disabled = true
    phoneCheck = true
}