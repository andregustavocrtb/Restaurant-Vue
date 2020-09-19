<template>
  <v-app style="background: #252525">
    <v-app-bar
    height="150px"
      app
      color="primary"
      dark
    >
      <v-btn color="success" @click="showModal = true">Novo Produto</v-btn>
    </v-app-bar>

    <v-main>
      <ProductsDashboard/>
      <transition name="fade" v-if="showModal === true">
      </transition>
      <ProductModal v-if="showModal === true"/>
    </v-main>
  </v-app>
</template>

<script>
import ProductsDashboard from './views/ProductsDashboard'
import ProductModal from './components/ProductModal'

export default {
  name: 'App',

  components: {
    ProductsDashboard,
    ProductModal
  },

  data: () => ({
    showModal: false
  }),
};
</script>
<style>
.fade-enter-active,
.fade-leave-active{
 transition: opacity 0.5s;;
}
</style>
