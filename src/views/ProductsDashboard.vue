<template>
    <v-container>
        <ProductModal/>
        <v-row >
        <v-col cols="12" md="4" v-for="(product, index) in products" :key="index">
            <v-card class="card">
                <img
                    class="imagem"
                    :src="product.url">
                <v-card-title class="food-title">
                    {{product.name}}
                </v-card-title>
                <v-card-text>
                    <p class="food-description">
                        {{product.description}}
                    </p>
                    <p class="food-price mt-8">
                        {{`R$ ${product.price}`}}
                    </p>
                    <v-card-actions>
                        <v-icon class="mr-4">mdi-pencil</v-icon>
                        <v-icon class="mr-4">mdi-delete</v-icon>
                        <v-switch 
                        class="switch"
                        label="Disponível" 
                        v-model="value"></v-switch>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>
<script>
import ProductModal from "../components/ProductModal"

export default {
    props: ["url", "name", "description", "price"],
    data(){
        return{
            value: ''}
    },
    components:{
        ProductModal
    },
    computed: {
        products(){
            return this.$store.getters.products
        }
    }
}
</script>
<style>
.switch{
    margin-left: auto;
}
.food-price{
    font-size: 20px;
    color: #39b100;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
}
.food-title{
    font-family: 'Poppins', sans-serif;
    font-size: 24px !important;
    font-weight: 500 !important;
    color: #3D3D4D;
}
.food-description{
    font-size: 16px !important;
    line-height: 26px;
    color: #3D3D4D;
}
.imagem{
  display: flex;
  padding-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  height: 180px;
  width: 360px;
}
.card{
    height: 568px
}

</style>