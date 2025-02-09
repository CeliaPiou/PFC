// _______________________________________________________________ //
//                                                                 //
//          MES CONST                                              //
// _______________________________________________________________ //

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissor');
const myActions = [rock, paper, scissors];

const yourChoiceHere = document.getElementById('your-selection');
const sentence = document.getElementById('text-in-dead-zone');
const winnerIs = document.getElementById('and-the-winner-is');

let choice = "";
let hisChoice = "";
let parent = "";
let sibling = "";
let yourChoiceIsMade = false;
let hisChoiceIsMade = false;
let intervall = "";

// Pour les colors des ronds de chargement;
let actif = "bg-zinc-400";
let inactif = "bg-zinc-600";

// Pour les scores

// _______________________________________________________________________________________________
// _______________________________________________________________ //
//                                                                 //
//          FUNCTIONS                                              //
// _______________________________________________________________ //

function reload (a) {
    window.location.reload()
}


// _______________________________________________________________________________________________
// _______________________________________________________________ //
//                                                                 //
//          LIVES SYSTEME                                          //
// _______________________________________________________________ //








// _______________________________________________________________________________________________
// _______________________________________________________________ //
//                                                                 //
//          CLICKS                                                 //
// _______________________________________________________________ //


// CHOIX DU JOUEUR;
myActions.forEach(option => {

    option.addEventListener('click', () => {

        // CHANGER LES COULEURS DU FOND______
        option.classList.toggle('bg-zinc-800');
        option.classList.toggle('bg-pink-700');

        // JE DEFINIS MES SIS POUR CHANGER LE BG
        let parent = option.parentNode;
        let allOptions = parent.querySelectorAll('a');
        let sibling = Array.from(allOptions).filter(a => a !== option);

        sibling.forEach(oo => {
            oo.classList.remove('bg-pink-700');
            oo.classList.add('bg-zinc-800');
        });

        // RECUPERER LE CHOIX _______________
        choice = option.getAttribute('id');
        figure = option.innerHTML;

        // METTRE LE CHOIX EN HAUT___________
        yourChoiceHere.innerHTML =`<p class="bg-pink-700 rounded-full p-5">${figure}</p>`;
        yourChoiceHere.classList.add('text-5xl');

        // CREATION BOUTON POUR INITIALISER JOUEUR 2_____
        sentence.innerHTML = "👉 Now his turn";
        sentence.classList.remove("bouncing");
        sentence.classList.add('btn-like');

        yourChoiceIsMade = true;

    })
});

// LE CHOIX DU JOUEUR EST FAIT;
// SI JE CLICKE SUR LE BOUTON POUR QUE J2 JOUE:
sentence.addEventListener('click', (event) => {

    if (hisChoiceIsMade === true) {
        alert('Son choix est déjà fait, patience ;-)')
        event.preventDefault();
    }

    else {
        if(yourChoiceIsMade === false) {
            alert("Pas si vite ! Tu dois d'abord faire un choix ;-) !");
        }
        else {

            // PETIT TEMPS DE CHARGEMENT, C'EST FUN
            // CREATION DES RONDS DE CHGMT, ON RETIRE LE MODE BOUTON ET ON AJOUTE LES POINTS
            sentence.classList.remove('btn-like');
            sentence.innerHTML =
            `
            <div class="flex gap-3">
                <div id="r1" class="rounded-full p-3 bg-zinc-400"></div>
                <div id="r2" class="rounded-full p-3 bg-zinc-600"></div>
                <div id="r3" class="rounded-full p-3 bg-zinc-600"></div>
            </div>
            `
            // ON DEFINIT CHAQUE POINT
            let r1 = document.getElementById('r1');
            let r2 = document.getElementById('r2');
            let r3 = document.getElementById('r3');

            // POINTS DE CHARGEMENT (pour le fun)
            intervall = setInterval (() => {

                // Si le premier rond est foncé
                if (r1.classList.contains(actif)) {
                    // Je rends inactif le R1
                    r1.classList.remove(actif);
                    r1.classList.add(inactif);
                    // Je rends actif le R2
                    r2.classList.remove(inactif);
                    r2.classList.add(actif);
                    // Je laisse le R3 intact

                }
                else if (r2.classList.contains(actif)) {
                    // Je laisse le R1 intact
                    // Je rends inactif le R2
                    r2.classList.remove(actif);
                    r2.classList.add(inactif);
                    // Je rends actif le R3
                    r3.classList.remove(inactif);
                    r3.classList.add(actif);
                }
                else {
                    r3.classList.remove(actif);
                    r3.classList.add(inactif);
                    r1.classList.remove(inactif);
                    r1.classList.add(actif);
                }

            }, 400)


            // QUE FAIRE APRES LE CHARGEMENT
            setTimeout(() => {

                clearInterval(intervall);
                sentence.innerHTML = "He has chosen!";
                hisChoiceIsMade = true;

            }, 2000);


            // QUE FAIRE APRES CHARGEMENT, AFFICHE SON MOVE
            setTimeout(() => {

                let randomNumber = Math.floor(Math.random() * 3);
                sentence.setAttribute("class", "bg-sky-700 rounded-full");

                if (randomNumber === 0) {

                    hisChoice = "his-paper";
                    sentence.innerHTML =
                    `
                    <p id="${hisChoice}" class="text-5xl c-boucing transition duration-150 ease-in-out rounded-full p-5">✋</p>
                    `
                }
                else if (randomNumber === 1) {

                    hisChoice = "his-rock";
                    sentence.innerHTML =
                    `
                    <p id="${hisChoice}" class="text-5xl c-boucing transition duration-150 ease-in-out rounded-full p-5">✊</p>
                    `
                }
                else {
                    hisChoice = "his-scissor";
                    sentence.innerHTML =
                    `
                    <p id="${hisChoice}" class="text-5xl c-boucing transition duration-150 ease-in-out rounded-full p-5">✌🏼</p>
                    `
                }

                console.log(hisChoice);


            }, 3000);

            // QUE FAIRE APRES SON MOOVE

            setTimeout(() => {

                winnerIs.style.top = "5vh";

                // HE WINS
                if((hisChoice == "his-rock" && choice == "scissor")
                    ||
                    (hisChoice == "his-paper" && choice == "rock")
                    ||
                    (hisChoice == "his-scissor" && choice == "paper")
                ) {
                    winnerIs.innerHTML =
                    `
                    <p>He won, sorry bud...</p>
                    <p><a href="#" class="btn-like">Next Round</a></p>
                    `;
                    winnerIs.classList.add('loosingBg')
                }

                // YOU WON
                else if (
                    (hisChoice == "his-rock" && choice == "paper")
                    ||
                    (hisChoice == "his-paper" && choice == "scissor")
                    ||
                    (hisChoice == "his-scissor" && choice == "rock")
                ) {
                    winnerIs.innerHTML =
                    `
                    <p>You won, yay !</p>
                    <p><a href="#" class="btn-like">Next Round</a></p>
                    `;
                    winnerIs.classList.add('victoryBg');
                }

                else {
                    winnerIs.innerHTML =
                    `
                    <p>It's a tie, oops</p>
                    <p><a href="#" class="btn-like">Next Round</a></p>
                    `
                    winnerIs.classList.add('tieBg');
                }

                let buttons = document.querySelectorAll('a');

                buttons.forEach(a => {
                    a.addEventListener('click', () => {
                        reload();
                    })
                });

            }, 5000);

        } // FIN DU ELSE YOURCHOICEISMADE
    } //FIN DU ELSE HISCHOICEISMADE


})