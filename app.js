
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const u_score = document.querySelector('#u_score');
const c_score = document.querySelector('#c_score');
const selected = document.querySelector('.selection');
const selected2 = document.querySelector('.selection2');
const choice = document.querySelector('.choice');
const appraise = ["Nice! Keep Going.", "Wow!", "Awesome!", "Good.", "I am impressed"];
const condemn = ["Haha Sucker", "Come with a better luck next time", "Loser", "I think you should give up", "How can you have such bad luck?"]

const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
let user=0, comp=0;
let comp_choice,user_choice;
const rps = [rock, paper, scissor];
console.log(rps[0]);

function score_board(s, user_choice)
{
    let n = Math.floor(Math.random()*5);
    if(s==0){
        rps[user_choice-1].classList.add('silver-glow');
        setTimeout(function(){
            rps[user_choice-1].classList.remove('silver-glow');
        }, 500);
        choice.innerHTML= "Its a tie.";
        return;
    }
    else if(s==-1){
        console.log(comp);
        comp++;
        c_score.innerHTML=comp;
        rps[user_choice-1].classList.add('red-glow');
        setTimeout(function(){
            rps[user_choice-1].classList.remove('red-glow');
        }, 500);
        choice.innerHTML= condemn[n];
        return;
    }
    else{
        user++;
        u_score.innerHTML=user;
        rps[user_choice-1].classList.add('green-glow');
        setTimeout(function(){
            rps[user_choice-1].classList.remove('green-glow');
        }, 500);
        choice.innerHTML= appraise[n];
        return;
    }
}


function Comp_Choice(){
    let n = Math.random();
    n = Math.floor(n*3) + 1;
    return n;
}

function who_won(u,c){
    if(u==c)
    {
        return 0;
    }      
    else if(u==1)
    {
        if(c==2)
        return -1;
        else 
        return 1;
    }
    else if(u==2)
    {
        if(c==3)
        return -1;
        else 
        return 1;
    }
    else if(u==3)
    {
        if(c==2)
        return 1;
        else 
        return -1;
    }
}

function colorx(ch){
    if(ch==1){
        selected2.innerHTML='Rock';
        selected2.style.color = "rgb(239,84,128)";
    }
    else if(ch==2){
        selected2.innerHTML='Paper';
        selected2.style.color = "rgb(255,222,85)";
    }
    else{
        selected2.innerHTML='Scissor';
        selected2.style.color = "rgb(116,218,226)";
    }
}


rock.addEventListener('click', function(){
    selected.innerHTML='Rock';
    selected.style.color = "rgb(239,84,128)";
    a.style.color = "rgb(239,84,128)";
    user_choice = 1;
    comp_choice = Comp_Choice();
    colorx(comp_choice);
    const res = who_won(user_choice, comp_choice);
    score_board(res, user_choice);

});


paper.addEventListener('click', function(){
    selected.innerHTML='Paper';
    selected.style.color = "rgb(255,222,85)";
    b.style.color = "rgb(255,222,85)";
    user_choice = 2;
    comp_choice = Comp_Choice();
    colorx(comp_choice);
    const res = who_won(user_choice, comp_choice);
    score_board(res, user_choice);
});


scissor.addEventListener('click', function(){
    selected.innerHTML='Scissor';
    selected.style.color = "rgb(116,218,226)";
    c.style.color = "rgb(116,218,226)";
    user_choice = 3;
    comp_choice = Comp_Choice();
    colorx(comp_choice);
    const res = who_won(user_choice, comp_choice);
    score_board(res, user_choice);
});