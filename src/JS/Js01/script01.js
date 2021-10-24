stop:for (let i=0;i<5;i++){
    //debugger
    for (let j=0;j<3;j++){
        if(i==2) break stop;
        console.log(i);
    }
}
const obj=[{name:'bob'},{name: 'ann'},{name:'tom'}];
const copy=obj.map((x,i)=>({...x,age:i%2==0?20+Math.trunc(Math.random()*10+1):25-Math.trunc(Math.random()*10+1)}));
console.log(obj);
console.log(copy);//?
let arrayRandomValue=new Uint8Array(10);
arrayRandomValue=crypto.getRandomValues(arrayRandomValue).sort((a,b)=>a-b);
console.log(arrayRandomValue);
const copy2=obj.map((x,i)=>({...x,id:arrayRandomValue[i]}));
console.log(copy2);//?