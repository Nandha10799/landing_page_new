import loadBlocks from "./blocks";
const plugin = (editor, opts = {}) => {
  const config = {
    blocks: ["Simple", "Arrows", "Icons", "Table"],
    category: "Pagination",
    style1: "Simple",
    style2: "Arrows",
    style3: "Icons",
    style4: "Table",
    ...opts,
  };
  loadBlocks(editor, config);
};

export default plugin;
