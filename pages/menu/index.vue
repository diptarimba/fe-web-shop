<template>
  <div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
      <div class="row justify-content-between mt-3 mb-2">
        <div class="col-4">
          Deliver To<br />
          <nuxt-link :to="{ path: '/' }" class="deliver-to"
            >Warung Src</nuxt-link
          >
        </div>
        <div class="col-4 text-right">
          Order From<br /><span class="order-from">Grosir 1</span>
        </div>
      </div>
      <b-form-input
        class="input-rounded-xd mb-4"
        v-model="searchText"
        placeholder="Search"
      ></b-form-input>
      <div class="scrolls mb-2">
        <b-button class="btn-sm menu-category-btn" variant="primary"
          ><span>Makanan</span></b-button
        >
        <b-button
          class="menu-category-btn-inactive btn-sm mx-1"
          v-for="(value, index) in categories"
          :key="index"
          ><span>{{ value.category_name }}</span></b-button
        >
      </div>
      <div
        v-for="(each, index) in products"
        :key="index"
        class="d-flex justify-content-start my-3"
        v-on:click="productDetail(each.product_id)"
      >
        <img
          :src="each.product_image"
          style="width: 30%; max-height: 200px;"
          class="img-reponsive rounded d-inline-flex"
        />
        <div class="flex-fill p-0 m-0 row">
          <div class="col-12 ml-4 align-self-start">
            <div class="goods-title">{{ each.product_name }}</div>
            <div class="goods-requirement">Min. Pembelian : {{ each.minimum_order }}</div>
          </div>
          <div class="col-12 ml-2 align-self-end row justify-content-between">
            <div class="col align-self-center goods-price">
              {{ each.price }}
            </div>
            <b-button v-on:click="addToCart(each.product_id)" class="add-btn badge badge-pill">add</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 align-self-start text-center p-0"></div>
    <div class="element-float col-12"><b-button class="menu-category-btn text-roboto-fams" block><span class="float-left"><b-icon-cart3></b-icon-cart3> {{ productTotal }} Items</span><span class="float-right">Rp. {{priceTotal}}</span></b-button></div>
  </div>
</template>

<script>
import axios from "axios";
import { BIcon, BIconCart3 } from 'bootstrap-vue'
export default {
  name: 'MenuIndex',
  layout: "default",
  components: {
    BIcon,
    BIconCart3
  },
  data() {
    return {
      priceTotal: 0,
      productTotal: 0,
      itemsCart: [],

      searchText: "",
      categories: [],
      // products: [],
      products: [
        {product_id: 1, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 2, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 3, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 4, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 5, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 6, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 7, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 8, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 9, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 10, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000},
        {product_id: 11, product_image: 'https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg', product_name: 'Makanan Panajang Pokoknya', minimum_order: 0, price: 1000}
      ],
    };
  },
  methods: {


    refreshCategory()
    {
      this.$axios.get('/category/product').then(response => {
        if(response.data.status === 'OK')
        {
          this.categories = response.data.data;
        }
      })
    },

    refreshMenu()
    {
      this.$axios.get('/products').then(response => {
        if(response.data.status === 'OK')
        {
          this.products = response.data.data;
        }
      })
    },
    productDetail(id){
      this.$router.push({ name: 'menu-id', params: { id: id } })
    },
    productCategoryById(id)
    {

    },
    addToCart(id)
    {
      // let item_json = localStorage.getItem('cart_item') || '{}';
      // var item = JSON.parse(item_json);
      // if (this.item_count === 0) {
      //     delete item[this.selectedItem.id];
      //     localStorage.setItem("cart_item", JSON.stringify(item));
      // } else {
      //     if (!item[this.selectedItem.id]) {
      //         item[this.selectedItem.id] = {};
      //     }
      //     item[this.selectedItem.id].item_id = this.selectedItem.id;
      //     item[this.selectedItem.id].name = this.selectedItem.name;
      //     item[this.selectedItem.id].price = this.selectedItem.price;
      //     item[this.selectedItem.id].count = this.item_count;
      //     item[this.selectedItem.id].stock = this.selectedItem.stock;
      //     item[this.selectedItem.id].picture = this.selectedItem.picture;
      //     item[this.selectedItem.id].note = this.selectedItem.note;
      //     localStorage.setItem("cart_item", JSON.stringify(item));
      // }
      // var total = 0;
      // for (const i in item) {
      //     total = parseInt(total) + parseInt(item[i].count);
      // }
      // localStorage.setItem("cart_total_count", total);
      // this.closeModal();
    }
  },
  created() {
    // this.refreshMenu();
    this.refreshCategory();
  }
};
</script>



<style>
.element-float {
  position: sticky;
  bottom: 1rem;
  align-self: flex-end;
}
.deliver-to {
  font-weight: 400;
  font-size: 16px;
  color: #3f37c9;
  letter-spacing: 0;
  line-height: 19px;
}

.order-from {
  font-weight: 400;
  font-size: 16px;
  color: #41506d;
  letter-spacing: 0;
  line-height: 19px;
}

.text-roboto-fams {
  font-family: 'Roboto' !important;
}

.menu-category-btn {
  background: #3f37c9;
}

.menu-category-btn > span {
  text-align: center;
  font-family: "ArialMT";
  font-size: 16px;
  color: white;
  letter-spacing: 0px;
  line-height: 21.39px;
}

.menu-category-btn-inactive {
  background-color: white;
  border: 1px solid #3f37c9 !important;
  border-radius: 5px;
  opacity: 1;
}

.menu-category-btn-inactive:hover {
  background-color: white;
}

.menu-category-btn-inactive > span {
  text-align: center;
  font-family: "ArialMT";
  font-size: 16px;
  color: #3f37c9;
  letter-spacing: 0px;
  line-height: 21.39px;
}

.scrolls {
  overflow-x: scroll;
  overflow-y: hidden;
  height: 100%;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrolls::-webkit-scrollbar {
  display: none;
}
.goods-title {
  max-width: 100%;
  font-weight: 700;
  font-size: 18px;
  color: #3f37c9;
  letter-spacing: 0;
  line-height: 22px;

  text-overflow: ellipsis;
  overflow: hidden;
  /* white-space: nowrap; */
}

.add-btn,
.add-btn:hover {
  background: #3f37c9 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
}
</style>
