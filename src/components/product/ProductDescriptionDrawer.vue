<template>
  <div>
    <div
      class="drawer-background"
      :class="{ show: active }"
      @click="$emit('close-product-drawer')"
    />

    <div class="drawer" :class="{ show: active }">
      <div class="drawer-close" @click="$emit('close-product-drawer')">X</div>
      <div v-if="product" class="product-details">
        <img :src="product.LinkGrafik"  class="productimg"/>
        <h3 class="text-center">{{ product.Produkttitel }}</h3>
        <p class="description">{{ product.Kurzinhalt }}</p>
        <h3 class="text-center">{{ product.PreisNetto }} €</h3>

        <div class="cart-total" v-if="product_total">
          <h3>Im Einkaufswagen</h3>
          <h4>{{ product_total }}</h4>
        </div>
        <div class="button-container">
          <button class="remove" @click="removeFromCart()">-</button>
          <button class="add" @click="addToCart()">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "active"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
  },
  computed: {
    product_total() {
      console.log(this.$store.getters.productQuantity(this.product));
      return this.$store.getters.productQuantity(this.product);
    },
  },
};
</script>

<style>
.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display 0.5s;
}
.drawer-background.show {
  display: block;
}
.productimg{
  height: 300px;
  width: 70%;
}
.drawer {
  width: 95vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left 0.5s;
  z-index: 101;
  overflow-y: scroll;
}

.drawer.show {
  left: 0;
}

.drawer-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid gray;
  color: gray;
  width: 15px;
  float: right;
  cursor: pointer;
}

.drawer-close:hover {
  background-color: lightgray;
}

.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.description {
  padding: 20px;
  line-height: 1.5rem;
}
button {
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 0 5px 50px 5px;
  cursor: pointer;
}

@media (min-width: 500px) {
  .drawer {
    width: 450px;
  }
}
</style>