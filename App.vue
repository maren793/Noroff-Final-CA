<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// Set storage variables for username and password.

        (function() {
            localStorage.setItem('username', 'Maren');
            localStorage.setItem('password', '@4321');
        })();

export default {
  name: 'app'
}
</script>

// global styles

<style lang="scss">

#app {
  height: 100%;
  background-color: whitesmoke;
  font-family: 'Noto Sans', sans-serif;
}

body {
  height: 100%;
  max-width: 1400px;
  margin: auto;
}

h1, h2, h3, h4 {
  font-family: 'Righteous', cursive;
  text-align: center;
}





</style>



