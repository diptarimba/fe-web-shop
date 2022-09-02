<template>
  <div class="flex-grow-1 broder mx-auto container">
    <div class="align-self-start p-0">
      <div class="text-header my-4">Cart</div>
      <div v-for="(each, index) in itemsCart" :key="index" class="d-flex justify-content-start mb-3">
        <img :src="each.product_image" style="width: 30%" class="img-reponsive rounded d-inline-flex" />
        <div class="ml-3">
          <div class="goods-title">
            {{ $options.filters.truncate(each.product_name, 20) }}
          </div>
          <div class="goods-requirement mt-1 mb-4">
            Min. Pembelian : {{ each.minimum_order }}
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 text-center p-0 mt-5">
      <b-button type="submit" form="register-form" class="w-100 mb-3 btn-xd border-0"><span
          class="registrasi-xd">Selanjutnya</span></b-button>
    </div>
  </div>
</template>

<style scoped>
.goods-title {
  font-weight: 700;
  width: 201px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

img {
  max-height: 100px;
  object-fit: cover;
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

<script>
export default {
  layout: "default",
  data() {
    return {
      itemsCart: [],
    };
  },
  mounted() {
    let item_json = localStorage.getItem('cart_item');
    if (item_json != null) {
      this.itemsCart = JSON.parse(item_json)
    }
  },
  methods: {
    checkCart(id) {
      let data_cart_index = this.itemsCart.findIndex(x => x.product_id == id)
      return data_cart_index
    },
    addToCart(id, option) {
      let data_cart = this.itemsCart.find(x => x.product_id == id)
      let data_cart_index = this.itemsCart.findIndex(x => x.product_id == id)
      if (option == 'add') {
        if (data_cart != undefined) {
          let item = [...this.itemsCart]
          item[data_cart_index].counter = this.itemsCart[data_cart_index].counter + 1
          this.itemsCart = item
        } else {
          let item = [...this.itemsCart]
          data_cart.counter = 1
          item.push(data_cart)
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
      localStorage.setItem("cart_item", JSON.stringify(this.itemsCart));
    },
  }
};
</script>
