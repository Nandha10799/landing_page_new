import loadBlocks from "./blocks";
const plugin = (editor, opts = {}) => {
  const config = {
    blocks: [
      "Sign In Card",
      "Sign In Page",
      "Sign Up Page with Avatar",
      "Sign In Page with Select User",
      "Sign In Page with Social Media Links",
      "Sign In Page With Image",
      "Sign Up Page with Side Image",
    ],
    category: "Signin Page",
    page1: "Sign In Card",
    page2: "Sign In Page",
    page3: "Sign Up Page with Avatar",
    page4: "Sign In Page with Select User",
    page5: "Sign In Page with Social Media Links",
    page6: "Sign In Page With Image",
    page7: "Sign Up Page with Side Image",
    ...opts,
  };
  loadBlocks(editor, config);
};

export default plugin;
