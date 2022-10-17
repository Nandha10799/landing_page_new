import grapesjs from "grapesjs";
import commands from "./commands";
import blocks from "./blocks";
import panels from "./panels";

const plugin = (editor, opts = {}) => {
  const config = {
    blocks: ["link-block", "quote", "text-basic"],
    block: () => ({}),
    modalImportTitle: "Import",
    modalImportButton: "Import",
    modalImportLabel: "",
    modalImportContent: "",
    importViewerOptions: {},
    textCleanCanvas: "Are you sure you want to clear the canvas?",
    showStylesOnChange: true,
    useCustomTheme: true,
    ...opts,
  };

  if (config.useCustomTheme && typeof window !== "undefined") {
    const primaryColor = "#82c3f5";
    const secondaryColor = "#000000";
    const tertiaryColor = "white";
    const quaternaryColor = "#ffffff";
    const prefix = "gjs-";
    let cssString = "";

    [
      ["one", primaryColor],
      ["two", secondaryColor],
      ["three", tertiaryColor],
      ["four", quaternaryColor],
    ].forEach(([cnum, ccol]) => {
      cssString += `
        .${prefix}${cnum}-bg {
          background-color: ${ccol};
        }
        .${prefix}${cnum}-color {
          color: ${ccol};
        }
        .${prefix}${cnum}-color-h:hover {
          color: ${ccol};
        }
      `;
    });

    const style = document.createElement("style");
    style.innerText = cssString;
    document.head.appendChild(style);
  }

  // Load blocks
  blocks(editor, config);

  // Load commands
  commands(editor, config);

  // Load panels
  panels(editor, config);
};

export default plugin;
