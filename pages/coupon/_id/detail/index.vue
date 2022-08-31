<template>
  <div id="coupon" class="container">
    <div class="row flex-grow-1 broder mx-auto">
      <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Kupon</div>
        <div class="coupon-detail-header mb-3">Potongan harga 25.000</div>
        <div class="coupon-detail-body">
          Dengan minimun berbelanja <br />
          Rp 100.000 di Grosir 1
        </div>
        <div class="d-flex text-label-muted my-4">
          <img src="/img/date.svg" height="16" alt="" />
          <p class="pl-2 mb-0">Berlaku hingga 1 Agustus 2022</p>
        </div>

        <div class="syarat-ketentuan-title">Syarat & Ketentuan</div>
        <ol>
          <li
            class="syarat-ketentuan-body mb-3"
            v-for="(value, index) in tnc"
            :key="index"
          >
            {{ value }}
          </li>
        </ol>
      </div>
      <div class="btn-use col-12 mt-5 align-self-end text-center p-0">
        <b-button
          type="submit"
          form="register-form"
          class="border-0 col-12 btn-xd"
          ><span class="registrasi-xd">Gunakan</span></b-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
#coupon {
  position: relative;
  height: 100vh;
  overflow: scroll;
}
.btn-use {
  position: sticky;
  bottom: 1rem;
}
::-webkit-scrollbar {
  display: none;
}
.coupon-detail-header {
  font-weight: 700;
  font-size: 24px;
  color: #3f37c9;
  letter-spacing: 0;
  line-height: 29px;
}

.coupon-detail-expired {
  font-weight: 700;
  font-size: 24px;
  color: #3f37c9;
  letter-spacing: 0;
  line-height: 29px;
}
.syarat-ketentuan-title {
  font-weight: 700;
  font-size: 16px;
  color: #41506d;
  letter-spacing: 0;
  line-height: 19px;
}
.syarat-ketentuan-body {
  font-weight: 400;
  font-size: 12px;
  color: #41506d;
  letter-spacing: 0;
  line-height: 16px;
  letter-spacing: 0.03em;
}
ol {
  padding: 20px 0 0 20px !important;
}
</style>

<script>
import { BIcon, BIconStopwatch } from "bootstrap-vue";
export default {
  layout: "default",
  components: {
    BIcon,
    BIconStopwatch,
  },
  data() {
    return {
      searchText: "",
      tnc: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      ],
    };
  },
};
</script>
