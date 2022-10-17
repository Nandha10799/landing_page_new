/* eslint-disable import/no-anonymous-default-export */
// import loadBlock from "./blocks";
// export default (editor, opts = {}) => {
//   const options = {
//     label: "card",
//     name: "Card",
//     category: "collapse",
//     ...opts,
//   };
//   loadBlock(editor, options);
//   // loadComponent(editor, options);
// };

import loadBlocks from "./blocks";
const plugin = (editor, opts = {}) => {
  const config = {
    blocks: ["basic", "Multiple targets", "Accordion"],
    category: "collapse",
    style1: "basic",
    style2: "Multiple targets",
    style3: "Accordion",
    ...opts,
  };
  loadBlocks(editor, config);
};

export default plugin;
