/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const dcm = editor.DomComponents;
  const defaultType = dcm.getType("default");
  const defaultView = defaultType.view;
  dcm.addType(opts.name, {
    model: {
      defaults: {
        traits: [],
        script: function () {
          const chk = document.getElementById("chk");

          chk.addEventListener("change", () => {
            document.body.classList.toggle("dark");
          });
        },
      },
    },
    isComponent: (el) => {
      if (el.className && el.className.includes("theme")) {
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
