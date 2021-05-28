
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const u_score = document.querySelector('#u_score');
const c_score = document.querySelector('#c_score');
const selected = document.querySelector('.selection');
const selected2 = document.querySelector('.selection2');
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
let user=1, comp=1;
let comp_choice,user_choice;
const rps = [rock, paper, scissor];
console.log(rps[0]);

function score_board(s, user_choice)
{
    if(s==0){
        rps[user_choice-1].classList.add('silver-glow');
        setTimeout(function(){
            rps[user_choice-1].classList.remove('silver-glow');
        }, 500);
        return;
    }
    else if(s==-1){
        comp++;
        c_score.innerHTML=comp;
        rps[user_choice-1].classList.add('red-glow');
        setTimeout(function(){
            rps[user_choice-1].classList.remove('red-glow');
        }, 500);
    }
    else{
        user++;
        u_score.innerHTML=user;
        rps[user_choice-1].classList.add('green-glow');
        setTimeout(function(){
            rps[user_choice-1].classList.remove('green-glow');
        }, 500);
    }
}


function Comp_Choice(){
    let n = Math.random();
    n = Math.floor(n*3) + 1;
    console.log(n);
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

// const choice = document.querySelector('.choice');
// choice.innerHTML= "Rock destroys scissor";

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