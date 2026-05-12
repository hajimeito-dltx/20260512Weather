import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    forecast: null,   
  }),

  actions: {
    async fetchForecast(prefCode) {
      try {
        const res = await axios.get(`https://www.jma.go.jp/bosai/forecast/data/forecast/${prefCode}.json`)

        this.forecast = res.data

      } catch (error) {
        console.error('ユーザー情報の取得に失敗しました', error)
      }
    }
  },

  getters:{ 
    todayWeather:(state) => {
      if (!state.forecast){
        return '読み取り中'
      }  

      return state.forecast[0].timeSeries[0].areas[0].weathers[0]
    },
    
    weatherTemp:(state) => {
      if (!state.forecast){
        return '読み取り中'
      }
      return state.forecast[0].timeSeries[2].areas[0].temps[0]
    },

    tempGuideline:(state) => {
      if (!state.forecast){
        return '読み込み中'
      }
      const temp = Number(state.forecast[0].timeSeries[2].areas[0].temps[0])


      if (temp <= 5 ) {
        return '寒い'
      } else if (temp <= 10) {
        return 'まあまあ'
      } else if (temp <= 15) {
        return '半袖'
      } else{
        return '暑い'
     }

    },

    weatherBG:(state) => {
      if (!state.forecast) return ''
      const weatherBGc = state.forecast[0].timeSeries[0].areas[0].weatherCodes[0]
      const weatherBGr = Math.floor(weatherBGc / 100)
      if ( weatherBGr === 1 ){
        return 'bg-orange-lighten-4'
      } else if (weatherBGr === 2){
        return 'bg-blue-grey-lighten-4'
      } else if (weatherBGr === 3){
        return "bg-blue-lighten-4"
      } else if (weatherBGr === 4){
        return "bg-cyan-lighten-4"
      } else{
        return "error"
    }
    
   },

    weatherIcon:(state) => {
       if (!state.forecast) return ''

      const weatherCodeH = state.forecast[0].timeSeries[0].areas[0].weatherCodes[0]
      const weatherCodeA = Math.floor(weatherCodeH / 100)
      if ( weatherCodeA === 1 ){
        return "mdi-weather-sunny"
      } else if (weatherCodeA === 2){
        return "mdi-weather-cloudy"
      } else if (weatherCodeA === 3){
        return "mdi-weather-rainy"
      } else if (weatherCodeA === 4){
        return "mdi-weather-snowing"
      } else{
        return "error"
      }
    },

    weatherColor:(state) => {
      if (!state.forecast) return ''

      const weatherCodeH = state.forecast[0].timeSeries[0].areas[0].weatherCodes[0]
      const weatherCodeA = Math.floor(weatherCodeH / 100)
      if ( weatherCodeA === 1 ){
        return 'red'
      } else if (weatherCodeA === 2){
        return 'grey'
      } else if (weatherCodeA === 3){
        return "blue"
      } else if (weatherCodeA === 4){
        return "white"
      } else{
        return "error"
      }
    }



  }
    
})