<template>
  <transition name="slide" appear>
    <div class="modal">
      <v-card-title>Novo Prato</v-card-title>
      <v-input label="URL da imagem"></v-input>
      <v-input label="Nome do Prato"></v-input>
      <v-input label="Preço"></v-input>
      <v-input label="Descrição do Prato"></v-input>
      <v-btn color="success">Adicionar Prato</v-btn>
    </div>
  </transition>
</template>

<script>
export default {};
</script>
<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
}
</style>