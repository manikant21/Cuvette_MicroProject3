const data=require("./food.json");
//Q.1
 console.log(data);
//Q.2
 let a=data.filter((y)=>{
     return y.category=="Vegetable"});
 console.log(a);
//Q.3
 let b=data.filter((y)=>{
     return y.category=="Fruit"
 });
 console.log(b);
//Q.4
 let c=data.filter((y)=>{
    return y.category=="Protein"
});
console.log(c);
//Q.5
let d=data.filter((y)=>{
    return y.category=="Nuts"
});
console.log(d);
//Q.6
let e=data.filter((y)=>{
    return y.category=="Grain"
});
console.log(e);
//Q.7
let f=data.filter((y)=>{
    return y.category=="Dairy"
});
console.log(f);
//Q.8
let g=data.filter((y)=>{
    return y.calorie >100
});
console.log(g);

//Q.9
let h=data.filter((y)=>{
    return y.calorie <100
});
console.log(h);
//Q.10
 let i=data.filter((y)=>y.protiens).sort((b,a)=>a.protiens - b.protiens)
 console.log(i);
//Q.11
 let j=data.filter((y)=>y.cab).sort((a,b)=>a.cab - b.cab)
 console.log(j);
