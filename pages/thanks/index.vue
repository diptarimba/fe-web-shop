<template>
  <div class="row flex-grow-1 broder mx-auto container">
    <div class="col-12 align-self-center p-0 text-center">
      <p class="page-title">Selamat!</p>
      <p class="my-4 sub-title">
        Pesanan kamu sudah diproses dengan nomor Pesanan
        <span class="text-order">20220728X4XZKm9</span>. <br />
        Mohon siapkan dana sebesar :
      </p>
      <p class="amount">Rp 90.400</p>
      <p class="mt-4 sub-title">Dan berikan kepada kurir kami yang mengantar</p>
    </div>
    <div class="col-12 align-self-end text-center p-0">
      <b-button
        type="submit"
        form="register-form"
        class="col-12 mb-3 btn-xd border-0"
        ><span class="registrasi-xd">Tutup</span></b-button
      >
    </div>
  </div>
</template>

<style scoped>
.page-title {
  font-weight: 700;
  font-size: 28px;
  color: #41506d;
  letter-spacing: 0;
  line-height: 16px;
}
.sub-title {
  font-weight: 400;
  font-size: 18px;
  color: #41506d;
  letter-spacing: 0;
  line-height: 22px;
}
.amount {
  font-weight: 700;
  font-size: 36px;
  color: #41506d;
  letter-spacing: 0;
  line-height: 43px;
}
.text-order {
  color: #41506d;
  font-weight: 600;
}
</style>

<script>
export default {
  layout: "default",
  data() {
    return {};
  },
};
</script>
