<template>
    <v-container>
        <v-row >
        <v-col cols="12" md="4">
            <v-card>
                <v-img
                    height="auto"
                    width="auto"
                    src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food2.png">

                </v-img>
                <v-card-title class="food-title">
                    Nome do Prato
                </v-card-title>
                <v-card-text>
                    <p class="food-description">
                        Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Molestiae amet nam 
                    debitis excepturi nostrum distinctio 
                    minus minima magnam voluptas dolore 
                    earum ab nihil saepe, praesentium id 
                    tempora suscipit voluptates. Amet?
                    </p>
                    <p class="food-price mt-8">
                        R$26,50
                    </p>
                    <v-card-actions>
                        <v-icon class="mr-4">mdi-cart</v-icon>
                        <p class="label">Adicionar ao Carrinho</p>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="4">
            <v-card>
                <v-img
                    height="auto"
                    width="auto"
                    src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food2.png">

                </v-img>
                <v-card-title class="food-title">
                    Nome do Prato
                </v-card-title>
                <v-card-text>
                    <p class="food-description">
                        Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Molestiae amet nam 
                    debitis excepturi nostrum distinctio 
                    minus minima magnam voluptas dolore 
                    earum ab nihil saepe, praesentium id 
                    tempora suscipit voluptates. Amet?
                    </p>
                    <p class="food-price mt-8">
                        R$26,50
                    </p>
                    <v-card-actions>
                        <v-icon class="mr-4">mdi-cart</v-icon>
                        <p class="label">Adicionar ao Carrinho</p>                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="4">
            <v-card>
                <v-img
                    height="auto"
                    width="auto"
                    src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food2.png">

                </v-img>
                <v-card-title class="food-title">
                    Nome do Prato
                </v-card-title>
                <v-card-text>
                    <p class="food-description">
                        Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Molestiae amet nam 
                    debitis excepturi nostrum distinctio 
                    minus minima magnam voluptas dolore 
                    earum ab nihil saepe, praesentium id 
                    tempora suscipit voluptates. Amet?
                    </p>
                    <p class="food-price mt-8">
                        R$26,50
                    </p>
                    <v-card-actions>
                        <v-icon class="mr-4">mdi-cart</v-icon>
                        <p class="label">Adicionar ao Carrinho</p>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="4">
            <v-card>
                <v-img
                    height="auto"
                    width="auto"
                    src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food2.png">

                </v-img>
                <v-card-title class="food-title">
                    {{ name }}
                </v-card-title>
                <v-card-text>
                    <p class="food-description">{{ description }}
                    </p>
                    <span class="food-price mt-8">
                        {{R$ + price }}
                    </span>
                    <v-card-actions>
                        <v-icon class="mr-4">mdi-cart</v-icon>
                        <md-button class="label" @click="addToCart(name)">Adicionar ao Carrinho</md-button>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {
    name: "product",
    props: ["url", "name", "price", "description"],
    methods:{
        addToCart(name){
            this.$store.dispatch("addToCart", name)
        }
    }
}
</script>
<style>
.label{
    padding-top: 20px;
    padding-right: 15px;

}
</style>