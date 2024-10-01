const btn = document.querySelectorAll("section.container_btns div.btn");
let btnReset ;

const rules = () => {
    const btnRules = document.querySelector('div.btn_rules');
    const btnClose = document.querySelector('div.rules div.close');
    const divRules = document.querySelector('div.rules');

    const showRules = () => {
        divRules.style.display = "flex";
    }

    const closeRules = () => {
        divRules.style.display = "none";
    }

    btnRules.addEventListener('click', showRules)
    btnClose.addEventListener('click', closeRules)
}
rules();

const jokenpo = () => {
    const btn = document.querySelectorAll("section.container_btns div.btn");

    const game = (btns) => {
        
        const btn = btns;
        const secBtn = document.querySelector("section.container_btns");
        secBtn.remove()

        show(btn);
    };

    btn.forEach((btn) => {
        btn.addEventListener("click",() => {
            game(btn)
        }) ;
    });

    
};

jokenpo();

const show = (btn) => {
    
    const secGame = `<section class="game">
            <div class="box_btn player_pick" id="player">
                
                <span>you picked</span>
            </div>
            <div class="box_btn home_pick">
                <div class="circle">
                </div>
                <span>the house picked</span>
            </div>
        </section> `;
    const headerCont = document.querySelector("header.content");
    headerCont.insertAdjacentHTML("afterend", secGame);

    
    playerPick(btn);
    
};

const playerPick = (btn) => {

    const divBox =  document.querySelector("section.game div.player_pick");
    divBox.insertAdjacentElement("afterbegin", btn);

    homePick();
}


const homePick = () => {
    const divHomePick = document.querySelector("section.game div.home_pick");
    const divCircle = document.querySelector("section.game div.home_pick div.circle");

    const playerBtn = document.querySelector("section.game div.player_pick div.btn");
    const clone = playerBtn.cloneNode(true);

    const option = Math.floor(Math.random() * 3);
    const listBtn = [];
    
    btn.forEach((b) => {
        listBtn.push(b);
    });

    const homePickBtn =  listBtn[option];
    
    setTimeout(() => {     
            if(playerBtn === homePickBtn) {
                const divBox =  document.querySelector("section.game div.player_pick");
                divBox.insertAdjacentElement("afterbegin", clone);

                divCircle.remove();
                divHomePick.insertAdjacentElement("afterbegin", homePickBtn);
            } else {
                divCircle.remove();;
                divHomePick.insertAdjacentElement("afterbegin", homePickBtn);
            }
    }, 1000);

    resultGame(playerBtn, homePickBtn)
};

const resultGame = (playerBtn, homePickBtn) => {
    const btnPlayer = playerBtn;
    const btnHome = homePickBtn;
    const secGame = document.querySelector("section.game");
    const score = document.querySelector('div.score p');
    const qntSocre = +score.innerText
    
    const win = `
            <div class="result">
                <h1>You Win</h1>
                <div class="btn_reset">Play again</div>
            </div>
        `
    const lose = `
            <div class="result">
                <h1>You Lose</h1>
                <div class="btn_reset">Play again</div>
            </div>
        `
    const draw = `
            <div class="result">
                <h1>Draw</h1>
                
                <div class="btn_reset">Play again</div>
            </div>
        `

    setTimeout(() => {     
        if (btnPlayer.classList[1] === "paper" && btnHome.classList[1] === "rock" ) {
            secGame.insertAdjacentHTML("afterend", win);
            score.innerHTML = qntSocre + 1
            btnReset = document.querySelector("div.result div.btn_reset");
            btnReset.addEventListener("click", resetGame);
            
    
        } else if (btnPlayer.classList[1] === "paper" && btnHome.classList[1] === "scissors") {
            secGame.insertAdjacentHTML("afterend", lose);
            qntSocre === 0 ? "": score.innerHTML = qntSocre - 1
            btnReset = document.querySelector("div.result div.btn_reset");
            btnReset.addEventListener("click", resetGame);
            
    
        } else if (btnPlayer.classList[1] === "paper" && btnHome.classList[1] === "paper") {
            secGame.insertAdjacentHTML("afterend", draw);
            btnReset = document.querySelector("div.result div.btn_reset");
            btnReset.addEventListener("click", resetGame);
    
        } else if (btnPlayer.classList[1] === "rock" && btnHome.classList[1] === "paper") {
            secGame.insertAdjacentHTML("afterend", lose);
            qntSocre === 0 ? "": score.innerHTML = qntSocre - 1
            btnReset = document.querySelector("div.result div.btn_reset");
            btnReset.addEventListener("click", resetGame);
    
        } else if (btnPlayer.classList[1] === "rock" && btnHome.classList[1] === "scissors") {
            secGame.insertAdjacentHTML("afterend", win);
            score.innerHTML = qntSocre + 1
            btnReset = document.querySelector("div.result div.btn_reset");
            btnReset.addEventListener("click", resetGame);
    
        } else if (btnPlayer.classList[1] === "rock" && btnHome.classList[1] === "rock") {
            secGame.insertAdjacentHTML("afterend", draw);
            btnReset = document.querySelector("div.result div.btn_reset");
            btnReset.addEventListener("click", resetGame);
    
        } else if (btnPlayer.classList[1] === "scissors" && btnHome.classList[1] === "paper") {
            secGame.insertAdjacentHTML("afterend", win);
            score.innerHTML = qntSocre + 1
            btnReset = document.querySelector("div.result div.btn_reset");
            btnReset.addEventListener("click", resetGame);
            
        } else if (btnPlayer.classList[1] === "scissors" && btnHome.classList[1] === "rock") {
            secGame.insertAdjacentHTML("afterend", lose);
            qntSocre === 0 ? "": score.innerHTML = qntSocre - 1
            btnReset = document.querySelector("div.result div.btn_reset");
            btnReset.addEventListener("click", resetGame);
            
        } else if (btnPlayer.classList[1] === "scissors" && btnHome.classList[1] === "scissors") {
            secGame.insertAdjacentHTML("afterend", draw);
            btnReset = document.querySelector("div.result div.btn_reset");
            btnReset.addEventListener("click", resetGame);
            
        }
    }, 1000);

    btnReset.addEventListener("click", resetGame);

}

const resetGame = () => {
    const secGame = document.querySelector("section.game");
    const divResult = document.querySelector("div.result");
    const btns = `
            <section class="container_btns">
                <div class="btn paper">
                    <img src="src/assets/images/icon-paper.svg" alt="papel mão aberta">
                </div>
                <div class="btn rock">
                    <img src="src/assets/images/icon-rock.svg" alt="pedra mão fechada">
                </div>
                <div class="btn scissors">
                    <img src="src/assets/images/icon-scissors.svg" alt="tesoura mão em formato de tesoura">
                </div>
            </section>
        `
    const headerContent = document.querySelector("header.content");


    secGame.remove()
    divResult.remove()
    headerContent.insertAdjacentHTML("afterend", btns);

    jokenpo();
}


