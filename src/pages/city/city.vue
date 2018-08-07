<template>
    <div class="city">
      <city-head></city-head>
      <city-search></city-search>
      <city-list
        :currentCityStr="currentCity"
        :hotCitiesArr="hotCities"
        :citiesObj="cities"></city-list>
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
          currentCity: '北京',
          hotCities: [],
          cities: {},
          letterList: []
        }
      },
      methods: {
        getCityListInfo(){
          this.$http
            .get(this.$api.city)
            .then(res => {
              const resData = res.data
              if(resData.ret && resData.data){
                const data = resData.data
                this.hotCities = data.hotCities
                this.cities = data.cities
                for(let item in data.cities){
                  this.letterList.push(item)
                }
              }
            })
        }
      },
      mounted(){
        this.getCityListInfo()
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
