/* eslint-disable import/no-anonymous-default-export */
import loadComponents from "./components";
import loadBlocks from "./blocks";
export default (editor, opts = {}) => {
  const options = {
    label: "Theme Changer",
    name: "Theme",
    category: "Extra",

    ...opts,
  };
  loadBlocks(editor, options);
  loadComponents(editor, options);
};
