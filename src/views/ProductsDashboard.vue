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
export default {
    
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
</style>