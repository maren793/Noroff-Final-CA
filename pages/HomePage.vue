<template>
    <div>
       <HeaderComponent /> 
       
     <!-- Search -->  
            <div class="[ container ]">
                <div class="[ row ]">
                    <div class="[ col-sm-12 ]">
                        <form class="[ relative ]">
                            <input type="text" v-model="searchTerm" class="[ form-control ]" placeholder="Search by name..."/>
                            <button class="[ btn ]" type="submit" @click.prevent="filterSearch">Search <i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
      <!-- Search End --> 

            <div class="[ row ]">
                <div v-bind:key="card.id" v-for="card in cards.cards" class="[ col-sm-4 ]">
                <CardComponent
                                v-bind:name="card.name"
                                v-bind:imageUrl="card.imageUrl"
                                v-bind:type="card.type"
                                v-bind:colors="card.colors"
                                v-bind:rarity="card.rarity"
                                v-bind:text="card.text"
                                v-bind:id="card.id"
                ></CardComponent>
                </div>
            </div>
            </div>
    
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import CardSpecificComponent from '../components/CardSpecificComponent.vue'


export default {
    name: 'HomePage',
    components: {
        CardComponent,
        HeaderComponent,
        CardSpecificComponent
    },
    data() {
        return {
            cards: [],
            searchTerm: '',
            filterSearch: [] 
        };
    },
    methods: {
        filterSearch: function() {
            const app = this;
            return this.cards.indexOf(this.searchTerm);  // check, error!
    }
    },
    

    beforeMount: function() {
        const app = this;
        if(!sessionStorage.getItem('sessionID')) {
            app.$router.push({name: 'login'});
        }

        const conversionUrl ='https://cors-anywhere.herokuapp.com/';
        const url = "https://api.magicthegathering.io/v1/cards";

        fetch(conversionUrl + url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            app.cards = result;
        });
    },   
}
</script>

 <style lang="scss" scoped>

input[type="text"] {
    width: 100%;
    border: solid 1px lightgrey;
    height: 45px;
    padding: 10px;
    outline: none;
    margin-top: 30px;
}

button {
    height: 45px;
    background-color: rgb(214, 41, 156);
    color: rgb(238, 238, 238); 
    border: none;
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 20px;
    margin-top: 30px;
}

</style>
