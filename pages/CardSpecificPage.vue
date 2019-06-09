<template>
<div>
  <HeaderComponent />
<div class="[ container ]">

    <CardSpecificComponent />

  </div>
  </div>
</template>

<script>

import HeaderComponent from '../components/HeaderComponent.vue'
import CardSpecificComponent from '../components/CardSpecificComponent'


export default {
    name: 'CardSpecific',
    components: {
        HeaderComponent,
        CardSpecificComponent,
    },
}

</script>

<style lang="scss" scoped>



</style>