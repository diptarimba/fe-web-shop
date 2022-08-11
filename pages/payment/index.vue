<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Metode Pembayaran</div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="deliveryOptions" id="deliveryRadios2" value="option1" checked>
            <label class="address-title" for="deliveryRadios2">
                Dompet
            </label>
        </div>
        <div class="form-check mb-4">
            <input class="form-check-input" type="radio" name="deliveryOptions" id="deliveryRadios1" value="option1" checked>
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
        <hr>
        <div class="text-header my-4">Ringkasan Pesanan</div>
        <p class="order-summary">Sari Roti Tawar Jumbo
        <span class="order-summary-regular float-right">Rp. 90.000</span></p>
        <p class="order-summary">Tax
        <span class="order-summary-regular float-right">Rp. 4.400</span></p>
        <p class="order-summary">Payment Fee
        <span class="order-summary-regular float-right">Rp. 3.000</span></p>
        <p class="order-summary">Platform Fee
        <span class="order-summary-regular float-right">Rp. 3.000</span></p>
        <hr>
        <p class="order-summary">Total
        <span class="order-summary float-right">Rp. 100.400</span></p>
        <p class="mt-3 order-summary-regular">Pastikan bahwa Pesanan sudah benar. Barang yang sudah dipesan tidak dapat ditukar atau dikembalikan</p>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label " for="defaultCheck1">
            Saya menyatakan bahwa Pesanan yang saya buat sudah benar.
          </label>
        </div>
    </div>
    <div class="col-12 align-self-start p-0">
    </div>
    <div class="col-12 align-self-end p-0">
      <div class="row justify-content-center">
        <b-button type="submit" form="register-form" class="col-auto m-0 p-0 btn-xd"><span class="registrasi-xd">Belanja Lagi</span></b-button>
        <b-button type="submit" form="register-form" class="col-auto m-0 p-0 btn-xd"><span class="registrasi-xd">Lanjut</span></b-button>
      </div>
    </div>
</div>
</template>

<style>
.order-summary {
font-weight: 700;
font-size: 14px;
color: #000000DE;
letter-spacing: 0;
line-height: 17px;
}
.order-summary-regular {
font-weight: 400;
font-size: 14px;
color: #000000DE;
letter-spacing: 0;
line-height: 17px;
}
</style>

<script>
export default {
    layout: 'default',
    data() {
        return {
            message: ''
        }
    },
}
</script>
