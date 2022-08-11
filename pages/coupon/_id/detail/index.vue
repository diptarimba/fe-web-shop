<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Kupon</div>
        <div class="coupon-detail-header mb-3">Potongan harga 25.000</div>
        <div class="coupon-detail-body mb-3">Dengan minimun berbelanja Rp 100.000 di Grosir 1</div>
        <div class="text-label-muted mb-4"><b-icon-stopwatch></b-icon-stopwatch> hingga 1 Agustus 2022</div>

        <div class="syarat-ketentuan-title mb-2">Syarat & Ketentuan</div>
        <ol>
          <li class="syarat-ketentuan-body mb-2" v-for="(value, index) in tnc" :key="index">{{value}}</li>
        </ol>
    </div>
    <div class="col-12 align-self-end text-center p-0">
        <b-button type="submit" form="register-form" class="col-12 mb-3 btn-xd"><span class="registrasi-xd">Gunakan</span></b-button>
    </div>
</div>
</template>

<style>
.coupon-detail-header{
  font-weight: 700;
  font-size: 24px;
  color: #3F37C9;
  letter-spacing: 0;
  line-height: 29px;

}

.coupon-detail-expired{
  font-weight: 700;
  font-size: 24px;
  color: #3F37C9;
  letter-spacing: 0;
  line-height: 29px;

}
.syarat-ketentuan-title {
  font-weight: 700;
  font-size: 16px;
  color: #41506D;
  letter-spacing: 0;
  line-height: 19px;
}
.syarat-ketentuan-body {
  font-weight: 400;
  font-size: 12px;
  color: #41506D;
  letter-spacing: 0;
  line-height: 16px

}
</style>

<script>
import { BIcon, BIconStopwatch } from 'bootstrap-vue'
export default {
    layout: 'default',
    components: {
    BIcon,
    BIconStopwatch
  },
    data() {
      return {
        searchText: '',
        tnc: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
          ]
      }
    }
}
</script>
