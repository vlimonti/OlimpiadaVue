<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
    <div v-if="result == true" 
        :class="cls"
        class="resultado">{{ msg }}</div>
  </div>
</template>

<script>
let posicao = 0;

export default {
    data() {
        return {
        contador: 0,
        result: false,
        msg: '',
        cls: ''
        }
    },
    computed: {
        hasResult() {
            return this.contador == 10
        }
    },
    methods: {
        adicionar() {
            if (this.result == false) {
                this.contador++
            }
        },
        subtrair() {
            if (this.result == false) {
                if (this.contador > 0) {
                    this.contador--
                }
            }
        }
    },
    watch: {
        hasResult(value) {
            if (value) 
                posicao++
                this.msg = posicao+"° Lugar"
                this.result = true
                if(posicao == 1)
                    this.cls = 'ouro'
                else if(posicao == 2)
                    this.cls = 'prata'
                else if (posicao == 3)
                    this.cls = 'bronze'
                else 
                    this.cls = ''
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
</style>
