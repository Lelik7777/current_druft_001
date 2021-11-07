const map = new Map();
map.set(1, 'num1');
console.log(map.get(1));//?
const lists = [
    {id: 1, title: 'list1', filter: 'all',value1:34},
    {id: 1, title: 'list2', filter: 'all',value1: 44},
    {id: 1, title: 'list3', filter: 'all',value1: 23},
]
const tasks = {
    [lists[0].id]: {},
    [lists[1].id]: {},
}
const arr=[1,3,4,5,7,4];
const arrR=arr.reduce((a,x)=>a+x,0);
console.log(arrR);
console.log(arr.reduce((a,x)=>a+x),0);
console.log(arr.reduce((a,x)=>a<x?x:a));//?
console.log(lists.reduce((acc,el)=>acc +el. value1,0));//?
console.log(lists.reduce((a, x)=>{x.value1>30&&(a[x.title]=x.value1); return a},{}));//?
const reduceMy = (arr) => {
  let a=[];
  for (let k of arr){
      a.push(k+'element');
  }
    return a;
}
console.log(reduceMy(arr));//?