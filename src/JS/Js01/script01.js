const $box1 = document.querySelector('.box1');
const $box2 = document.querySelector('.box2');

const listener1 = (e) => {
    console.log(e.currentTarget.className);
};
$box1.addEventListener('click', listener1,);
const listener = (e) => {
   e.stopPropagation();
   // console.log(e)
    console.log( e.currentTarget.className);
    console.log(e.target.tagName)
    if(e.target.tagName=='BUTTON')
        console.log(e.target.name);
};
$box2.addEventListener('click', listener,);
//$box1.removeEventListener('click',listener1);
document.body.addEventListener('click',(e)=>{
    console.log(e.currentTarget);
});