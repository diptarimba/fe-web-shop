import Vue from "vue";

Vue.filter("truncate", (value, number) => {
  if (value.length > number) {
    return value.substring(0, number) + "...";
  } else {
    return value;
  }
});
