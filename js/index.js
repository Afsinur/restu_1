const app = {
  data() {
    return {
      data: {
        section1: {
          img: "img/section1/bg_1.png",
          alt: "sec1-bg",
          topNoodles: [
            {
              img: "img/section1/nudals-1.png",
              alt: "nudals-1",
              h5: "Noodles",
              p: "Lorem ipsum dolor sit amet consectetur adipisicing..",
              balance: "$13",
            },
            {
              img: "img/section1/nudals-2.png",
              alt: "nudals-2",
              h5: "Noodles",
              p: "Lorem ipsum dolor sit amet consectetur adipisicing..",
              balance: "$13",
            },
            {
              img: "img/section1/nudals-3.png",
              alt: "nudals-3",
              h5: "Noodles",
              p: "Lorem ipsum dolor sit amet consectetur adipisicing..",
              balance: "$13",
            },
          ],
        },
      },
    };
  },

  methods: {},

  mounted() {},
};
Vue.createApp(app).mount("#app");
