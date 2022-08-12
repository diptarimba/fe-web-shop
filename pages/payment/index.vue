<template>
  <div id="payment" class="container">
    <div class="row flex-grow-1 broder mx-auto">
      <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Metode Pembayaran</div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="deliveryOptions"
            id="deliveryRadios2"
            value="option1"
            checked
          />
          <label class="address-title" for="deliveryRadios2"> Dompet </label>
        </div>
        <div class="form-check mb-4">
          <input
            class="form-check-input"
            type="radio"
            name="deliveryOptions"
            id="deliveryRadios1"
            value="option1"
            checked
          />
          <label class="address-title" for="deliveryRadios1">
            Bayar dengan transfer VA
          </label>
          <ul class="bank-information">
            <li>Anda harus melakukan pembayaran dalam waktu 2x24 jam</li>
            <li>Pembayaran menggunakan kode bayar 16 angka</li>
            <li>Anda tidak dikenakan biaya admin</li>
          </ul>
          <span></span>
        </div>
        <hr />
        <div class="text-header mt-4 mb-3">Ringkasan Pesanan</div>
        <p class="order-summary">
          Sari Roti Tawar Jumbo
          <span class="order-summary-regular float-right">Rp. 90.000</span>
        </p>
        <p class="order-summary">
          Tax <span class="order-summary-regular float-right">Rp. 4.400</span>
        </p>
        <p class="order-summary">
          Payment Fee
          <span class="order-summary-regular float-right">Rp. 3.000</span>
        </p>
        <p class="order-summary">
          Platform Fee
          <span class="order-summary-regular float-right">Rp. 3.000</span>
        </p>
        <hr class="total" />
        <p class="order-summary">
          Total <span class="order-summary float-right">Rp. 100.400</span>
        </p>
        <p class="mt-4 order-summary-regular">
          Pastikan bahwa Pesanan sudah benar. Barang yang sudah dipesan tidak
          dapat ditukar atau dikembalikan
        </p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            Saya menyatakan bahwa Pesanan yang saya buat sudah benar.
          </label>
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-2 justify-content-between">
      <div class="col-6 pr-1">
        <b-button
          type="submit"
          form="register-form"
          class="w-100 btn-order"
          variant="outline-primary"
          >Belanja Lagi</b-button
        >
      </div>
      <div class="col-6 pl-1">
        <b-button
          type="submit"
          form="register-form"
          class="border-0 btn-next w-100"
          >Lanjut</b-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-summary {
  font-weight: 700;
  font-size: 14px;
  color: #000000de;
  letter-spacing: 0;
  line-height: 17px;
}
.order-summary-regular {
  font-weight: 400;
  font-size: 14px;
  color: #000000de;
  letter-spacing: 0;
  line-height: 17px;
}
.btn-next {
  background: #3f37c9 0% 0% no-repeat padding-box !important;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.btn-next:hover {
  background: #1f18b1 !important;
}
.btn-order {
  color: #3f37c9 !important;
  border: 1px inset #3f37c9 !important;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.btn-order:hover {
  background: #1f18b1 !important;
  color: white !important;
}
.address-title {
  font-weight: 600;
}
ul {
  padding-left: 10px;
  list-style-type: "-  ";
}
.form-check-label {
  font-size: 14px;
}
.total {
  border-top: 1.5px solid #707070 !important;
}
</style>

<script>
export default {
  layout: "default",
  data() {
    return {
      message: "",
    };
  },
};
</script>
