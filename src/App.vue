<template>
  <About/>
  <Equipment/>
  <Contact/>
</template>

<script>
import About from './components/About.vue'
import Equipment from './components/Equipment.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    About,
    Equipment,
    Contact
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@500&display=swap');
#app {
  font-family: 'Kaisei HarunoUmi', serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
