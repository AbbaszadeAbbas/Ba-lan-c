// console.log("let's go")

// (function() {
//   console.log("Salam")
// })()

//  // Calculator

// let x = 5;
// let y = 6;
// let operator = '/'

// if(operator == '+') {
//   console.log(x+y)
// }else if(operator == '-') {
//   console.log(x-y)
// }else if(operator == '*') {
//   console.log(x*y)
// }else if(operator == '/') {
//   console.log(x/y)
// }

//  // 1 telebenin xususiyyetleri (Variant 1)

// function Abbas() {
//   let obj = {
//     Ad: "Abbas" ,
//     Soyad: "Abbaszade" ,
//     E_mail: "mr.abbaszada86@gmail.com" ,
//     Dogum_tarixi: "14 aprel 2008" ,
//     }
//     console.log(obj)
// }

// Abbas()

// // Variant 2

// let adlar = ['Ehmed' , 'Memmed' , 'Sahil']
// let soyadlar = ['Ehmedov' , 'Qasimov' , 'Haciyev']
// let telebeler = [adlar, soyadlar]

// console.log(telebeler[0][0] , telebeler[1][0])

// // Variant 3

// let telebe01 = {
//   ad: "Ayxan" ,
//   soyad: "Huseynli"
// }

// let telebe02 = {
//   ad: "Elcan" ,
//   soyad: "Muradov"
// }

// let telebe03 = {
//   ad: "Samir" ,
//   soyad: "Kerimov"
// }

// let telebeler = [telebe01 , telebe02 , telebe03]

// console.log(telebeler[0])

// // Variant 4
// let telebeler = {
//   adlar:['Ehmed' , 'Memmed' , 'Sahil'] ,
//   soyadlar:['Ehmedov' , 'Qasimov' , 'Haciyev ']
// }

// console.log(telebeler["adlar"][2] , telebeler["soyadlar"][2])

// // Variant 5
// let adlar = ['Ehmed' , 'Memmed' , 'Sahil']
// let soyadlar = ['Ehmedov' , 'Qasimov' , 'Haciyev']
// let telebeler = [adlar, soyadlar]

// console.log(`${telebeler[0][0]} \ ${telebeler[1][0]}`)
// console.log(`${telebeler[0][1]} \ ${telebeler[1][1]}`)
// console.log(`${telebeler[0][2]} \ ${telebeler[1][2]}`)




//                                                TASKS

// // recursion
// (function() {
//   let salam = 'salam'
//   let result = salam.repeat(50)
//   console.log(result)
// })()


// // tv01


// let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
// let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
// let ages = [23, 34, 40, 58, 60];
// let students = [names, surnames, ages]

// for (i=0; i<5;i++){
//   console.log(`Ad: ${students[0][i]} \,Soyad: ${students[1][i]} \,Yas: ${students[2][i]}`)
// }

// // tv02


// let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
// let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
// let ages = [23, 34, 40, 58, 60];
// let students = {
//     adlar: names,
//     soyadlar: surnames,
//     yaslar: ages
// }

// for (i=0 ; i<5 ; i++) {
//   console.log(`Ad: ${students["adlar"][i]} , Soyad: ${students["soyadlar"][i]} , Yas: ${students["yaslar"][i]}`)
// }

// // tv03


// let students = [{
//   ad: 'Eli',
//   soyad: 'Piriyev',
//   yas: 23
// }, {
//   ad: 'Ehmed',
//   soyad: 'Memmedov',
//   yas: 34
// }, {
//   ad: 'Sara',
//   soyad: 'Qurbanova',
//   yas: 40
// }, {
//   ad: 'Sevda',
//   soyad: 'Ezizova',
//   yas: 58
// }, {
//   ad: 'Qurban',
//   soyad: 'Sadiqzade',
//   yas: 60
// }]

// function GetData(_obj) {
//   _objData = ""
//   for(let _key in _obj){
//     _objData += `${_key}: ${_obj[_key]}, `
//   }
//   return _objData
// }

// function GetAllData(_arr){
//   for(i=0 ; i<_arr.length ; i++){
//     console.log(GetData(_arr[i]))
//   }
// }

// GetAllData(students)