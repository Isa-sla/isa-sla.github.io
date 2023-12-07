const btn = document.querySelector(".btn");

const currentTheme = localStorage.getItem("theme");
if(currentTheme == "dark"){
    document.body.classList.add("dark");
}

btn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");

    let theme = "light";
    if(document.body.classList.contains("dark")){
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
})
let pt =0;
resposta = (pontos, questao) => {
    pt+=pontos;
    if(questao==1){
        document.getElementById("um").style.display = 'none';
        document.getElementById("dois").style.display = 'block';
    }
    if(questao==2){
        document.getElementById("dois").style.display = 'none';
        document.getElementById("tres").style.display = 'block';
    }
    if(questao==3){
        document.getElementById("tres").style.display = 'none';
        document.getElementById("quatro").style.display = 'block';
    }
    if(questao==4){
        document.getElementById("quatro").style.display = 'none';
        document.getElementById("resultado").style.display = 'block';
        if(pt<=30){
            document.getElementById("resultadofinal").innerHTML ="<img src='https://th.bing.com/th/id/R.b2e516fe39946c1315a81636d570d3c0?rik=ycWrJHmVO%2bKR4g&pid=ImgRaw&r=0' style='width: 40%; height: 10%; border-radius: 20px; margin-left:30%;' /> <br/><br/> <p align='center'> Você seria o Tutancâmon! </p> <p align='center'> Ele era muito sábio, ampliou cada vez mais seu domínio e seu poder e morreu muito rico. </p>";
        }
        else if(pt>30 && pt<=80){
            document.getElementById("resultadofinal").innerHTML = "<img src='https://th.bing.com/th/id/R.51353f1004362e98dbb2942beecde906?rik=YgdYD%2fQdth8hmA&pid=ImgRaw&r=0' style='width: 40%; height: 10%; border-radius: 20px;margin-left:30%;' /> <br/><br/> <p align='center'> Você seria a Hatshpsut! </p> <p align='center'> Ela teve um reinado muito bem sucedido, estabeleceu a paz no Egito e fez muitos ícones arquitetônicos. </p>";
        }
        else if(pt>80){
            document.getElementById("resultadofinal").innerHTML = "<img src='https://i.pinimg.com/474x/59/d6/d2/59d6d29b6ab453b23960c24804ccf6f3--akhenaton-ancient-artifacts.jpg' style='width: 40%; height: 10%; border-radius: 20px;margin-left:30%;' /> <br/><br/> <p align='center'> Você seria o Akhenaton! </p> <p align='center'> Ele foi muito importante e gerou um novo estilo artístico e arquitetônico, teve uma cidade nova inteira para ele e mudou toda a história do Egito, mas por ter feito tudo isso, foi assassinado </p>";
        }
    }
    
}

$("#jn").addEventListener('click', reseta = () =>{
    $("#resultado").style.display = 'none';
})