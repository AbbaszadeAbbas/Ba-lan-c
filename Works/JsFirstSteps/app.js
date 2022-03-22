// console.log('Hello Wolrd')


// // Calculator Start
// let x = 5
// let y = 6

// let operator = '-'

// if (x * 1 == x && y * 1 == y) {
//   if (operator == '+') {
//     console.log(x + y)
//   } else {
//     if (operator == '-') {
//       console.log(x - y)
//     } else {
//       if (operator == '*') {
//         console.log(x * y)
//       } else {
//         if (operator == '/') {
//           console.log(x / y)
//         }
//       }
//     }
//   }
// } else {
//   console.log('Math Erorr')
// }

// // Calculator End


// // 1-20 edelerin sira ile yazilisi START
// let a=1;

// while(a<21){
//   console.log(a);
//   a++;
// }

// //1-20 edelerin sira ile yazilisi END

// let x=5
// let y= 6
// let z = 7
// let a =8
// console.log(x)
// console.log(y)
// console.log(z)
// console.log(a)


// TASK № 1

// let a = 6
// let b = 8
// let c = 9

// if (c > b && b > a) {
// 	console.log('b-deyiseni c-deyisenine daha yaxindir.')
// } else if (c > a && a > b) {
// 	console.log('a-deyiseni c-deyisenine daha yaxindir.')
// } else if (a == b && c > a) {
// 	console.log('a-deyiseni b-deyisenine beraberdir ve her ikisi c-den kicikdir')
// }

// TASK № 2

// let x = false

// console.log('You entered ' + typeof(x))

// TASK № 4

let x =4
let y =3
let a =1
let z =0

if(/*a>z>y>x*/a>z && z>y && y>x){
	console.log(a,z,y,x)
}else if(/*a>z>x>y*/ a>z && z>x && x>y){
	console.log(a,z,x,y)
}else if(/*a>x>z>y*/ a>x && x>z && z>y){
	console.log(a,x,z,y)
}else if(/*x>a>z>y*/ x>a && a>z && z>y){
	console.log(x,a,z,y)
}else if(/*a>y>z>x*/ a>y && y>z && z>x){
	console.log(a,y,z,x)
}else if(/*y>a>z>x*/ y>a && a>z && z>x){
	console.log(y,a,z,x)
}else if(z>a>y>x z>a && a>y && y>x){
	console.log(z,a,y,x)
}else if(/*x>y>a>z*/ x>y && y>a && a>z){
	console.log(x,y,a,z)
}else if(/*a>x>y>z*/ a>x && x>y && y>z){
	console.log(a,x,y,z)
}else if(/*z>x>y>a*/ z>x && x>y && y>a){
	console.log(z,x,y,a)
}else if(/*y>x>a>z*/ y>x && x>a && a>z){
	console.log(y,x,a,z)
}else if(/*x>a>y>z*/ x>a && a>y &&y>z){
	console.log(x,a,y,z)
}else if(/*a>y>x>z*/ a>y&& y>x && x>z){
	console.log(a,y,x,z)
}