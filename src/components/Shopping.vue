<template>
  <v-container>
      <v-card-actions class="butãozinho">
        <v-btn @click="dialog = !dialog" @keypress.esc="dialog = false">
          <v-icon>mdi-cart-outline</v-icon>
          {{ cartCount }}        
        </v-btn>
      </v-card-actions>
    <v-dialog v-model="dialog">
      <v-card class="card">
          <div v-for="(product, index) in cart" :key="index">
            <v-card-title>{{ product.name }}</v-card-title>
              <img :src="product.url" alt />
            <v-card-text>
              <p>{{ '$' + product.price }}</p>
              <v-btn @click="removeItem(index)" color="error">Remover do Carrinho</v-btn>
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
      dialog: false
    }
  },
  computed: {
    StoreCart() {
      return this.$store.getters.cart;
    },
    cartCount() {
      return this.cart.length;
    },
    cart() {
      return this.$store.getters.cart.map(cartitems => {
        return this.$store.getters.products.find(itemForSale => {
          return cartitems === itemForSale.name;
        });
      });
    }
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
    }
  }
};
</script>

<style>
.butãozinho{
  float: right;
}
</style>