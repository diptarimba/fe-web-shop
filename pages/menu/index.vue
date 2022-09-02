<template>
  <div id="menu">
    <div class="row flex-grow-1 broder mx-auto container">
      <div class="col-12 align-self-start p-0">
        <div class="headerrr py-3 border-bottom">
          <div class="row justify-content-between d-flex align-items-center mt-3 mb-2">
            <div class="col-6 flex-column d-flex">
              <small>Deliver To</small>
              <nuxt-link :to="{ path: '/' }" class="deliver-to">Warung Src</nuxt-link>
            </div>
            <div class="col-4 text-right">
              <small>Order From</small>
              <select class="custom-select text-right mt-0">
                <option selected>Grosir 1</option>
                <option value="1">Grosir 2</option>
                <option value="2">Grosir 3</option>
                <option value="3">Grosir 4</option>
              </select>
            </div>
          </div>
          <b-form-input class="input-rounded-xd mb-3" v-model="searchText" placeholder="Search"></b-form-input>
          <div class="scrolls">
            <b-button class="menu-category-btn-inactive btn-sm mx-1" v-for="(value, index) in categori" :key="index">{{
                value.category_name
            }}</b-button>
          </div>
        </div>

        <div v-for="(each, index) in products" :key="index" class="d-flex my-3">
          <img :src="each.product_image" style="width: 25%; max-height: 200px" class="img-reponsive rounded mr-3" />
          <div class="flex-grow-1">
            <div class="goods-title">
              {{ $options.filters.truncate(each.product_name, 23) }}
            </div>
            <div class="goods-requirement">
              Min. Pembelian : {{ each.minimum_order }}
            </div>
            <div class="d-flex justify-content-between align-items-center mt-4">
              <div class="goods-price">
                {{ each.price }}
              </div>
              <!-- button add -->

              <b-button v-on:click="addToCart(each.product_id, 'add')"
                :class="{ 'd-none': checkCart(each.product_id) != -1 }" class="add-btn border-0">Add</b-button>
              <!-- counter  -->
              <!-- end button add -->
              <!-- <Counter :counters="counter"
              v-on:click="addToCart(each.product_id)"
              :class="{'d-none': parseInt(counter) == 0}"
              /> -->
              <div class="btn-group" role="group" aria-label="Basic example"
                :class="{ 'd-none': checkCart(each.product_id) == -1 }">
                <button class="btns btn--minus rounded" @click="addToCart(each.product_id, 'remove')" type="button"
                  name="button">
                  -
                </button>
                <input class="quantity border-left-0 border-right-0" type="text" name="name"
                  :value="checkCart(each.product_id) == -1 ? 0 : itemsCart[checkCart(each.product_id)].counter" />
                <button class="btns btn--plus rounded" @click="addToCart(each.product_id, 'add')" type="button"
                  name="button">
                  +
                </button>
              </div>
              <!-- end counter  -->
            </div>
          </div>
        </div>
      </div>
      <div class="element-float col-12" :class="{ 'd-none': itemsCart.length == 0 }">
        <a href="/cart">
          <b-button class="menu-category-btn text-roboto-fams border-0" block><span class="float-left">
              <b-icon-cart3></b-icon-cart3> {{ itemsCart.length }} Items
            </span><span class="float-right">Rp. {{ productTotal }}</span></b-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BIcon, BIconCart3 } from "bootstrap-vue";
