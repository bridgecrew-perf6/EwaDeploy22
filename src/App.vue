<template>
  <div>
    <div id="nav">
      
      <router-link :class="{ active: $route.name === 'Home' }" to="/"
        >Startseite</router-link
      >
      <router-link :class="{ active: $route.name === 'Cart' }" to="/cart"
        >Warenkorb</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  background-color: rgb(243, 243, 243);
}

#nav {
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: rgb(79, 160, 187);;
  line-height: 30px;
}

#nav a {
  font-weight: bold;
  color: rgb(82, 82, 82);
  text-decoration: none;
  margin: 0 5px 0 5px;
  font-size: 1.25rem;
}

#nav a.active {
  color: #000000;
}

.text-center {
  text-align: center;
}
</style>
