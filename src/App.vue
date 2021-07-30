<template>
  <div id="app">
    <div class="titulo">
      <h1>Olimpíada</h1>
      <small>Objetivo: Chegar a 10 pontos!</small>
    </div>
    <div>
      <hr>
      <label>Equipe 1</label><app-contador></app-contador>
      <hr>
      <label>Equipe 2</label><app-contador></app-contador>
      <hr>
      <label>Equipe 3</label><app-contador></app-contador>
      <hr>
      <label>Equipe 4</label><app-contador></app-contador>
      <hr>
      <label>Equipe 5</label><app-contador></app-contador>
      <hr>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  label {
    font-weight: 600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0px 0px 0px 0px;
  }

  .titulo {
    margin: 10px 0px 30px 0px;
  }
</style>
