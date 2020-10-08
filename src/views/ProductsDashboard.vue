<template>
    <v-container>
        <ProductModal/>
        <v-row >
        <v-col cols="12" md="4" v-for="product in products" v-bind:key="product.id">
            <v-card class="card">
                <img
                    class="imagem"
                    :src="product.Url">
                <v-card-title class="food-title">
                    {{product.Name}}
                </v-card-title>
                <v-card-text>
                    <p class="food-description">
                        {{product.Description}}
                    </p>
                    <p class="food-price mt-8">
                        {{`R$ ${product.Price}`}}
                    </p>
                    <v-card-actions>
                        <v-icon class="mr-4">mdi-pencil</v-icon>
                        <v-btn @click="remove(product)" depressed >
                            <v-icon class="mr-4">mdi-delete</v-icon>
                        </v-btn>
                        
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-btn
        @click="send(product)" 
        class="switch"
        >Enviar Produtos ao Usuário</v-btn>
    </v-container>
</template>
<script>
import ProductModal from "../components/ProductModal"
import axios from 'axios'

export default {
    data(){
        return{
            products: null,}
    },
    components:{
        ProductModal
    },
    methods: {
        send(prodArray){
            this.$store.state.products.push(prodArray)
            console.log( this.$store.state.products)
        },
        getproducts(){
            axios.get('http://localhost:3333/prod').then(response => (this.products = response.data))
        },
        remove(product){
            axios.delete(`http://localhost:3333/prod${product.id}`)
        }
    },
    beforeMount(){
        this.getproducts()
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