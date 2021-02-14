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
        section2: {
          banner: [
            {
              class1: "m-0 p-0 col-lg-6 col-md-12 sec2BigImg",
              class2:
                "p-0 m-0 col-lg-6 col-md-12 sec2Txt d-flex flex-column align-items-start justify-content-center",
              src: "img/section2/top-left-ndls.png",
              alt: "left_noodles",
              h2: "Discount up to 50% All Menu",
              p:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem molestias, quo labore veritatis laborum sed vel accusantium aperiam delectus suscipit minus!",
              a: "#",
            },
            {
              class1:
                "order-lg-2 order-1 m-0 p-0 col-lg-6 col-md-12 sec2BigImg",
              class2:
                "order-lg-1 order-2 p-0 m-0 col-lg-6 col-md-12 sec2Txt d-flex flex-column align-items-start justify-content-center",
              src: "img/section2/bottom-left-ndls.png",
              alt: "right_noodles",
              h2: "January's Promo: Buy 1 Get 1 Free!",
              p:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem molestias, quo labore veritatis laborum sed vel accusantium aperiam delectus suscipit minus!",
              a: "#",
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
