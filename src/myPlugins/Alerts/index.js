import loadBlocks from "./blocks";
const plugin = (editor, opts = {}) => {
  const config = {
    blocks: [
      "Success Pop",
      "Info Pop",
      "Warning Pop",
      "Error Pop",
      "Notification Pop",
      "Success Full Width ",
      "Info Full Width",
      "Warning Full Width",
      "Error Full Width",
    ],
    category: "Alerts",
    style0: "Success Pop",
    style1: "Info Pop",
    style2: "Warning Pop",
    style3: "Error Pop",
    style4: "Notification Pop",
    style5: "Success Full Width ",
    style6: "Info Full Width",
    style7: "Warning Full Width",
    style8: "Error Full Width",
    ...opts,
  };
  loadBlocks(editor, config);
};

export default plugin;
