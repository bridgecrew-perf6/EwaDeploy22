<template>
  <div class="home">
    <div class="wrapper">
      <div class="shop">
    <div class="input-container">
      <input type="text" placeholder="Buchtitel" v-model="BookSearchString" />
    </div>
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer()"
    />
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in filteredBooks"
        :key="product.ProduktID"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>

    </div>
    <div class=cart>
      
<cart />
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import items from "../data/items.js";
import ProductSummaryCard from "../components/product/ProductSummaryCard.vue";
import ProductDescriptionDrawer from "../components/product/ProductDescriptionDrawer.vue";
import Cart from "./Cart.vue";
export default {
  name: "Home",
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer,
    Cart,
  },

  data() {
    return {
      items: [],
      product: null,
      active: {
        product_drawer: false,
      },
      books: [],
      BookSearchString: "",
    };
  },
  async mounted() {
    await fetch(
      "https://iws107.informatik.htw-dresden.de/ewa/g11/PHP/beleg_fetch.php"
    )
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    closeProductDrawer() {
      this.active.product_drawer = false;
    },
  },
  computed: {
    filteredBooks: function () {
      return this.items.filter((product) => {
        return product.Produkttitel.match(this.BookSearchString);
      });
    },
  },
};
</script>

<style>
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.input-container input {
  border: none;
  background: rgb(30, 65, 77);;
  color: white;
  padding: 6px 15px;
  font-size: 18px;
}
.wrapper {
  width: 100%;
  overflow: hidden;

}
.shop{
  float:left;
  width: 70%;

}
.cart{
  overflow: hidden;
}
</style>