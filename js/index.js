const app = {
  data() {
    return {
      data: {
        section1: {
          img1: "img/section1/bg_1.png",
          img2: "img/section1/bg_2.png",
          alt1: "sec1-bg",
          alt2: "sec1-bg",
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
              class1: "m-0 p-0 col-lg-6 col-md-12 sec2BigImg position-relative",
              class2:
                "p-0 m-0 col-lg-6 col-md-12 sec2Txt d-flex flex-column align-items-start justify-content-center",
              src: "img/section2/top-left-ndls.png",
              alt: "left_noodles",
              aboluteSrc: "img/section2/top-left-D.png",
              aboluteAlt: "top-left-D",
              h2: "Discount up to 50% All Menu",
              p:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem molestias, quo labore veritatis laborum sed vel accusantium aperiam delectus suscipit minus!",
              a: "#",
            },
            {
              class1:
                "order-lg-2 order-1 m-0 p-0 col-lg-6 col-md-12 sec2BigImg position-relative",
              class2:
                "order-lg-1 order-2 p-0 m-0 col-lg-6 col-md-12 sec2Txt d-flex flex-column align-items-start justify-content-center",
              src: "img/section2/bottom-left-ndls.png",
              alt: "right_noodles",
              aboluteSrc: "img/section2/bottom-left-D.png",
              aboluteAlt: "bottom-left-D",
              h2: "January's Promo: Buy 1 Get 1 Free!",
              p:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem molestias, quo labore veritatis laborum sed vel accusantium aperiam delectus suscipit minus!",
              a: "#",
            },
          ],
        },
        section3: {
          order: [
            {
              orderCount: "01",
              h2: "Order",
              p:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae in quaerat, voluptatibus minus sed eaque deleniti ipsum.",
            },
            {
              orderCount: "02",
              h2: "Choose Menu",
              p:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae in quaerat, voluptatibus minus sed eaque deleniti ipsum.",
            },
            {
              orderCount: "03",
              h2: "Delivery",
              p:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae in quaerat, voluptatibus minus sed eaque deleniti ipsum.",
            },
          ],
        },
        section4: {
          style: {
            background: "url('img/section4/section-4-bg.png')",
          },
          info: [
            {
              img1: "img/section4/top-left.png",
              alt1: "top-left",
              img2: "img/section4/section-4-bg.png",
              alt2: "section-4-bg",
              img3: "img/section4/bottom-right.png",
              alt3: "bottom-right",
              h2: "Free Delivery",
              p:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat expedita, possimus sunt molestias voluptatem fugit neque ducimus laborum illum ad atque.",
              a: "#",
            },
          ],
        },
      },
    };
  },

  methods: {
    insertStyle() {
      const section4 = document.querySelector("#section4");
      Object.assign(section4.style, this.data.section4.style);
    },
  },

  mounted() {
    this.insertStyle();
  },
};
Vue.createApp(app).mount("#app");
