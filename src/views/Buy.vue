<template>
  <v-container>
    <Cart />
    <v-row>
      <v-col cols="12" md="4" v-for="(product,index) in products" :key="index">
        <v-card class="card" >
          <img
            class="imagem"
            :src="product.url"
          >
          <v-card-title class="food-title">{{product.name}}</v-card-title>
          <v-card-text>
            <p class="food-description">{{product.description}}</p>
            <p class="food-price mt-8">{{`R$ ${product.price}`}}</p>
            <v-card-actions class="add">
              <v-icon class="mr-4">mdi-cart</v-icon>
              <v-btn class="label" @click="addToCart(product.name)">Adicionar ao Carrinho</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cart from "@/components/Shopping";

export default {
  name: "product",
  props: ["url", "name", "description", "price"],
  methods: {
    addToCart(name) {
      this.$store.dispatch("addItemtoCart", name);
    },
  },
  computed: {
    products(){
      return this.$store.getters.products
    }
  },
  components: {
    Cart,
  },
};
</script>

<style>
.switch {
  margin-left: auto;
}
.food-price {
  font-size: 20px;
  color: #39b100;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
.food-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px !important;
  font-weight: 500 !important;
  color: #3d3d4d;
}
.food-description {
  font-size: 16px !important;
  line-height: 26px;
  color: #3d3d4d;
}
.imagem{
  display: flex;
  padding-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  height: 180px;
  width: 320px;
}
.add{
  padding-top: 40px;
}
.card{
  height: 568px;
}
</style>