<script setup>

import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useWeatherStore } from '../stores/weather'

const weatherStore = useWeatherStore()
const route = useRoute()

console.log(route.path)
const prefCode = route.path.replace('/', '')


watch(
  () => route.path,
  (newPath) => {
  console.log(newPath)
  const prefCode = newPath.replace('/', '')
  weatherStore.fetchForecast(prefCode)
})

</script>



<template>
        <v-sheet  :class="weatherStore.weatherBG"
                  height="200"
                  rounded="lg"
                  width="500"
                  padding="16px"
                  >
        <br>
         {{ weatherStore.todayWeather }}     
        <br> 
         {{ weatherStore.weatherTemp }} ℃
        <br> 
         {{ weatherStore.tempGuideline }}
        <br> 

      <v-icon :icon="weatherStore.weatherIcon" 
              size="60"
              :color="weatherStore.weatherColor"
              />


      </v-sheet>
</template>

<style>

</style>