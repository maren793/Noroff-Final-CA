<template>

    <header class="[ header ]">
        <nav class="[ navbar navbar-default ]">
            <div class="[ container ]">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="[ navbar-header ]">
                <button type="button" class="[ navbar-toggle collapsed ]" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="[ icon-bar ]"></span>
                    <span class="[ icon-bar ]"></span>
                    <span class="[ icon-bar ]"></span>
                </button>
                <a class="[ navbar-brand header__logo ]" href="/"> <h1><i class="[ fa fa-gamepad header__icon ]" aria-hidden="true"></i> Card Game</h1></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="[ collapse navbar-collapse ]" id="bs-example-navbar-collapse-1">
                <ul class="[ nav navbar-nav navbar__link ]">
                    <li><router-link to="/cards">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>

.header{
    font-size: 1.5em;
    padding: 15px;
    background-color: rgb(214, 41, 156);
    color: rgb(238, 238, 238);
    
    &__logo {
        color: rgb(238, 238, 238);
        margin: 0px;

        &:hover {
            color: rgb(0, 0, 0);
            transition: 0.4s;
        }
    }
    &__icon {
        display: inline-block;
        font-size: 2em;
    }
}

.navbar-nav{
    float: right;
}

.navbar-default{
    background-color: transparent;
    border: none;
}

.navbar-default .navbar-nav>li>a{
    color: rgb(238, 238, 238);

    &:hover {
     color: rgb(0, 0, 0);
    transition: 0.4s;
    }
}

</style>