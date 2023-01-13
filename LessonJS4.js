let count = 4;
let ask = prompt('Введіть пароль');
let i=1;
while (ask != 'Logos' && i<5) {
    ask = prompt(`Залишилось спроб ${count}`);
    count--;
    i++;
    if (count === 0 && ask != 'Logos' ){
        alert('Будь ласка спробуйте пізніше!'); 
    }
}
if (ask == 'Logos'){
alert('Запрошуємо на сайт!')
}


let b=1;
let a= +prompt('введіть число для обчислення факторіала');
let i=a
while (i > 0) { b*=i;i--;}
console.log(`task2.1=${b}`);




let a =1000;
while(a<=9999){ 
console.log(`task2.2=${a}`);a+=3;}




let i=1;
while (i<=55) {
    console.log(`task2.3=${i}`);
    i+=2;}



let i=90;
while (i>=0) {
    console.log(`task2.4=${i}`);
    i-=5
}




let i=1 , c=2;
while ( i<=20) {
    console.log(`task2.5=${c}`);
    i++, c*=2;
}



let a=2;
while (a<10000) {
    console.log(`task2.6=${a}`);
    a=2*a-1;
}




let a=-166;
while (a<=99) {
    console.log(`task2.7=${a}`);
    a=2*a+200;
}



let a1 = +prompt('Введіть число');
let b1 = prompt('Степінь');
let result=1;
if (b1>0) {   
    let i=1;
    while (i<=b1) {
    result*=a1;  
    i++;
    }
    console.log(`task2.8=${result}`);
}
else if (b1<0){
    result=(a1**b1);
    console.log(`task2.8=${result}`);
}
else if (b1==0){
    result=(a1**0);
    console.log(`task2.8=${result}`);
}
