<template>
  <div class="card">
     <img :src="product.LinkGrafik"  class="productimg"/>
    <h3>{{ product.Produkttitel }}</h3>
    <h5 class="price">Preis Netto:{{ product.PreisNetto }} €</h5>
    <p class="description">Kurzbeschreibung: {{ description }}</p>
    <p class="text-muted">{{ product.Autorname }}</p>
    <button class="view-product-button" @click="$emit('view-product', product)">
      Produktanzeige
    </button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.Kurzinhalt.substring(0, 150);
    },
  },
};
</script>

<style>
.card {
  width: 80%;
  margin: 10%;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px gray;
}
.productimg{
  height:250px;
  width: 250px;
}
.price {
  color: gray;
}
.description {
  font-size: 0.85rem;
}
.text-muted {
  color: gray;
}
button.view-product-button {
  padding: 10px;
  background-color: rgb(79, 160, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
  cursor: pointer;
}

@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}
</style>
