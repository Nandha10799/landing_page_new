/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    const dc = editor.Components;
    const defaultType = dc.getType("default");
    const defaultView = defaultType.view;

     
    console.log('swiper components===>',opts.name);
    dc.addType(opts.name, {
      model: {
        defaults: {
          traits: [
            {
              type: "checkbox",
              name: "dynamicProgress",
              label: "Dynamic Progress",
              changeProp: 1,
            },
            {
              type: "select",
              name: "progressType",
              label: "Progress Type",
              changeProp: 1,
              options: [
                { value: "bullets", name: "Bullets" },
                { value: "fraction", name: "Fraction" },
                { value: "progressbar", name: "Progressbar" },
              ],
            },
          ],
          script :  function () {
            const dynamicProgress = "{[ dynamicProgress ]}";
            const progressType = "{[ progressType ]}";
            const initLib = () => {
              const swiper = new Swiper(".mySwiper", {
                spaceBetween: 30,
                allowSlideNext: true,
                allowSlidePrev: true,
                centeredSlides: true,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  dynamicBullets: !!dynamicProgress,
                  type: progressType,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                  },
              });
              console.log("swiper :>> ", swiper);
            };
    
            if (typeof Swiper == "undefined") {
              const script = document.createElement("script");
              script.onload = initLib;
              script.src = "https://unpkg.com/swiper@8/swiper-bundle.min.js";
              script.src = "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
              document.body.appendChild(script);
            } else {
              initLib();
            }
        },
        },
      },
      isComponent: (el) => {
        if (el.className && el.className.includes("swiper")) {
          return {
            type: opts.name,
          };
        }
      },
      view: defaultView.extend({
        init({ model }) {
          this.listenTo(model, "change:dynamicProgress", this.updateScript);
          this.listenTo(model, "change:progressType", this.updateScript);
        },
      }),
    });
  };