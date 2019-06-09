<template>
    <div>
      <HeaderComponent />
        <div class="[ container ]">
          <AboutComponent title="DEFEAT YOUR OPPONENT" />
        </div>
    </div>
</template>

<script>
import AboutComponent from '../components/AboutComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'


export default {
  name: 'AboutPage',
  components: {
    HeaderComponent,
    AboutComponent
  },
}
</script>