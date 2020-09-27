<template>
  <v-app style="background: #252525">
    <v-app-bar
    height="150px"
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  
};
</script>
<style>

</style>
