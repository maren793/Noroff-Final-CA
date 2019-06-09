 <template>
      <div class="[ card ]">
            <div class="[ card__details ]"><br />
                <h3> {{name}} </h3><br />
                <img :src="imageUrl"/><br />
                <router-link v-bind:to="'/cardSpecific/'+id" class="[ btn ]">View more</router-link>
            </div>
        </div>          
</template>

<script>

export default {
    name: 'CardComponent',
    props: ['imageUrl', 'name', 'type', 'color', 'rarity', 'text', 'id'],
}
</script>

<style lang="scss" scoped>

.card {
    background-color: rgb(247, 220, 247);
    border: solid 1px lightgrey;
    border-top: solid 15px rgb(214, 41, 156);
    margin-top: 30px;
    margin-left: 5px;
    padding: 15px;
}

.card:hover {
    box-shadow: 5px 5px 2.5px #888888;
    cursor: pointer;
}

img {
    border-radius: 10px;
    width: 100%;
}

.btn {
    background-color: rgb(214, 41, 156);
    color: white;
    width: 100%;
    border-radius: 0px;
    border: none;
    margin-top: 30px;
    padding: 15px;
    font-size: 19px;
    font-weight: bold;

}

.btn:hover {
       background-color: rgb(68, 67, 67);
       
        
    }

</style>
