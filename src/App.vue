<template>
  <div id="app">
    HEllo0k
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import '@/assets/styles/base.css'; // Import global base styles
@import '@/assets/styles/components.scss'; // Import component styles

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: $primary-color; // Example use of primary color variable
}

main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
</style>