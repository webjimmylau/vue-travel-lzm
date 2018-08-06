<template>
    <div class="city">
      <city-head></city-head>
      <city-search></city-search>
      <city-list :data="listData"></city-list>
      <city-letter :list="letterList"></city-letter>
    </div>
</template>

<script>
    import CityHead from './components/head'
    import CitySearch from './components/search'
    import CityList from './components/list'
    import CityLetter from './components/letter'

    export default {
      data(){
        return {
          listData: {
            currentCity: '北京',
            hotCity: [
              '北京',
              '上海',
              '广州',
              '深圳',
              '杭州',
            ],
            letterCity: [
              {letter: 'A', list: ['A1', 'A2', 'A3', 'A4', 'A5']},
              {letter: 'B', list: ['B1', 'B2', 'B3', 'B4', 'B5']},
              {letter: 'C', list: ['C1', 'C2', 'C3', 'C4', 'C5']},
              {letter: 'D', list: ['D1', 'D2', 'D3', 'D4', 'D5']},
              {letter: 'E', list: ['E1', 'E2', 'E3', 'E4', 'E5']},
            ]
          },
          letterList: ['A', 'B', 'C', 'D', 'E']
        }
      },
      components: {
        CityHead,
        CitySearch,
        CityList,
        CityLetter
      }
    }
</script>

<style scoped>

</style>
