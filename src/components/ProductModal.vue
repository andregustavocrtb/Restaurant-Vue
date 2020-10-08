<template>
  <v-row justify="center">
    <v-btn color="success" @click="dialog = true">Criar novo Prato</v-btn>
    <v-dialog v-model="dialog">
     <v-card class="card">
        <v-card-title>Novo Prato</v-card-title>
      <v-card-text>
          <v-text-field 
            background-color="#efefef"
            class="input"
            label="URL da imagem" 
            solo 
            v-model="product.Url"
            flat></v-text-field>
        <v-row>
          <v-col cols="12" md="9">
            <v-text-field 
              background-color="#efefef"
                class="input" 
                label="Nome do prato" 
                solo 
                v-model="product.Name"
                flat></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-text-field 
                background-color="#efefef"
                class="input" 
                label="Preço" 
                value="R$ " 
                solo 
                v-model="product.Price"
                flat></v-text-field>
            </v-col>
          </v-row>
        <v-text-field 
          background-color="#efefef"
          class="input" 
          label="Descrição do produto" 
          solo
          v-model="product.Description"
          flat></v-text-field>
        <v-btn color="success" @keypress.esc="!dialog" depressed class="button" @click="addToProducts(); dialog=!dialog">Adicionar Prato</v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</v-row>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      dialog: false,
      product:{
        Url: "",
        Name: "",
        Price: "",
        Description: ""
      }
    }
  }, methods:{
    addToProducts(){
      let data = {
        Url: this.product.Url,
        Name: this.product.Name,
        Price: this.product.Price,
        Description: this.product.Description}
      axios.post('http://localhost:3333/prod', data)
      .then(response => console.log(response), (e) => console.log(e.response))
    }
  }
};
</script>
<style>
.modal {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 736px;
  height:564px;
  
}
.card{
  background: #F0F0F5;
  border-radius: 8px;
}
.button{
  display: flex;
  align-self: center;
  padding: 15px;
  text-align: center;  
}
.input{
  padding: 15px;
}
</style>