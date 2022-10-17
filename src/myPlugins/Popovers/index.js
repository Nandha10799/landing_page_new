import loadBlocks from "./blocks";
const plugin = (editor, opts = {}) => {
  const config = {
    blocks: ["Simple Popovers"],
    category: "Popovers",
    pop1: "Simple Popovers",

    ...opts,
  };
  loadBlocks(editor, config);
};

export default plugin;
