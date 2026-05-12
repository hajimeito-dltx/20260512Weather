<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useWeatherStore } from '@/stores/weather'
const weatherStore = useWeatherStore()
</script>

<template>
 <v-app>
 <div class="pageHole">
  <header>
    <nav class="first">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
    </nav>
    <nav class="second">
      <RouterLink to="/080000" class="nav-link">茨城県</RouterLink>
      <RouterLink to="/090000" class="nav-link">栃木県</RouterLink>
      <RouterLink to="/100000" class="nav-link">群馬県</RouterLink>
      <RouterLink to="/110000" class="nav-link">埼玉県</RouterLink>
      <RouterLink to="/120000" class="nav-link">千葉県</RouterLink>
    </nav>
    <nav class="third">
      <RouterLink to="/130000" class="nav-link">東京都</RouterLink>
      <RouterLink to="/140000" class="nav-link">神奈川県</RouterLink>
      <RouterLink to="/190000" class="nav-link">山梨県</RouterLink>
      <RouterLink to="/200000" class="nav-link">長野県</RouterLink>
    </nav>
    <br>
  </header>
 </div>


  <main class="contents">
         <RouterView />
  </main>

 </v-app>
</template>

<style scoped>
/* 通常状態 */
.nav-link {
  padding: 8px 12px;
  text-decoration: none;
  color: #333;
}

/* 部分一致でアクティブ（例: /about/team でも有効） */
.router-link-active {
  color: #1976d2;
}

/* 完全一致でアクティブ（例: /about のみ） */
.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid #1976d2;
}
.pageHole {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
header {
  margin-bottom: 20px;
}
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.contents {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}

</style>