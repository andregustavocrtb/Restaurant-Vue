<template>
  <v-container>
    <template>
      <v-card-actions class="butãozinho">
        <v-btn @click="dialog = !dialog" @keypress.esc="dialog = false">
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </template>    
    <v-dialog v-model="dialog" scrollable class="dialog">
      <v-card class="card">
          <div v-for="(product, index) in cart2" v-bind:key="index">
            <v-card-title>{{ product.Name }}</v-card-title>
              <img :src="product.Url" alt />
            <v-card-text>
              <p>{{ '$' + product.Price }}</p>
              <v-btn @click="removeItem(product.Name)" color="error">Remover do Carrinho</v-btn>
            </v-card-text>
          </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Shopping",
  data(){
    return{
      dialog: false,
      cart2: null
    }
  },
  computed: {
    cart(){
      return this.getCart() 
    },
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch("removeItemfromCart", index);
    },
    showList() {
      var modal = document.getElementById("shoppingList");
      var btn = document.getElementById("show");
      btn.onclick = function() {
        modal.style.display = "block";
      };
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    getCart() {
      this.cart2 = this.$store.state.cart
    }
  }
};
</script>

<style>
.butãozinho{
  float: right;
}
.dialog{
  display: flex;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>