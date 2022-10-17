/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const domc = editor.Components;
  const defaultType = domc.getType("default");
  const defaultView = defaultType.view;
  console.log("star component===>", opts.name);
  domc.addType(opts.name, {
    model: {
      defaults: {
        script: function () {
          function initRating(wrapperSelector, starsSelector, outputSelector) {
            const wrapper = document.querySelectorAll(wrapperSelector);
            wrapper.forEach(function (currentWrapper) {
              const stars = currentWrapper.querySelectorAll(starsSelector);
              const outputs = currentWrapper.querySelectorAll(outputSelector);

              stars.forEach(function (star) {
                star.addEventListener("click", function (e) {
                  const rating = this.dataset["rating"];
                  let nextSibling = this.nextElementSibling;
                  let previousSibling = this.previousElementSibling;
                  this.classList.add("active", "fa-star");
                  this.classList.remove("fa-star-o");
                  while (
                    nextSibling !== null &&
                    (nextSibling.classList.contains("fa-star") ||
                      nextSibling.classList.contains("fa-star-o"))
                  ) {
                    nextSibling.classList.remove("active", "fa-star");
                    nextSibling.classList.add("fa-star-o");
                    nextSibling = nextSibling.nextElementSibling;
                  }
                  while (
                    previousSibling !== null &&
                    (previousSibling.classList.contains("fa-star") ||
                      previousSibling.classList.contains("fa-star-o"))
                  ) {
                    previousSibling.classList.add("active", "fa-star");
                    previousSibling.classList.remove("fa-star-o");
                    previousSibling = previousSibling.previousElementSibling;
                  }
                  if (outputs.length > 0) {
                    outputs.forEach(function (output) {
                      output.textContent = rating;
                    });
                  }
                });
              });
            });
          }
          initRating(".stars", "i", ".output");
        },
      },
    },
    isComponent: (el) => {
      console.log("el=====>", el);
      if (!el) return false;
      if (el.className && el.className.includes("stars")) {
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
