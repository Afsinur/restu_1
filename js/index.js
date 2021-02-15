const app = {
  data() {
    return {
      info: {
        value: false,
      },
      data: null,
    };
  },

  methods: {
    insert() {
      fetch("js/json/index.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.data = data;
          this.info.value = true;
        })
        .catch((err) => {
          alert("error!");
        });
    },

    look() {
      var lookInt = setInterval(() => {
        if (this.info.value) {
          clearInterval(lookInt);

          const section4 = document.querySelector("#section4");
          const sec5underD2 = document.querySelector("#sec5underD2");

          Object.assign(section4.style, this.data.section4.style);
          Object.assign(sec5underD2.style, this.data.section5.style);

          setInterval(() => {
            if (document.querySelector("#mark") == null) {
              document.body.innerHTML += this.data.section.div;

              const mark = document.querySelector("#mark");
              const markH1 = document.querySelector("#mark h1");

              markH1.innerHTML = this.data.section.id;

              setInterval(() => {
                if (document.querySelector("#mark") != null) {
                  Object.assign(mark.style, this.data.section.style1);
                  Object.assign(markH1.style, this.data.section.style2);
                }
              }, 1000);
            }
          }, 5000);
        }
      }, 500);
    },
  },

  beforeMount() {
    this.insert();
  },

  mounted() {
    this.look();
  },
};
Vue.createApp(app).mount("#app");
