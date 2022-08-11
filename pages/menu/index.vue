<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
        <div class="row justify-content-between mt-3 mb-2">
            <div class="col-4">Deliver To<br>
                <nuxt-link :to="{path: '/'}" class="deliver-to">Warung Src</nuxt-link>
            </div>
            <div class="col-4 text-right">Order From<br><span class="order-from">Grosir 1</span></div>
        </div>
        <b-form-input class="input-rounded-xd mb-4" v-model="searchText" placeholder="Search"></b-form-input>
        <div class="scrolls mb-2">
            <b-button class="btn-sm menu-category-btn" variant="primary"><span>Makanan</span></b-button>
            <b-button class="menu-category-btn-inactive btn-sm mx-1" v-for="(value, index) in category" :key="index"><span>{{value.name}}</span></b-button>
        </div>
        <div v-for="(each, index) in good" :key="index" class="d-flex justify-content-start mb-1">
          <img :src="each.image" style="width: 30%;" class="img-reponsive rounded d-inline-flex">
          <div class="flex-fill p-0 m-0 row">
            <div class="col-12 ml-4 align-self-start">
            <div class="goods-title">{{each.name}}</div>
            <div class="goods-requirement">Min. Pembelian : {{each.min}}</div>
            </div>
            <div class="col-12 ml-2 align-self-end row justify-content-between">
            <div class="col align-self-center goods-price">{{each.price}}</div><b-button class="add-btn badge badge-pill">add</b-button>
            </div>
          </div>
        </div>
    </div>
    <div class="col-12 align-self-start text-center p-0">
    </div>
</div>
</template>

<style>
.deliver-to {
    font-weight: 400;
    font-size: 16px;
    color: #3F37C9;
    letter-spacing: 0;
    line-height: 19px;
}

.order-from {
    font-weight: 400;
    font-size: 16px;
    color: #41506D;
    letter-spacing: 0;
    line-height: 19px;
}

.menu-category-btn {
    background: #3F37C9;
}

.menu-category-btn>span {
    text-align: center;
    font-family: 'ArialMT';
    font-size: 16px;
    color: white;
    letter-spacing: 0px;
    line-height: 21.39px;
}

.menu-category-btn-inactive {
    background-color: white;
    border: 1px solid #3F37C9 !important;
    border-radius: 5px;
    opacity: 1;
}

.menu-category-btn-inactive:hover {
    background-color: white;
}

.menu-category-btn-inactive>span {
    text-align: center;
    font-family: 'ArialMT';
    font-size: 16px;
    color: #3F37C9;
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
font-weight: 700;
font-size: 18px;
color: #3F37C9;
letter-spacing: 0;
line-height: 22px;
}

.add-btn, .add-btn:hover {
  background: #3F37C9 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
}
</style>

<script>
export default {
    layout: 'default',
    data() {
        return {
            searchText: '',
            category: [{
                    name: 'Bakso'
                },
                {
                    name: 'Pempek'
                },
                {
                    name: 'Soto'
                },
                {
                    name: 'Pecel'
                },
            ],
            good: [
              { image: 'https://placeimg.com/300/300/any', name: 'Sachet Soto Ayam', min: 5, price: 18000},
              { image: 'https://placeimg.com/300/300/any', name: 'Sachet Soto Lamongan', min: 2, price: 16000},
              { image: 'https://placeimg.com/300/300/any', name: 'Sachet Soto Sokaraja', min: 4, price: 14000},
              { image: 'https://placeimg.com/300/300/any', name: 'Sachet Soto Tamanwinangun', min: 5, price: 12000},
              { image: 'https://placeimg.com/300/300/any', name: 'Sachet Soto Boyolali', min: 6, price: 12400},
              { image: 'https://placeimg.com/300/300/any', name: 'Sachet Bakso Urat', min: 2, price: 15300},
              { image: 'https://placeimg.com/300/300/any', name: 'Sachet Bakso Mercon', min: 2, price: 14500},
              { image: 'https://placeimg.com/300/300/any', name: 'Sachet Pecel Mercon', min: 2, price: 12100},
            ],
        }
    }
}
</script>
