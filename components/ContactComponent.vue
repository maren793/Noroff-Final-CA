<template>
    <div class="[ container ]">
        <div class="[ row ]">
            <div class="[ col-sm-4 ]"></div>
            <div class="[ col-sm-4 ]">
            <div><h3>{{message}}</h3></div>

        <form>
            <input type="text" placeholder="Enter your firstname.." v-model="firstname" v-bind:class="{ 'error-border': inputFirstnameError }" class="form-control" />
            <div class="error" v-if="showFirstnameError">Please enter your firstname</div>
            <br />
            <input type="text" placeholder="Enter your lastname" v-model="lastname" v-bind:class="{ 'error-border': inputLastnameError }" class="form-control" />
            <div class="error" v-if="showLastnameError">Please enter your lastname</div>
            <br />
            <input type="number" placeholder="xxx-xxx-xxxx" v-model="phone" v-bind:class="{ 'error-border': inputPhoneError }" class="form-control"/>
            <div class="error" v-if="showPhoneError">Please enter a valid phone number</div>
            <br />
            <input type="text" placeholder="example@email.com" v-model="email" v-bind:class="{ 'error-border': inputEmailError }" class="form-control"/>
            <div class="error" v-if="showEmailError">Please enter a valid email address</div>
            <br />
            <button type="button" v-on:click.prevent="submit" class="[ btn ]">Submit</button>
        </form>
       </div> 
       </div>
    </div>
    </template>

    <script>
    export default {
        name: 'Contact',
        props: ['message', 'showFirstnameError', 'showLastError', 'showPhoneError', 'showEmailError', 'inputFirstnameError', 'inputLastnameError', 'inputPhoneError', 'inputEmailError'],
        methods: {
            submit: function() {
                const app = this;
                app.$emit('clicked', this.firstname, this.lastname, this.phone, this.email);
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