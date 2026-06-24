const roles = [
    "Aspiring Software Engineer",
    "Java Developer",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeText(){

    if(charIndex < roles[roleIndex].length){

        typing.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }else{

        setTimeout(eraseText,1500);
    }
}

function eraseText(){

    if(charIndex > 0){

        typing.textContent =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(typeText,300);
    }
}

window.onload = typeText;