const mutations = {
  changeOrAdd(state, { key, value }) {
    Vue.set(state.data, key, value)
  }
}
export default {
  name: "MenuIndex",
  layout: "default",
  components: {
    BIcon,
    BIconCart3,
  },
  data() {
    return {
      phone: '',
      counter: 0,
      priceTotal: 0,
      productTotal: 0,
      itemsCart: [],
      searchText: "",
      categories: [],
      categori: [
        {
          category_name: "MAKANAN",
        },
        {
          category_name: "MINUMAN",
        },
        {
          category_name: "SEMBAKO DAN BUMBU",
        },
        {
          category_name: "OBAT DAN VITAMIN",
        },
      ],
      products: [
        {
          product_id: 1,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Kacang Kuaci Permen",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 2,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Permen Yupi Manis",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 3,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Beras tidak sembarang beras",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 4,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Cokelat Manis",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 5,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Mineral Ada Manis Manisnya",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 6,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Harmony Bukan Makanan",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 7,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Susu Cokelat UHUY",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 8,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Seblak Kemasan",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 9,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Pedas Tapi Bukan Seblak",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 10,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Choco Ronde",
          minimum_order: 0,
          price: 1000,
        },
        {
          product_id: 11,
          product_image:
            "https://cdn-2.tstatic.net/manado/foto/bank/images/import-beras.jpg",
          product_name: "Wedang Bajigur Sachet",
          minimum_order: 0,
          price: 1000,
        },
      ],
    };
  },
  mounted() {
    let item_json = localStorage.getItem('cart_item');
    if (item_json != null) {
      this.itemsCart = JSON.parse(item_json)
    }
    this.getPricetotal();
  },
  methods: {
    async login(){
      try {

        await this.$auth.loginWith('local', {
          data: {
            phoneNumber: this.phone,
            deviceId: "44616cf8bc790f",
            secretKey: "116b52f9a9051390d1c1ddbf65666305"
          },
        }).then(data => {
          console.log(data)
        })

        this.$router.push('/menu')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    refreshCategory() {
      this.$axios.get("/category/product").then((response) => {
        if (response.data.status === "OK") {
          this.categories = response.data.data;
        }
      });
    },
    refreshMenu() {
      this.$axios.get("/products").then((response) => {
        if (response.data.status === "OK") {
          this.products = response.data.data;
        }
      });
    },
    productDetail(id) {
      this.$router.push({ name: "menu-id", params: { id: id } });
    },
    getPricetotal() {
      let total = 0
      if (this.itemsCart.length > 0) {
        for (let index = 0; index < this.itemsCart.length; index++) {
          const element = this.itemsCart[index];
          total += (element.price * element.counter)
        }
      }
      this.productTotal = total
    },
    checkCart(id) {
      let data_cart_index = this.itemsCart.findIndex(x => x.product_id == id)
      return data_cart_index
    },
    addToCart(id, option) {
      let data_cart = this.itemsCart.find(x => x.product_id == id)
      let data_cart_index = this.itemsCart.findIndex(x => x.product_id == id)
      let data_product = this.products.find(x => x.product_id == id)
      if (option == 'add') {
        if (data_cart != undefined) {
          let item = [...this.itemsCart]
          item[data_cart_index].counter = this.itemsCart[data_cart_index].counter + 1
          this.itemsCart = item
        } else {
          let item = [...this.itemsCart]
          data_product.counter = 1
          item.push(data_product)
          this.itemsCart = item
        }
      }
      if (option == 'remove') {
        if (data_cart != undefined) {
          let total = this.itemsCart[data_cart_index].counter
          if (total <= 1) {
            let item = [...this.itemsCart]
            item.splice(data_cart_index, 1)
            this.itemsCart = item
          } else {
            this.itemsCart[data_cart_index].counter = this.itemsCart[data_cart_index].counter - 1
          }

        }
      }
      this.getPricetotal()
      localStorage.setItem("cart_item", JSON.stringify(this.itemsCart));
      // this.$nuxt.refresh()
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
    },
  },
  created() {
    this.phone = this.$route.query.phone ?? '';
    this.login()
    // this.refreshMenu();
    // this.refreshCategory();
  },
};
</script>

<style scoped>
.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  font-size: 14px;
  color: #43484d;
  font-weight: 300;
  border: 1px solid #e1e8ee;
  width: 30px;
}

.btns {
  border: 1px solid #e1e8ee;
  /*   border-radius: 6px; */
  cursor: pointer;
  width: 30px;
  background: none;
}

input {
  font-size: 14px;
}

select {
  font-size: 16px;
}

select:focus {
  outline: none;
  box-shadow: none;
}

.custom-select {
  border: none;
  padding: 0 1.75rem 0 0;
  height: auto;
  background: #fff url("/img/drop.svg") right 0.75rem center/8px 10px no-repeat;
}

::-webkit-scrollbar {
  display: none;
}

#menu {
  position: relative;
  height: 100vh;
  overflow: scroll;
}

.headerrr {
  position: sticky;
  top: 0;
  background: white;
  z-index: 999;
}

.img-reponsive {
  object-fit: cover;
}

.element-float {
  position: sticky;
  bottom: 1rem;
  align-self: flex-end;
}

select {
  border: none;
}

.deliver-to {
  font-weight: 400;
  font-size: 16px;
  color: #3f37c9;
  letter-spacing: 0;
  text-decoration: underline;
}

.order-from {
  font-weight: 400;
  font-size: 16px;
  color: #41506d;
  letter-spacing: 0;
  line-height: 19px;
}

.text-roboto-fams {
  font-family: "Roboto" !important;
}

.menu-category-btn {
  background: #3f37c9;
  border-radius: 10px;
  padding: 0.75rem 1rem;
}

.menu-category-btn>span {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
  letter-spacing: 0.02em;
  line-height: 21.39px;
}

.menu-category-btn-inactive {
  background-color: white;
  border: 1px solid #3f37c9 !important;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  font-size: 11px;
  color: #3f37c9;
  letter-spacing: 0px;
  line-height: 21.39px;
}

.menu-category-btn-inactive:focus,
.menu-category-btn-inactive:hover {
  background-color: #3f37c9;
  color: white;
}

.scrolls {
  overflow-x: scroll !important;
  overflow-y: hidden;
  height: 100%;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 360px;
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
  text-overflow: ellipsis;
  overflow: hidden;
  /* white-space: nowrap; */
}

.add-btn,
.add-btn:hover {
  background: #3f37c9 0% 0% no-repeat padding-box;
  border-radius: 3px;
  padding: 0.08rem 1rem;
  opacity: 1;
  font-size: 14px;
}

.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  font-size: 14px;
  color: #43484d;
  font-weight: 300;
  border: 1px solid #e1e8ee;
  width: 30px;
}

.btns {
  border: 1px solid #e1e8ee;
  /*   border-radius: 6px; */
  cursor: pointer;
  width: 30px;
  background: none;
}

button:focus,
input:focus {
  outline: 0;
}
</style>
