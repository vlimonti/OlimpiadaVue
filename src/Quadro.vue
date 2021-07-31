<template>
  <div class="contador">
      <input type="text" v-model="newTeam" placeholder="Add Equipe">
      <input type="number" v-model="newOuro" placeholder="Qtde Ouro">
      <input type="number" v-model="newPrata" placeholder="Qtde Prata">
      <input type="number" v-model="newBronze" placeholder="Qtde Bronze">
      <button @click="addEquipe()">+</button>
      <hr>
      <table class="tabela-medalhas">
          <thead>
              <tr>
                  <td>Posição</td>
                  <td>Equipe</td>
                  <td class="ouro">Ouro</td>
                  <td class="prata">Prata</td>
                  <td class="bronze">Bronze</td>
                  <td>Total</td>
              </tr>
          </thead>
          <app-contador :teams="equipe"></app-contador>        
      </table>
  </div>
</template>

<script>
import Contador from './Contador.vue'

export default {
    data: function () {
        return {
            equipe: [{
                id: 1,
                nome: "Brasil",
                medalhas: {
                    ouro: 0,
                    prata: 0,
                    bronze: 0,
                    total: 0
                }
            }],
            newId: 2,
            newTeam: '',
            newOuro: 0,
            newPrata: 0,
            newBronze: 0
        };
    },
    components: {
        appContador: Contador
    },
    methods: {
        addEquipe() {
            let qtdOuro = this.newOuro < 0 ? 0 : this.newOuro
            let qtdPrata = this.newPrata < 0 ? 0 : this.newPrata
            let qtdBronze = this.newBronze < 0 ? 0 : this.newBronze

            this.equipe.push({
                id: this.newId++,
                nome: this.newTeam,
                medalhas: {
                    ouro: qtdOuro,
                    prata: qtdPrata,
                    bronze: qtdBronze,
                    total: (parseInt(qtdOuro) + parseInt(qtdPrata) + parseInt(qtdBronze))
                }
            });
        }
    }
}
</script>

<style>
    .contador span {
    border-bottom: 1px solid #ccc;
    height: 30px;
    padding: 5px 25px;
    }

    .contador button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    color: white;
    margin-left: 10px;
    outline: none;
    }

    .resultado {
        background-color: white;
        color: black;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        width:20%;
    }

    .ouro {
        background-color: rgb(243, 227, 6);
        color: black;
    }

    .prata {
        background-color: rgb(201, 201, 201);
        color: black;
    }

    .bronze {
        background-color: rgb(177, 134, 41);
        color: black;
    }

    .tabela-medalhas {
        width: 100%;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>
