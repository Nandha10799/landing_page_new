// /* eslint-disable import/no-anonymous-default-export */
// export default (editor, opts = {}) => {
//   const domc = editor.Components;
//   const defaultType = domc.getType("default");
//   const defaultView = defaultType.view;

//   console.log("star component===>", opts.name);
//   domc.addType(opts.name, {
//     model: {
//       defaults: {
//         script: function () {
//           function EmojiPick() {}
//           EmojiPick();
//         },
//       },
//     },
//     isComponent: (el) => {
//       if (el.className && el.className.includes("container")) {
//         return {
//           type: opts.name,
//         };
//       }
//     },
//     view: defaultView.extend({
//       init({ model }) {
//         this.listenTo(model, "change:dynamicProgress", this.updateScript);
//         this.listenTo(model, "change:progressType", this.updateScript);
//       },
//     }),
//   });
// };
