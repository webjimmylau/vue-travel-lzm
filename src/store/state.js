let defaultCity = {
  id: 1,
  spell: 'beijing',
  name: '北京'
}

if(localStorage.city){
  defaultCity = JSON.parse(localStorage.city) // 字符串转对象
}

const state = {
  city: defaultCity
}

export default state
