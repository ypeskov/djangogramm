import { ref as s, openBlock as o, createElementBlock as c, createElementVNode as t, toDisplayString as i, createApp as a } from "vue";
const l = { class: "mb-3" }, r = { class: "ms-3" }, p = {
  __name: "Like",
  setup(_) {
    const e = s(0);
    function n() {
      e.value++;
    }
    return (m, k) => (o(), c("div", l, [
      t("button", {
        class: "btn btn-primary",
        onClick: n
      }, "Like"),
      t("span", r, i(e.value) + " likes", 1)
    ]));
  }
};
a({
  components: {
    Like: p
  }
}).mount("#app");
