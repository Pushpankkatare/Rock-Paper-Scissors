console.log(Math.random());


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const u_score = document.querySelector('#u_score');
const c_score = document.querySelector('#c_score');
const selected = document.querySelector('.selection');
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
let user=0, comp=0;


function score_board(s)
{
    if(s==0)
    return;
    else if(s==-1){
        comp++;
        c_score.innerHTML=comp;
    }
    else{
        user++;
        u_score.innerHTML=user;
    }
}


function Comp_Choice(){
    let n = Math.random();
    if(n<0.333)
    return 1;
    else if(n>0.666)
    return 3;
    else
    return 2;
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

const choice = document.querySelector('.choice');
choice.innerHTML= "Rock destroys scissor";

rock.addEventListener('click', function(){
    selected.innerHTML='Rock';
    selected.style.color = "rgb(239,84,128)";
    a.style.color = "rgb(239,84,128)";
    const user_choice = 1;
    const comp_choice = Comp_Choice();
    const res = who_won(user_choice, comp_choice);
    score_board(res);
    if(res==1){
        rock.style.borderColor="rgb(15, 214, 58)";
        rock.style.transition= ".5s ease";
    }
    else if(res==-1){
        rock:hover.style.borderColor="red";
        rock:hover.style.transition= ".5s ease";
    }
    else{
        rock.style.borderColor="yellow";
        rock.style.transition= ".5s ease";
    }
    console.log(who_won(user_choice, comp_choice));
});

rock.addEventListener('click', function(){
    selected.innerHTML='Rock';
    selected.style.color = "rgb(239,84,128)"
    const user_choice = 1;
    const comp_choice = Comp_Choice();
    const res = who_won(user_choice, comp_choice);
    score_board(res);
    if(res==1){
        rock.style.borderColor="rgb(15, 214, 58)";
        rock.style.transition= ".5s ease";
    }
    else if(res==-1){
        rock.style.borderColor="red";
        rock.style.transition= ".5s ease";
    }
    else{
        rock.style.borderColor="yellow";
        rock.style.transition= ".5s ease";
    }
    console.log(who_won(user_choice, comp_choice));
});


paper.addEventListener('click', function(){
    selected.innerHTML='Paper';
    selected.style.color = "rgb(255,222,85)";
    b.style.color = "rgb(255,222,85)";
    const user_choice = 1;
    const comp_choice = Comp_Choice();
    const res = who_won(user_choice, comp_choice);
    score_board(res);
    if(res==1){
        paper.style.borderColor="rgb(15, 214, 58)";
        paper.style.transition= ".5s ease";
    }
    else if(res==-1){
        paper.style.borderColor="red";
        paper.style.transition= ".5s ease";
    }
    else{
        paper.style.borderColor="white";
        paper.style.transition= ".5s ease";
    }
    console.log(who_won(user_choice, comp_choice));
});


scissor.addEventListener('click', function(){
    selected.innerHTML='Scissor';
    selected.style.color = "rgb(116,218,226)";
    c.style.color = "rgb(116,218,226)";
    const user_choice = 1;
    const comp_choice = Comp_Choice();
    const res = who_won(user_choice, comp_choice);
    score_board(res);
    if(res==1){
        scissor.style.borderColor="rgb(15, 214, 58)";
        scissor.style.transition= ".5s ease";
    }
    else if(res==-1){
        scissor.style.borderColor="red";
        scissor.style.transition= ".5s ease";
    }
    else{
        scissor.style.borderColor="white";
        scissor.style.transition= ".5s ease";
    }
    console.log(who_won(user_choice, comp_choice));
});