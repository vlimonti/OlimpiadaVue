<template>
    <tbody class="contador">
        <tr v-for="(team, index) in sortedTeams" :key="team.id">
            <td>{{ index+1 }}°</td>
            <td>{{ team.nome }}</td>
            <td>
                <span>{{ team.medalhas.ouro }}</span>
                <button @click="adicionar('ouro', team.id)">+</button>
                <button @click="subtrair('ouro', team.id)">-</button>
            </td>
            <td>
                <span>{{ team.medalhas.prata }}</span>
                <button @click="adicionar('prata', team.id)">+</button>
                <button @click="subtrair('prata', team.id)">-</button>
            </td>
            <td>
                <span>{{ team.medalhas.bronze }}</span>
                <button @click="adicionar('bronze', team.id)">+</button>
                <button @click="subtrair('bronze', team.id)">-</button>
            </td>
            <td>{{ team.medalhas.total }}</td>
        </tr>
    </tbody>
</template>

<script>


export default {
    props: {
        teams: {
            type: Array,
            required: true,
        }
    },
    methods: {
        adicionar(medalha, idTeam) {
            for(var i=0; i < this.teams.length; i++) {
                if(this.teams[i].id === idTeam) {
                    this.teams[i].medalhas[medalha]++
                    this.teams[i].medalhas.total++
                }
            }
        },
        subtrair(medalha, idTeam) {
            for(var i=0; i < this.teams.length; i++) {
                if(this.teams[i].id === idTeam) {
                    if (this.teams[i].medalhas[medalha] > 0) {
                        this.teams[i].medalhas[medalha]--
                        this.teams[i].medalhas.total--
                    }
                }
            }
        },
    },
    computed: {
        sortedTeams: function (){
            return this.teams.slice().sort(function(a, b){
                if (a.medalhas.total > b.medalhas.total)
                    return -1
                if (a.medalhas.total < b.medalhas.total)
                    return 1
                return 0
            });
        },
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
