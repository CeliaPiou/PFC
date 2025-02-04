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

let choice = "";
let parent = "";
let sibling = "";
let yourChoiceIsMade = false;

// _______________________________________________________________________________________________
// _______________________________________________________________ //
//                                                                 //
//          CLICKS                                                 //
// _______________________________________________________________ //

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
        yourChoiceHere.innerHTML =`${figure}`;
        yourChoiceHere.classList.add('text-4xl');

        // CREATION BOUTON POUR INITIALISER JOUEUR 2_____
        sentence.innerHTML = "👉 Now his turn";
        sentence.classList.remove("bouncing");
        sentence.classList.add('btn-like');

        yourChoiceIsMade = true;

        console.log(yourChoiceIsMade)


    })
});

console.log(yourChoiceIsMade)

// SI JE CLICKE SUR LE BOUTON POUR QUE J2 JOUE
sentence.addEventListener('click', () => {

    if(yourChoiceIsMade === false) {
        alert("Pas si vite ! Tu dois d'abord faire un choix ;-) !");
    }
    else {

        // PETIT TEMPS DE CHARGEMENT, C'EST FUN
        // CREATION DES RONDS DE CHGMT
        sentence.classList.remove('btn-like');
        sentence.innerHTML =
        `
        <div class="flex gap-3">
            <div id="r1" class="rounded-full p-3 bg-zinc-400"></div>
            <div id="r2" class="rounded-full p-3 bg-zinc-600"></div>
            <div id="r3" class="rounded-full p-3 bg-zinc-600"></div>
        </div>
        `
        let r1 = document.getElementById('r1');
        let r2 = document.getElementById('r2');
        let r3 = document.getElementById('r3');




        // QUE FAIRE APRES LE CHARGEMENT
        setTimeout(() => {

            sentence.innerHTML = "C'est bon !"

        }, 2000);

        setTimeout(() => {

            sentence.innerHTML = "COUCOU"

        }, 3000);

    }

})