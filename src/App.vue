<template>
  <v-app style="background: #252525">
    <v-app-bar
    height="150px"
      app
      color="primary"
      dark
    >
      <v-btn color="success">Novo Produto</v-btn>
    </v-app-bar>

    <v-main>
      <ProductsDashboard/>
    </v-main>
  </v-app>
</template>

<script>
import ProductsDashboard from './views/ProductsDashboard'

export default {
  name: 'App',

  components: {
    ProductsDashboard
  },

  data: () => ({
    //
  }),
};
</script>
