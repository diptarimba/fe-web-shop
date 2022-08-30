<template>
  <div class="container">
    <div class="row flex-grow-1 broder mx-auto overflow-hidden">
      <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Kupon</div>
        <b-form-input
          class="input-rounded-xd search-button mb-4"
          v-model="searchText"
          placeholder="Search"
        ></b-form-input>
        <b-card
          class="input-rounded-xd mb-3 coupon-card border"
          v-for="(each, index) in listCoupon"
          :key="index"
        >
          <!-- <b-card-body> -->
          <div class="col-12 px-2">
            <b-card-title class="card-coupon-title">{{
              each.title
            }}</b-card-title>
            <b-card-text class="card-coupon-body">{{
              each.description
            }}</b-card-text>
            <div class="line"></div>
            <div class="d-flex align-items-center mt-2">
              <img src="/img/exp.svg" width="16" alt="" />
              <b-card-text class="text-label-muted pl-2">{{
                each.expired
              }}</b-card-text>
            </div>
            <div class="circle1"></div>
            <div class="circle2"></div>
          </div>
          <!-- </b-card-body> -->
        </b-card>
      </div>
      <div class="col-12 align-self-start text-center p-0"></div>
      <div class="col-12 align-self-start text-center p-0"></div>
    </div>
  </div>
</template>

<style scoped>
.card-coupon-title {
  font-weight: 700;
  font-size: 24px;
  text-align: left;
  color: #3f37c9;
  letter-spacing: 0;
  line-height: 29px;
}

.card-coupon-body {
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  letter-spacing: 0;
  line-height: 18px;
}
.line {
  border: 1px dashed #dee2e6;
  opacity: 0.6;
}
.coupon-card {
  position: relative;
}
.circle1,
.circle2 {
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  border: 1px solid #dee2e6 !important;
  top: 50%;
  transform: translateY(-50%);
}
.circle1 {
  left: -45px;
}
.circle2 {
  right: -45px;
}
</style>

<script>
export default {
  layout: "default",
  data() {
    return {
      searchText: "",
      listCoupon: [
        {
          title: "Potongan harga 25.000 1",
          description: "Dengan minimun berbelanja Rp 100.000 di Grosir 1",
          expired: "Berlaku hingga 29 Agustus 2022",
        },
        {
          title: "Potongan harga 25.000 2",
          description: "Dengan minimun berbelanja Rp 100.000 di Grosir 1",
          expired: "Berlaku hingga 30 Agustus 2022",
        },
        {
          title: "Potongan harga 25.000 3",
          description: "Dengan minimun berbelanja Rp 100.000 di Grosir 1",
          expired: "Berlaku hingga 31 Agustus 2022",
        },
        {
          title: "Potongan harga 25.000 4",
          description: "Dengan minimun berbelanja Rp 100.000 di Grosir 1",
          expired: "Berlaku hingga 32 Agustus 2022",
        },
      ],
    };
  },
};
</script>
