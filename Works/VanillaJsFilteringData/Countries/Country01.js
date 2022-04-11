let students = [{
  ad: 'Eli',
  soyad: 'Piriyev',
  yas: 23
}, {
  ad: 'Ehmed',
  soyad: 'Memmedov',
  yas: 34
}, {
  ad: 'Sara',
  soyad: 'Qurbanova',
  yas: 40
}, {
  ad: 'Sevda',
  soyad: 'Ezizova',
  yas: 58
}, {
  ad: 'Qurban',
  soyad: 'Sadiqzade',
  yas: 60
}]

function GetData(_obj) {
  _objData = ""
  for(let _key in _obj){
    _objData += `${_key}: ${_obj[_key]}, `
  }
  return _objData
}

function GetAllData(_arr){
  for(i=0 ; i<_arr.length ; i++){
    console.log(GetData(_arr[i]))
  }
}

GetAllData(students)