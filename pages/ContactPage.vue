<template>
    <div>
     <HeaderComponent />   
        <ContactComponent   v-bind:showFirstnameError="showFirstnameError"
                            v-bind:showLastnameError="showLastnameError"
                            v-bind:showPhoneError="showPhoneError"
                            v-bind:showEmailError="showEmailError"
                            v-bind:inputFirstnameError="inputFirstnameError"
                            v-bind:inputLastnameError="inputLastnameError"
                            v-bind:inputPhoneError="inputPhoneError"
                            v-bind:inputEmailError="inputEmailError"
                            v-bind:message="message"
                            @clicked="onClickChild"
       ></ContactComponent>
    </div>
</template>

<script>
import ContactComponent from '../components/ContactComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
    name: 'ContactPage',
    components: {
        ContactComponent,
        HeaderComponent
    },

    data() {
      return {
            message: 'Contact us',
            showFirstnameError: false,
            showLastnameError: false,
            showPhoneError: false,
            showEmailError: false,
            inputFirstnameError: false,
            inputLastnameError: false,
            inputPhoneError: false,
            inputEmailError: false,
            firstname: String,
            lastname: String,
            phone: String,
            email: String
        }
    },
            methods: {
                onClickChild(firstname, lastname, phone, email) {
                    // Did not figure out the regex    
                    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var phoneRegex = /^([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

                    if(firstname === "" || firstname === undefined) {
                        this.showFirstnameError = true;
                        this.inputFirstnameError = true;
                    }
                    else {
                        this.showFirstnameError = false;
                        this.inputFirstnameError = false;
                    }

                    if(lastname === "" || lastname === undefined) {
                        this.showLastnameError = true;
                        this.inputLastnameError = true;
                    }
                    else {
                        this.showLastnameError = false;
                        this.inputLastnameError = false;
                    } 

                    if(phone === "" || phone === undefined) {
                        this.showPhoneError = true;
                        this.inputPhoneError = true;
                    }
                    else {
                        this.showPhoneError = false;
                        this.inputPhoneError = false;
                    }

                    if(email === "" || email === undefined) {
                        this.showEmailError = true;
                        this.inputEmailError = true;
                    }
                    else {
                        this.showEmailError = false;
                        this.inputEmailError = false;
                    }
                }
            }         
        }

</script>

