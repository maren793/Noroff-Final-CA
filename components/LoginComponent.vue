<template>
    <div class="[ row ]">
        <div class="[ col-sm-4 ]"></div>
        <div class="[ col-sm-4 ]">
            <div>
            <h3>{{message}}</h3>
        </div>
        <form>
            <input type="text" placeholder="Username" v-model="username" v-bind:class="{ 'error-border': inputUsernameError }" class="form-control" />
            <div class="error" v-if="showUsernameError">Please enter a correct username</div>
            <br />
            <input type="password" placeholder="Password" v-model="password" v-bind:class="{ 'error-border': inputPasswordError }" class="form-control"/>
            <div class="error" v-if="showPasswordError">Please enter a correct password</div>
            <br />
            <button type="button" v-on:click="login" class="[ btn ]">Login</button>
        </form>
       </div> 
    </div>
    </template>

    <script>
    export default {
        name: 'Login',
        props: ['message', 'showUsernameError', 'showPasswordError', 'inputUsernameError', 'inputPasswordError'],
        methods: {
            login: function() {
                const app = this;
                app.$emit('clicked', this.username, this.password);
            }
        }
     }
</script>

<style scoped>
.error{
    color: red;
}

.error-border{
    border: solid 1px red;
}
</style>