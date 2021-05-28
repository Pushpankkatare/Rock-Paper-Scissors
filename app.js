console.log(Math.random());


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

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');


const choice = document.querySelector('.choice');
choice.innerHTML= "Rock destroys scissor";

rock.addEventListener('click', function(){
    const user_choice = 1;
    const comp_choice = Comp_Choice();
    score_board(who_won(user_choice, comp_choice));
    console.log(who_won(user_choice, comp_choice));
});