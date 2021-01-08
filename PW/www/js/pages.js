

    class Post {
        constructor(id, postTitle, postText) {
            this.id = id;
            this.postTitle = postTitle;
            this.postText = postText;
        }
    }

    class Info{
        constructor(){
            this.posts=[];
        }
    
        addPost(id,postTitle,postText){
            var post = new Post(id,postTitle,postText);
            this.posts.push(post);
        }
    }
    
    
    window.onload = function () {
        // Event Listners

        homeShow();
        document.getElementById("home").addEventListener("click", homeShow);
        document.getElementById("games").addEventListener("click", gamesShow);
        document.getElementById("about").addEventListener("click", aboutShow);
        document.getElementById("forum").addEventListener("click", forumShow);
        document.getElementById("suport").addEventListener("click", suportShow);
        document.getElementById("loginLink").addEventListener("click", loginShow);
        document.getElementById("logoutLink").addEventListener("click", logoutFunc);

        /*if(document.cookie != null){
            alert("user");
        }else{
            alert("sem sessao");
        }*/

    }


let text1, text2, text3, text4, text5, text6, text7, text8, text9, textT;


// Functions for Pages

function homeShow(){
    document.getElementById("title").innerText = "Página Principal";

    document.getElementById("body").classList.remove("branco");

    text1 = "<h3>Promoções</h3>";

    


    document.getElementById("div1").classList.remove("t-center");
    document.getElementById("div1").innerHTML = text1;

    var img = document.createElement("img");
    img.src = "images/icons/gamePromotion2.jpg";
    img.setAttribute("width", "300");
    img.setAttribute("height", "200");
    img.style.marginTop = "50px";
    img.style.marginLeft = "70px";

    

    var img2 = document.createElement("img");
    img2.src = "images/icons/gamePromotion.jpg";
    img2.setAttribute("width", "300");
    img2.setAttribute("height", "200");
    img2.style.marginTop = "50px";
    img2.style.marginLeft = "70px";
    

    var img3 = document.createElement("img");
    img3.src = "images/icons/gamePromotion3.jpg";
    img3.setAttribute("width", "300");
    img3.setAttribute("height", "200");
    img3.style.marginTop = "50px";
    img3.style.marginLeft = "70px";


    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    
    table.appendChild(tr);
    table.appendChild(tr2);
        var table1_1 = document.createElement("table");
        var tr1_1 = document.createElement("tr");
        var tr1_2 = document.createElement("tr");
        var td1_1 = document.createElement("td");
        var td1_2 = document.createElement("td");
        tr1_1.appendChild(td1_1);
        tr1_2.appendChild(td1_2);
        table1_1.appendChild(tr1_1);
        table1_1.appendChild(tr1_2);
        td1_1.appendChild(img);

        td1_2.innerHTML = "<br>";
        td1_2.innerHTML = "<br>";

        var NomeJogo = document.createElement("p");
        var text1 = '<h3 class="t-center tit2"> Overwatch </h3>';
        var PrecoAntes = document.createElement("p");
        var text2 = '<div class="w75p"><h4 class="qs"> Preço (Antes): <SPAN STYLE="text-decoration:line-through">9.99 €</SPAN> </h4></div> ';
        
        var PrecoJogo = document.createElement("p");
        var text3 = '<div class="w75p"><h4 class="qs"> Preço (Agora): 4.90 € </h4></div> ';


        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy now!";
        td1_2.innerHTML += text1 + "<br>" + text2 + "<br>" + text3;
        td1_2.appendChild(BotaoJogo);
        table1_1.appendChild(NomeJogo);
        table1_1.appendChild(PrecoAntes);
        table1_1.appendChild(PrecoJogo);
        table1_1.appendChild(BotaoJogo);
        BotaoJogo.setAttribute("onclick", "location.href='https://www.eneba.com/blizzard-overwatch-standard-edition-battle-net-key-global'");


    td.appendChild(table1_1);
    tr.appendChild(td);

        var table2_1 = document.createElement("table");
        var tr2_1 = document.createElement("tr");
        var tr2_2 = document.createElement("tr");
        var td2_1 = document.createElement("td");
        var td2_2 = document.createElement("td");

        tr2_1.appendChild(td2_1);
        tr2_2.appendChild(td2_2);
        table2_1.appendChild(tr2_1);
        table2_1.appendChild(tr2_2);
        td2_1.appendChild(img2);


        td2_2.innerHTML = "<br>";
        td2_2.innerHTML = "<br>";

        var NomeJogo = document.createElement("p");
        var text1 = '<h3 class="t-center tit2"> Red Dead Redemption 2 </h3>';
        var PrecoAntes = document.createElement("p");
        var text2 = '<div class="w75p"><h4 class="qs"> Preço (Antes): <SPAN STYLE="text-decoration:line-through">45.90 €</SPAN> </h4></div> ';
        
        var PrecoJogo = document.createElement("p");
        var text3 = '<div class="w75p"><h4 class="qs"> Preço (Agora): 32.99 € </h4></div> ';


        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy now!";
        td2_2.innerHTML += text1 + "<br>" + text2 + "<br>" + text3;
        td2_2.appendChild(BotaoJogo);
        table2_1.appendChild(NomeJogo);
        table2_1.appendChild(PrecoAntes);
        table2_1.appendChild(PrecoJogo);
        table2_1.appendChild(BotaoJogo);
        BotaoJogo.setAttribute("onclick", "location.href='https://www.eneba.com/rockstar_social_club-red-dead-redemption-2-rockstar-key-global'");


    td2.appendChild(table2_1);
    tr.appendChild(td2);

        var table3_1 = document.createElement("table");
        var tr3_1 = document.createElement("tr");
        var tr3_2 = document.createElement("tr");
        var td3_1 = document.createElement("td");
        var td3_2 = document.createElement("td");

        tr3_1.appendChild(td3_1);
        tr3_2.appendChild(td3_2);
        table3_1.appendChild(tr3_1);
        table3_1.appendChild(tr3_2);
        td3_1.appendChild(img3);

        td3_2.innerHTML = "<br>";
        td3_2.innerHTML = "<br>";

        var NomeJogo = document.createElement("p");
        var text1 = '<h3 class="t-center tit2"> Tekken 7 </h3>';
        var PrecoAntes = document.createElement("p");
        var text2 = '<div class="w75p"><h4 class="qs"> Preço (Antes): <SPAN STYLE="text-decoration:line-through">7.50 €</SPAN> </h4></div> ';
        
        var PrecoJogo = document.createElement("p");
        var text3 = '<div class="w75p"><h4 class="qs"> Preço (Agora): 4.99 € </h4></div> ';


        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy now!";
        td3_2.innerHTML += text1 + "<br>" + text2 + "<br>" + text3;
        td3_2.appendChild(BotaoJogo);
        table3_1.appendChild(NomeJogo);
        table3_1.appendChild(PrecoAntes);
        table3_1.appendChild(PrecoJogo);
        table3_1.appendChild(BotaoJogo);
        BotaoJogo.setAttribute("onclick", "location.href='https://www.eneba.com/steam-tekken-7-steam-key-global'");

        
    td3.appendChild(table3_1);
    tr.appendChild(td3);

    document.getElementById("div1").appendChild(table);

    text2 = "<h3>Jogos Recentes</h3>";

    document.getElementById("div2").classList.remove("t-center");
    document.getElementById("div2").innerHTML = text2;

    var img = document.createElement("img");
    img.src = "images/icons/newGame.jpg";
    img.setAttribute("width", "300");
    img.setAttribute("height", "200");
    img.style.marginTop = "50px";
    img.style.marginLeft = "70px";

    

    var img2 = document.createElement("img");
    img2.src = "images/icons/newGame2.jpg";
    img2.setAttribute("width", "300");
    img2.setAttribute("height", "200");
    img2.style.marginTop = "50px";
    img2.style.marginLeft = "70px";

    var img3 = document.createElement("img");
    img3.src = "images/icons/newGame2.jpg";
    img3.setAttribute("width", "300");
    img3.setAttribute("height", "200");
    img3.style.marginTop = "50px";
    img3.style.marginLeft = "70px";


    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    
    table.appendChild(tr);
    table.appendChild(tr2);
        var table1_1 = document.createElement("table");
        var tr1_1 = document.createElement("tr");
        var tr1_2 = document.createElement("tr");
        var tr1_3 = document.createElement("tr");
        var td1_1 = document.createElement("td");
        var td1_2 = document.createElement("td");
        var td1_3 = document.createElement("td");
        tr1_1.appendChild(td1_1);
        tr1_2.appendChild(td1_2);
        tr1_3.appendChild(td1_3);
        table1_1.appendChild(tr1_1);
        table1_1.appendChild(tr1_2);
        table1_1.appendChild(tr1_3);
        td1_1.appendChild(img);

        td1_2.innerHTML = "<br>";
        td1_2.innerHTML = "<br>";

        var NomeJogo = document.createElement("p");
        var text1 = '<h3 class="t-center tit2"> Need For Speed Heat </h3>';
        
        var PrecoJogo = document.createElement("p");
        var text3 = '<div class="w75p"><h4 class="qs"> Preço: 54.90 € </h4></div> ';


        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy now!";
        td1_2.innerHTML += text1 + "<br>" + text3;
        td1_2.appendChild(BotaoJogo);
        table1_1.appendChild(NomeJogo);
        table1_1.appendChild(PrecoAntes);
        table1_1.appendChild(PrecoJogo);
        table1_1.appendChild(BotaoJogo);
        BotaoJogo.setAttribute("onclick", "location.href='https://www.eneba.com/origin-need-for-speed-heat-origin-key-global'");


    td.appendChild(table1_1);
    tr.appendChild(td);

    var table2_1 = document.createElement("table");
    var tr2_1 = document.createElement("tr");
    var tr2_2 = document.createElement("tr");
    var td2_1 = document.createElement("td");
    var td2_2 = document.createElement("td");

    tr2_1.appendChild(td2_1);
    tr2_2.appendChild(td2_2);
    table2_1.appendChild(tr2_1);
    table2_1.appendChild(tr2_2);


    td2_2.innerHTML = "<br>";
    td2_2.innerHTML = "<br>";

    var NomeJogo = document.createElement("p");
    var text1 = '<h3 style="color: #5e0000;user-select: none;" class="t-center tit2"> Battlefield V Battlefield V </h3>';
    
    var PrecoJogo = document.createElement("p");
    var text3 = '<div  class="w75p"><h4 style="color: #5e0000;user-select: none;" class="qs"> Preço: 49.99 € </h4></div> ';


    td2_2.innerHTML += text1 + "<br>" + text3;
    table2_1.appendChild(NomeJogo);
    table2_1.appendChild(PrecoJogo);


td2.appendChild(table2_1);
tr.appendChild(td2);

        var table3_1 = document.createElement("table");
        var tr3_1 = document.createElement("tr");
        var tr3_2 = document.createElement("tr");
        var td3_1 = document.createElement("td");
        var td3_2 = document.createElement("td");

        tr3_1.appendChild(td3_1);
        tr3_2.appendChild(td3_2);
        table3_1.appendChild(tr3_1);
        table3_1.appendChild(tr3_2);
        td3_1.appendChild(img3);


        td3_2.innerHTML = "<br>";
        td3_2.innerHTML = "<br>";

        var NomeJogo = document.createElement("p");
        var text1 = '<h3 class="t-center tit2"> Battlefield V </h3>';
        
        var PrecoJogo = document.createElement("p");
        var text3 = '<div class="w75p"><h4 class="qs"> Preço: 49.99 € </h4></div> ';


        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy now!";
        td3_2.innerHTML += text1 + "<br>" + text3;
        td3_2.appendChild(BotaoJogo);
        table3_1.appendChild(NomeJogo);
        table3_1.appendChild(PrecoAntes);
        table3_1.appendChild(PrecoJogo);
        table3_1.appendChild(BotaoJogo);
        BotaoJogo.setAttribute("onclick", "location.href='https://www.eneba.com/origin-battlefield-5-origin-key-global'");


    td3.appendChild(table3_1);
    tr.appendChild(td3);

    document.getElementById("div2").appendChild(table);



    document.getElementById("div3").classList.remove("t-center");
    document.getElementById("div3").innerHTML = "";

    if(document.cookie){
        document.getElementById('loginLink').hidden = true;
        document.getElementById('logoutLink').hidden = false;
    }else{
        document.getElementById('loginLink').hidden = false;
        document.getElementById('logoutLink').hidden = true;
    }
}

    function gamesShow(){
        document.getElementById("title").innerText = "Jogos";

        document.getElementById("body").classList.remove("branco");


        //img1.setAttribute("src", "images/icons/games1.jpg");
        //img1.setAttribute("width", "450");
        //img1.setAttribute("height", "320");
        //document.body.appendChild(img1);
        //document.getElementById("div1").innerHTML = document.getElementById(img1);
        //document.getElementById("div1").classList.add("t-center");
        document.getElementById("div1").innerHTML = " ";
        document.getElementById("div2").innerHTML = " ";
        document.getElementById("div3").innerHTML = " ";
      

        var img = document.createElement("img");
        img.src = "images/icons/games1.jpg";
        img.setAttribute("width", "300");
        img.setAttribute("height", "200");
        img.style.marginTop = "50px";
        img.style.marginLeft = "70px";
        

        var img2 = document.createElement("img");
        img2.src = "images/icons/games2.jpg";
        img2.setAttribute("width", "300");
        img2.setAttribute("height", "200");
        img2.style.marginTop = "50px";
        img2.style.marginLeft = "70px";
        

        var img3 = document.createElement("img");
        img3.src = "images/icons/games3.jpg";
        img3.setAttribute("width", "300");
        img3.setAttribute("height", "200");
        img3.style.marginTop = "50px";
        img3.style.marginLeft = "70px";
        

        var img4 = document.createElement("img");
        img4.src = "images/icons/games4.jpg";
        img4.setAttribute("width", "300");
        img4.setAttribute("height", "200");
        img4.style.marginTop = "50px";
        img4.style.marginLeft = "70px";

        var img5 = document.createElement("img");
        img5.src = "images/icons/games5.png";
        img5.setAttribute("width", "300");
        img5.setAttribute("height", "200");
        img5.style.marginTop = "50px";
        img5.style.marginLeft = "70px";


        var img6 = document.createElement("img");
        img6.src = "images/icons/games6.jpg";
        img6.setAttribute("width", "300");
        img6.setAttribute("height", "200");
        img6.style.marginTop = "50px";
        img6.style.marginLeft = "70px";

        


        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var tr2 = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");
        
        table.appendChild(tr);
        table.appendChild(tr2);
            var table1_1 = document.createElement("table");
            var tr1_1 = document.createElement("tr");
            var tr1_2 = document.createElement("tr");
            var td1_1 = document.createElement("td");
            var td1_2 = document.createElement("td");
            tr1_1.appendChild(td1_1);
            tr1_2.appendChild(td1_2);
            table1_1.appendChild(tr1_1);
            table1_1.appendChild(tr1_2);
            td1_1.appendChild(img);

            td1_2.innerHTML = "<br>";
            td1_2.innerHTML = "<br>";

            var NomeJogo = document.createElement("p");
            var text1 = '<h3 class="t-center tit2"> Human Fall Flat </h3>';
            var PrecoJogo = document.createElement("p");
            var text2 = '<div class="w75p"><h4 class="qs">  5.50 € </h4></div> ';

      
            var BotaoJogo = document.createElement("button");
            BotaoJogo.innerHTML = "Detalhes";
            td1_2.innerHTML += text1 + "<br>" + text2;
            td1_2.appendChild(BotaoJogo);
            table1_1.appendChild(NomeJogo);
            table1_1.appendChild(PrecoJogo);
            table1_1.appendChild(BotaoJogo);
            BotaoJogo.addEventListener("click", function(){
                showHUMANFALLFLAT();
            });

        td.appendChild(table1_1);
        tr.appendChild(td);

            var table2_1 = document.createElement("table");
            var tr2_1 = document.createElement("tr");
            var tr2_2 = document.createElement("tr");
            var td2_1 = document.createElement("td");
            var td2_2 = document.createElement("td");

            tr2_1.appendChild(td2_1);
            tr2_2.appendChild(td2_2);
            table2_1.appendChild(tr2_1);
            table2_1.appendChild(tr2_2);
            td2_1.appendChild(img2);


            td2_2.innerHTML = "<br>";
            td2_2.innerHTML = "<br>";

            var NomeJogo = document.createElement("p");
            var text1 = '<h3 class="t-center tit2"> Fifa 20 </h3>';
            var PrecoJogo = document.createElement("p");
            var text2 = '<div class="w75p"><h4 class="qs">  16.99 € </h4></div> ';

      
            var BotaoJogo = document.createElement("button");
            BotaoJogo.innerHTML = "Detalhes";
            td2_2.innerHTML += text1 + "<br>" + text2;
            td2_2.appendChild(BotaoJogo);
            table2_1.appendChild(NomeJogo);
            table2_1.appendChild(PrecoJogo);
            table2_1.appendChild(BotaoJogo);
            BotaoJogo.addEventListener("click", function(){
                showFIFA20();
            });

        td2.appendChild(table2_1);
        tr.appendChild(td2);

            var table2_1 = document.createElement("table");
            var tr2_1 = document.createElement("tr");
            var tr2_2 = document.createElement("tr");
            var td2_1 = document.createElement("td");
            var td2_2 = document.createElement("td");

            tr2_1.appendChild(td2_1);
            tr2_2.appendChild(td2_2);
            table2_1.appendChild(tr2_1);
            table2_1.appendChild(tr2_2);
            td2_1.appendChild(img3);

            td2_2.innerHTML = "<br>";
            td2_2.innerHTML = "<br>";

            var NomeJogo = document.createElement("p");
            var text1 = '<h3 class="t-center tit2"> Grand Theft Auto V </h3>';
            var PrecoJogo = document.createElement("p");
            var text2 = '<div class="w75p"><h4 class="qs">  9.35 € </h4></div> ';

    
            var BotaoJogo = document.createElement("button");
            BotaoJogo.innerHTML = "Detalhes";
            td2_2.innerHTML += text1 + "<br>" + text2;
            td2_2.appendChild(BotaoJogo);
            table2_1.appendChild(NomeJogo);
            table2_1.appendChild(PrecoJogo);
            table2_1.appendChild(BotaoJogo);
            BotaoJogo.addEventListener("click", function(){
                showGTAV();
            });
            
        td3.appendChild(table2_1);
        tr.appendChild(td3);

            var table2_1 = document.createElement("table");
            var tr2_1 = document.createElement("tr");
            var tr2_2 = document.createElement("tr");
            var td2_1 = document.createElement("td");
            var td2_2 = document.createElement("td");

            tr2_1.appendChild(td2_1);
            tr2_2.appendChild(td2_2);
            table2_1.appendChild(tr2_1);
            table2_1.appendChild(tr2_2);
            td2_1.appendChild(img4);

            td2_2.innerHTML = "<br>";
            td2_2.innerHTML = "<br>";

            var NomeJogo = document.createElement("p");
            var text1 = '<h3 class="t-center tit2"> Minecraft </h3>';
            var PrecoJogo = document.createElement("p");
            var text2 = '<div class="w75p"><h4 class="qs">  11.99 € </h4></div> ';

    
            var BotaoJogo = document.createElement("button");
            BotaoJogo.innerHTML = "Detalhes";
            td2_2.innerHTML += text1 + "<br>" + text2;
            td2_2.appendChild(BotaoJogo);
            table2_1.appendChild(NomeJogo);
            table2_1.appendChild(PrecoJogo);
            table2_1.appendChild(BotaoJogo);
            BotaoJogo.addEventListener("click", function(){
                showMINECRAFT();
            });

        td4.appendChild(table2_1);
        tr2.appendChild(td4);

        var table2_1 = document.createElement("table");
            var tr2_1 = document.createElement("tr");
            var tr2_2 = document.createElement("tr");
            var td2_1 = document.createElement("td");
            var td2_2 = document.createElement("td");

            tr2_1.appendChild(td2_1);
            tr2_2.appendChild(td2_2);
            table2_1.appendChild(tr2_1);
            table2_1.appendChild(tr2_2);
            td2_1.appendChild(img5);

            td2_2.innerHTML = "<br>";
            td2_2.innerHTML = "<br>";

            var NomeJogo = document.createElement("p");
            var text1 = '<h3 class="t-center tit2"> Watch Dogs 2 </h3>';
            var PrecoJogo = document.createElement("p");
            var text2 = '<div class="w75p"><h4 class="qs">  9.77 € </h4></div> ';

    
            var BotaoJogo = document.createElement("button");
            BotaoJogo.innerHTML = "Detalhes";
            td2_2.innerHTML += text1 + "<br>" + text2;
            td2_2.appendChild(BotaoJogo);
            table2_1.appendChild(NomeJogo);
            table2_1.appendChild(PrecoJogo);
            table2_1.appendChild(BotaoJogo);
            BotaoJogo.addEventListener("click", function(){
                showWATCHDOGS2();
            });

        td5.appendChild(table2_1);
        tr2.appendChild(td5);

        var table2_1 = document.createElement("table");
            var tr2_1 = document.createElement("tr");
            var tr2_2 = document.createElement("tr");
            var td2_1 = document.createElement("td");
            var td2_2 = document.createElement("td");

            tr2_1.appendChild(td2_1);
            tr2_2.appendChild(td2_2);
            table2_1.appendChild(tr2_1);
            table2_1.appendChild(tr2_2);
            td2_1.appendChild(img6);

            td2_2.innerHTML = "<br>";
            td2_2.innerHTML = "<br>";

            var NomeJogo = document.createElement("p");
            var text1 = '<h3 class="t-center tit2"> Dead by daylight </h3>';
            var PrecoJogo = document.createElement("p");
            var text2 = '<div class="w75p"><h4 class="qs">  4.95 € </h4></div> ';

    
            var BotaoJogo = document.createElement("button");
            BotaoJogo.innerHTML = "Detalhes";
            td2_2.innerHTML += text1 + "<br>" + text2;
            td2_2.appendChild(BotaoJogo);
            table2_1.appendChild(NomeJogo);
            table2_1.appendChild(PrecoJogo);
            table2_1.appendChild(BotaoJogo);
            BotaoJogo.addEventListener("click", function(){
                showDEADBYDAYLIGHT();
            });

        td6.appendChild(table2_1);
        tr2.appendChild(td6);


        document.getElementById("div1").appendChild(table);


        
    }

    function aboutShow(){
        document.getElementById("title").innerText = "Sobre";
        document.getElementById("div1").classList.add("t-center");
        document.getElementById("body").classList.remove("branco");

        {
            text1='<h3 class="t-center tit2">Quem Somos?</h3><div class="w75p"><h4 class="qs">O Gamers Academy é um site onde poderão pesquisar informações à cerca de jogos tais como ';
            text2='conquistas, reviews do jogo, promoções,seguir o progresso de outros e utilizar como Forum onde ';
            text3='podem pedir ajuda, dar dicas e criar Eventos.</h4></div>';

            textT = text1 + text2 + text3;

            document.getElementById("div1").innerHTML = textT;
        }

        {
            text1='<h3 class="t-center tit2">Onde Atuamos?</h3><div class="w75p"><h4 class="qs">Nós atuamos apenas em formato digital (neste site), a nossa intenção é a criação de uma ';
            text2='comunidade de Gaming, principalmente, mas tambem onde haja inter-ajuda entre as varias areas de entretenimento digital e até mesmo projetos pessoais sejam em formato ';
            text3='de hobie ou em trabalho, podendo inclusive e aconselhada a inter-ajuda e "venda" de serviços na plataforma.</h4></div>';

            textT = text1 + text2 + text3;

            document.getElementById("div2").classList.add("t-center");
            document.getElementById("div2").innerHTML = textT;
        }

        {
            document.getElementById("div3").classList.add("t-center");
            document.getElementById("div3").innerHTML = "";
        }
    }

    function forumShow(){

        var post = new Array();

        document.getElementById("title").innerText = "Forum";

        document.getElementById("body").classList.add("branco");

        document.getElementById('div1').innerHTML="";
        document.getElementById('div2').innerHTML="";
        document.getElementById('div3').innerHTML="";

        let xhr = new XMLHttpRequest();

        xhr.open("post","/getposts", true);

        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onreadystatechange = function(){
            if((this.readyState === 4 ) && (this.status === 200 )){
                var response = JSON.parse(xhr.response);
                //console.log(response.length);
                post.length = response.length;
                for(let pub of response){
                    post.push(new Post(pub.postId,pub.postTitle,pub.post));

                    //let id = document.createElement("p");
                    //id.innerText = pub.postId;
                    let titulo = document.createElement("h2");
                    titulo.innerText=pub.postTitle;
                    let texto = document.createElement("h6");
                    texto.innerText=pub.post;
                    //document.getElementById('div1').appendChild(id);
                    document.getElementById('div1').appendChild(titulo);
                    document.getElementById('div1').innerHTML+="<br>";
                    document.getElementById('div1').appendChild(texto);
                    document.getElementById('div1').innerHTML+="<br><br><br>";

                }
                //console.log("post: ",post);
                //console.log("teste: ",post.length);


                //document.getElementById('div1').appendChild(post);

            }
        };

        let btt = document.createElement("button");
        btt.setAttribute("id","bttCriarPost");
        btt.addEventListener("click", createPost);
        btt.innerText="Criar Post";

        if(document.getElementById('loginLink').hidden == true){
            document.getElementById('div2').appendChild(btt);
        }

        xhr.send(); 
    }

    function createPost(){

        let formPost = document.createElement("form");
        let postTitle = document.createElement("input");
        let postText = document.createElement("textarea");
        let postAdicionar = document.createElement("button");

        formPost.setAttribute("method","post");
        formPost.setAttribute("action","/postAdd");
        postTitle.setAttribute("name","postTilte");
        postTitle.setAttribute("placeholder","Titulo do Post");
        postText.setAttribute("type","text");
        postText.setAttribute("name", "postText");
        postText.setAttribute("placeholder","Texto do post");
        postAdicionar.setAttribute("type","submit");
        postAdicionar.innerText = "Adicionar Post";

        formPost.innerHTML += "<span>Titulo do Post: </span>";
        formPost.appendChild(postTitle);
        formPost.innerHTML += "<br><br>";
        formPost.innerHTML += "<span>Texto do Post: </span>";
        formPost.appendChild(postText);
        formPost.innerHTML += "<br><br>";
        formPost.appendChild(postAdicionar);

        document.getElementById("title").innerText = "Forum";

        document.getElementById("body").classList.remove("branco");

        document.getElementById("div1").classList.remove("t-center");
        document.getElementById("div1").innerHTML = ' ';

        document.getElementById("div2").classList.remove("t-center");
        document.getElementById("div2").innerHTML = ' ';

        document.getElementById("div3").classList.remove("t-center");
        document.getElementById("div3").innerHTML = ' ';


        if(document.getElementById('loginLink').hidden == true){
            document.getElementById("div1").innerHTML = '';
            document.getElementById("div1").appendChild(formPost);
         }
    }

    function suportShow(){
        document.getElementById("title").innerText = "Suporte";

        document.getElementById("body").classList.remove("branco");

        text1='<form name="form1" method="POST" action="/ticketSend"><div><label for="Nome"> Nome Completo </label><br><input type = "text" name="nomeCompleto" placeholder="ex: Pedro Ferreira Almeida" style="width:45%;">';
        text2='<br><br></div><div><label for="Email"> Email </label><br><input type="email" name="emailUser" placeholder="ex: teste1234@gmail.com" style="width:45%;"><br><br></div>';
        text3='<label for="Ticket"> Ticket</label><div><select name= "tickets" style="width:45%;"><option> ----------------------------------- </option><option value = "ticketAlteracaoEmail"> Alteração do e-mail </option>';
        text4='<option value = "ticketAlteracaoPass"> Alteração de password </option><option value = "ticketDenuncia"> Denuncia por incomprimento de regras </option>';
        text5='<option value = "ticketMelhorias"> Melhorias ou dicas para melhorar no site </option><option value = "ticketMelhorias"> Review de um/varios jogo/s </option>';
        text6='<option value = "ticketOutro"> Outros </option></select></div><div><br><label for="O que pretende dizer"> O que pretende dizer </label><br>';
        text7='<textarea name="Comentario" rows= "10" cols="40" maxlength="500" placeholder="Escreva aqui o que prentede falar connosco..." required style="width:45%;"></textarea><br><br>';
        text8='<input type = "submit" value = "Enviar ticket" name="Enviar"></div></form>';

        textT=text1+text2+text3+text4+text5+text6+text7+text8;

        document.getElementById("div1").classList.add("t-center");
        document.getElementById("div1").innerHTML = textT;

        document.getElementById("div2").classList.remove("t-center");
        document.getElementById("div2").innerHTML = '';

        document.getElementById("div3").classList.remove("t-center");
        document.getElementById("div3").innerHTML = '';
    }

    function loginShow(){
       document.getElementById("title").innerText = "";

       document.getElementById("body").classList.add("branco");



        let form = document.createElement("form");
        let user = document.createElement("input");
        let pass = document.createElement("input");
        let login = document.createElement("button");

        form.setAttribute("name", "login");
        form.setAttribute("method", "post");
        form.setAttribute("action","/login");

        user.setAttribute("type", "text");
        user.setAttribute("name", "user");
        user.setAttribute("placeholder", "Username");

        pass.setAttribute("type", "password");
        pass.setAttribute("name", "pass");
        pass.setAttribute("placeholder", "Password");

        login.setAttribute("type", "submit");
        login.setAttribute("name", "Login");
        login.setAttribute("onclick", "");
        login.innerText = "Login";

        form.innerHTML += "<h2>Login</h2>";
        form.innerHTML += "<br>";
        form.innerHTML += "Username:\xa0";
        form.appendChild(user);
        form.innerHTML += "<br><br>";
        form.innerHTML += "Password:\xa0";
        form.appendChild(pass);
        form.innerHTML += "<br><br>";
        form.appendChild(login);


        

        document.getElementById("div1").classList.remove("t-center");
        document.getElementById("div1").innerHTML= '';
        document.getElementById("div1").appendChild(form);





        let form1 = document.createElement("form");
        let user1 = document.createElement("input");
        let pass1 = document.createElement("input");
        let pass2 = document.createElement("input");
        let nome1 = document.createElement("input");
        let dataN = document.createElement("input");
        let signup = document.createElement("button");

        form1.setAttribute("name", "register");
        form1.setAttribute("action","/register");
        form1.setAttribute("method","post");

        nome1.setAttribute("type", "text");
        nome1.setAttribute("name", "nome");
        nome1.setAttribute("placeholder", "Nome");

        user1.setAttribute("type", "text");
        user1.setAttribute("name", "user1");
        user1.setAttribute("id", "userSign");
        user1.setAttribute("placeholder", "Username");

        pass1.setAttribute("type", "password");
        pass1.setAttribute("name", "pass2");
        pass1.setAttribute("id", "passSign1");
        pass1.setAttribute("placeholder", "Password");

        pass2.setAttribute("type", "password");
        pass2.setAttribute("name", "pass3");
        pass2.setAttribute("id", "passSign2");
        pass2.setAttribute("placeholder", "Password");

        dataN.setAttribute("type", "date");
        dataN.setAttribute("name", "dataN");
        dataN.setAttribute("id", "dataN");
        dataN.setAttribute("placeholder", "Data de Nascimento");

        signup.setAttribute("type", "submit");
        signup.setAttribute("name", "signup");
        signup.setAttribute("onclick", "");
        signup.innerText = "Registar";

        form1.innerHTML += "<h2>Register</h2>";
        form1.innerHTML += "<br>";
        form1.innerHTML += "Nome:\xa0";
        form1.appendChild(nome1);
        form1.innerHTML += "<br><br>";
        form1.innerHTML += "Username:\xa0";
        form1.appendChild(user1);
        form1.innerHTML += "<br><br>";
        form1.innerHTML += "Password:\xa0";
        form1.appendChild(pass1);
        form1.innerHTML += "<br><br>";
        form1.innerHTML += "Confirmar Password:\xa0";
        form1.appendChild(pass2);
        form1.innerHTML += "<br><br>";
        form1.innerHTML += "Data de Nascimento:\xa0";
        form1.appendChild(dataN);
        form1.innerHTML += "<br><br>";
        form1.appendChild(signup);


        document.getElementById("div2").classList.remove("t-center");
        document.getElementById("div2").innerHTML = '';
        document.getElementById("div2").appendChild(form1);

        document.getElementById("div3").classList.remove("t-center");
        document.getElementById("div3").innerHTML = '';
    }

    function logoutFunc(){
        let form = document.createElement("form");

        form.setAttribute("method","post");
        form.setAttribute("action","/deleteCookies");
        document.body.appendChild(form);
        form.submit();
    }


    function showGTAV(){
        document.getElementById("title").innerText = "GTA V";

        document.getElementById("body").classList.remove("branco");

            document.getElementById("div1").classList.add("t-center");

            document.getElementById("div1").classList.add("t-center");
            document.getElementById("div1").innerHTML = '';

            document.getElementById("div2").classList.remove("t-center");
            document.getElementById("div2").innerHTML = '';

            document.getElementById("div3").classList.remove("t-center");
            document.getElementById("div3").innerHTML = '';


            var imgGTA = document.createElement("img");
            imgGTA.src = "images/icons/games3.jpg";
            imgGTA.setAttribute("width", "300");
            imgGTA.setAttribute("height", "200");

            div1.appendChild(imgGTA);

            div1.innerHTML += "<br>";
            div1.innerHTML += "<br>";

        
            var text2 ='<h3 class="t-center tit2"> Publicadora </h3><div class="w75p"><h4 class="qs">  Rockstar Games </h4></div> ';
            var text3 = '<h3 class="t-center tit2"> Sinopse </h3><div class="w75p"><h4 class="qs">  Grand Theft Auto V é um jogo eletrônico de ação-aventura. É o sétimo título principal da série Grand Theft Auto e foi lançado originalmente em 17 de setembro de 2013 para PlayStation 3 e Xbox 360, com remasterizações lançadas em 2014 para PlayStation 4 e Xbox One, em 2015 para Microsoft Windows e em 2021 para PlayStation 5 e Xbox Series X. O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas. </h4></div> ';
            
            var BotaoJogo = document.createElement("button");
            BotaoJogo.innerHTML = "Buy Now";
            BotaoJogo.setAttribute("onclick","location.href='https://www.eneba.com/rockstar_social_club-grand-theft-auto-v-premium-online-edition-rockstar-social-club-key-global';");

        
            div1.innerHTML += text2 + "<br>";
            div1.innerHTML += text3 + "<br>";
            
            div1.appendChild(BotaoJogo);

        }        

    function showFIFA20(){
        document.getElementById("title").innerText = "FIFA 20";

        document.getElementById("body").classList.remove("branco");

        document.getElementById("div1").classList.add("t-center");

        document.getElementById("div1").classList.add("t-center");
        document.getElementById("div1").innerHTML = '';

        document.getElementById("div2").classList.remove("t-center");
        document.getElementById("div2").innerHTML = '';

        document.getElementById("div3").classList.remove("t-center");
        document.getElementById("div3").innerHTML = '';


        var imgFIFA = document.createElement("img");
        imgFIFA.src = "images/icons/games2.jpg";
        imgFIFA.setAttribute("width", "300");
        imgFIFA.setAttribute("height", "200");

        div1.appendChild(imgFIFA);

        div1.innerHTML += "<br>";
        div1.innerHTML += "<br>";

        
        var text2 ='<h3 class="t-center tit2"> Publicadora </h3><div class="w75p"><h4 class="qs">  EA Sports </h4></div> ';
        var text3 = '<h3 class="t-center tit2"> Sinopse </h3><div class="w75p"><h4 class="qs">  FIFA 20 é um jogo eletrônico de futebol desenvolvido e publicado pela EA Sports, lançado mundialmente em 19 de setembro de 2019. Este é o vigésimo sétimo título da série FIFA e o quarto a usar o mecanismo de jogo da Frostbite para Xbox One, PS4 e PC </h4></div> ';
        
        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy Now";
        BotaoJogo.setAttribute("onclick","location.href='https://www.eneba.com/origin-fifa-20-origin-key-global?gclid=CjwKCAjwltH3BRB6EiwAhj0IUFjEX9--b1mz3FAFIHFrGFc81HeQemvrvz2FB6r4NXN7CsHflC3JvRoC_QoQAvD_BwE';");
        

        
        div1.innerHTML += text2 + "<br>";
        div1.innerHTML += text3 + "<br>";
        
        div1.appendChild(BotaoJogo);

    }    

    function showMINECRAFT(){
        document.getElementById("title").innerText = "MINECRAFT";

        document.getElementById("body").classList.remove("branco");

        document.getElementById("div1").classList.add("t-center");

        document.getElementById("div1").classList.add("t-center");
        document.getElementById("div1").innerHTML = '';

        document.getElementById("div2").classList.remove("t-center");
        document.getElementById("div2").innerHTML = '';

        document.getElementById("div3").classList.remove("t-center");
        document.getElementById("div3").innerHTML = '';


        var imgMINECRAFT = document.createElement("img");
        imgMINECRAFT.src = "images/icons/games4.jpg";
        imgMINECRAFT.setAttribute("width", "300");
        imgMINECRAFT.setAttribute("height", "200");

        div1.appendChild(imgMINECRAFT);

        div1.innerHTML += "<br>";
        div1.innerHTML += "<br>";

        
        var text2 ='<h3 class="t-center tit2"> Publicadora </h3><div class="w75p"><h4 class="qs">  Mojang </h4></div> ';
        var text3 = '<h3 class="t-center tit2"> Sinopse </h3><div class="w75p"><h4 class="qs">  Minecraft é um jogo eletrônico sandbox de sobrevivência, os jogadores exploram um mundo aberto tridimensional intencionalmente em blocos, pixelizado e gerado proceduralmente, podendo descobrir e extrair matérias-primas, ferramentas artesanais, construir estruturas ou terraplanagens e, dependendo do modo de jogo, podem combater inimigos controlados por computador, bem como cooperar ou competir contra outros jogadores no mesmo mundo. Esses modos incluem um modo sobrevivência, no qual o jogador precisa adquirir recursos para construir o mundo e se manter vivo, e um modo criativo, onde os jogadores têm recursos ilimitados. Em Java Edition, os jogadores podem modificar o jogo com mods para criar novas mecânicas de jogo, itens, texturas, entre outros.</h4></div> ';
        
        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy Now";
        BotaoJogo.setAttribute("onclick","location.href='https://www.eneba.com/other-minecraft-official-website-key-global?gclid=CjwKCAjwltH3BRB6EiwAhj0IUJf0EFOfd1WOVWIZ-aly1dXwHNQuFCSmiyA559-g0537qQL4Xw9RCRoCU68QAvD_BwE';");
        

        
        
        div1.innerHTML += text2 + "<br>";
        div1.innerHTML += text3 + "<br>";
        
        div1.appendChild(BotaoJogo);

    }    

    function showHUMANFALLFLAT(){
        document.getElementById("title").innerText = "HUMAN FALL FLAT";

        document.getElementById("body").classList.remove("branco");

        document.getElementById("div1").classList.add("t-center");

        document.getElementById("div1").classList.add("t-center");
        document.getElementById("div1").innerHTML = '';

        document.getElementById("div2").classList.remove("t-center");
        document.getElementById("div2").innerHTML = '';

        document.getElementById("div3").classList.remove("t-center");
        document.getElementById("div3").innerHTML = '';


        var imgHuman = document.createElement("img");
        imgHuman.src = "images/icons/games1.jpg";
        imgHuman.setAttribute("width", "300");
        imgHuman.setAttribute("height", "200");

        div1.appendChild(imgHuman);

        div1.innerHTML += "<br>";
        div1.innerHTML += "<br>";

        
        var text2 ='<h3 class="t-center tit2"> Publicadora </h3><div class="w75p"><h4 class="qs">  Curve Digital </h4></div> ';
        var text3 = '<h3 class="t-center tit2"> Sinopse </h3><div class="w75p"><h4 class="qs"> Human: Fall Flat é um jogo eletrônico de quebra-cabeça, os jogadores controlam um boneco com uma física cômica, chamado no jogo de Bob, onde temos que passar de diversos cenários, tendo cada um, um quebra-cabeça diferente com um meio para resolver. Para solucionar cada quebra-cabeça, podemos fazer Bob pegar, levantar, puxar, empurrar e soltar objetos como por exemplo em um cenário que é possível pegar um extintor e usá-lo para partir um vidro, subir em diferentes bordas de estruturas do cenário e até mesmo fazê-lo ficar agarrado no chão ou em paredes com suas mãos. Embora a aparência padrão de Bob seja um boneco branco, minimalista e sem característica, com um boné de beisebol, os jogadores podem personalizá-lo ao seu gosto, pintando seu corpo e vestindo-o com uma variedade diferente de cores e roupas.</h4></div> ';
        
        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy Now";
        BotaoJogo.setAttribute("onclick","location.href='https://www.eneba.com/steam-human-fall-flat-steam-key-global?gclid=CjwKCAjwltH3BRB6EiwAhj0IUCNw3c5-ar82csKPuQeBes38ZTsAvwoUlz8-JDpBndb5pdjDXScrNBoCAKgQAvD_BwE';");

        
        
        div1.innerHTML += text2 + "<br>";
        div1.innerHTML += text3 + "<br>";
        
        div1.appendChild(BotaoJogo);

    }      

    function showDEADBYDAYLIGHT(){
        document.getElementById("title").innerText = "DEAD BY DAYLIGHT";

        document.getElementById("body").classList.remove("branco");

        document.getElementById("div1").classList.add("t-center");

        document.getElementById("div1").classList.add("t-center");
        document.getElementById("div1").innerHTML = '';

        document.getElementById("div2").classList.remove("t-center");
        document.getElementById("div2").innerHTML = '';

        document.getElementById("div3").classList.remove("t-center");
        document.getElementById("div3").innerHTML = '';


        var imgDead = document.createElement("img");
        imgDead.src = "images/icons/games6.jpg";
        imgDead.setAttribute("width", "300");
        imgDead.setAttribute("height", "200");

        div1.appendChild(imgDead);

        div1.innerHTML += "<br>";
        div1.innerHTML += "<br>";

        
        var text2 ='<h3 class="t-center tit2"> Publicadora </h3><div class="w75p"><h4 class="qs">  Behavior interactive </h4></div> ';
        var text3 = '<h3 class="t-center tit2"> Sinopse </h3><div class="w75p"><h4 class="qs"> Dead by Daylight é um jogo de terror e de sobrevivência assimétrico multijogador. Como sobrevivente, é possível jogar sozinho ou com amigos para enfrentar um assassino desconhecido. Sobreviventes podem usar itens, habilidades desbloqueadas e objetos do ambiente para enganar o assassino e escapar do seu território. Colocados em mapas processualmente gerados, os objetos do mundo são gerados aleatoriamente, sendo assim, não é possível saber o que está enfrentando e como fugir. Toda decisão afeta suas chances de sobrevivência. Cada sobrevivente tem três habilidades exclusivas que lhe dará uma vantagem ao decorrer da partida. Mais tarde, essas habilidades exclusivas podem ser desbloqueadas em outros sobreviventes. Itens também lhe dão vantagens na partida; com uma lanterna, por exemplo, você pode cegar o assassino para o perder de vista. É possível adquirir itens como lanternas, caixa de ferramentas e caixa de primeiros socorros encontrando-os em baús ou adquirindo com pontos de sangue na teia de sangue.</h4></div> ';
        
        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy Now";
        BotaoJogo.setAttribute("onclick","location.href='https://www.eneba.com/steam-dead-by-daylight-steam-key-global';");

        
        
        div1.innerHTML += text2 + "<br>";
        div1.innerHTML += text3 + "<br>";
        
        div1.appendChild(BotaoJogo);

    }    


    function showWATCHDOGS2(){
        document.getElementById("title").innerText = "WATCH DOGS 2";

        document.getElementById("body").classList.remove("branco");

        document.getElementById("div1").classList.add("t-center");

        document.getElementById("div1").classList.add("t-center");
        document.getElementById("div1").innerHTML = '';

        document.getElementById("div2").classList.remove("t-center");
        document.getElementById("div2").innerHTML = '';

        document.getElementById("div3").classList.remove("t-center");
        document.getElementById("div3").innerHTML = '';


        var imgWatchDogs = document.createElement("img");
        imgWatchDogs.src = "images/icons/games5.png";
        imgWatchDogs.setAttribute("width", "300");
        imgWatchDogs.setAttribute("height", "200");

        div1.appendChild(imgWatchDogs);

        div1.innerHTML += "<br>";
        div1.innerHTML += "<br>";

        
        var text2 ='<h3 class="t-center tit2"> Publicadora </h3><div class="w75p"><h4 class="qs">  Ubisoft </h4></div> ';
        var text3 = '<h3 class="t-center tit2"> Sinopse </h3><div class="w75p"><h4 class="qs"> Watch Dogs 2 é um jogo de mundo aberto, e através do personagem Marcus Holloway, dá ao jogador a possibilidade de hackear e controlar quase tudo que se conecte com a internet, desde celulares até satélites. O sistema de jogo é livre, muito embora haja missões pré definidas e outras que o jogador pode achar pelo caminho, ao explorar o mundo. O jogo dá liberdade total ao jogador para avançar pelo game tanto de forma furtiva quanto usando todos os tipos de armas letais contra qualquer um que se colocar no seu caminho. O personagem também pode correr sobre telhados, invadir sistemas vitais, controlar satélites, interferir em perseguições de carro, espionar dispositivos móveis e realizar diversas outras ações. Toda atividade realizada contará para o progresso do jogo, e adicionará pontos de experiência, os quais poderão ser utilizados para melhorar habilidades específicas do personagem, e até mesmo ações consideradas pequenas podem se mostrar úteis para que o protagonista consiga concluir seu objetivo.</h4></div> ';
        
        var BotaoJogo = document.createElement("button");
        BotaoJogo.innerHTML = "Buy Now";
        BotaoJogo.setAttribute("onclick","location.href='https://www.eneba.com/uplay-watch-dogs-2-uplay-key-emea';");

        
        
        div1.innerHTML += text2 + "<br>";
        div1.innerHTML += text3 + "<br>";
        
        div1.appendChild(BotaoJogo);

    }    