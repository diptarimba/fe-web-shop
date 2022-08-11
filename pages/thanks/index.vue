<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-center p-0 text-center">
        <p class="mt-5 page-title">Selamat!</p>
        <p class="mt-3 sub-title">Pesanan kamu sudah diproses dengan nomor Pesanan 342631.Mohon siapkan dana sebesar:</p>
        <p class="mt-2 amount">Rp. 100.400</p>
        <p class="mt-3 sub-title">Dan berikan kepada kurir kami yang mengantar</p>
    </div>
    <div class="col-12 align-self-end text-center p-0">
        <b-button type="submit" form="register-form" class="col-12 mb-3 btn-xd"><span class="registrasi-xd">Tutup</span></b-button>
    </div>
</div>
</template>

<style>
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
</style>

<script>
export default {
    layout: 'default',
    data() {
        return {

        }
    },
}
</script>
