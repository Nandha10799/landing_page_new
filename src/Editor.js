/* eslint-disable no-unused-vars */
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useState } from "react";
import basicPlugin from "./myPlugins/BasicPlugin";
import formsPlugin from "./myPlugins/FormsPlugin";
import extraPlugin from "./myPlugins/ExtraPlugin";
import presetWebpage from "./myPlugins/PresetWebpagePlugin";
import navBarPlugin from "./myPlugins/NavBarPlugin";
// import swiperPlugin from "./myPlugins/SwiperPlugin";
// import starRatePlugin from "./myPlugins/StarRate";
import countDownPlugin from "./myPlugins/CountDownPlugin";
// import emojiPicker from "./myPlugins/Emojipicker";
import pagination from "./myPlugins/Pagination";
import tailwinds from "grapesjs-tailwind";
import loginForm from "./myPlugins/loginForm";
import collapses from "./myPlugins/collapse";
import alerts from "./myPlugins/Alerts";
import popovers from "./myPlugins/Popovers";
// import theme from "./myPlugins/themeChanger";

function Editor() {
  const [componentSelected, setComponentSelected] = useState(false);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      plugins: [
        basicPlugin,
        formsPlugin,
        presetWebpage,
        extraPlugin,
        navBarPlugin,
        // swiperPlugin,
        // starRatePlugin,
        countDownPlugin,
        // emojiPicker,
        pagination,
        tailwinds,
        loginForm,
        // theme,
        collapses,
        alerts,
        popovers,
      ],
      pluginsOpts: {
        basicPlugin: {},
        presetWebpage: {},
        formsPlugin: {},
        extraPlugin: {},
        navBarPlugin: {},
        swiperPlugin: {},
        starRatePlugin: {},
      },
      allowScripts: true,

      storageManager: {
        type: "local",
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
        options: {
          local: {
            key: "gjsProject",
          },
        },
      },
    });

    setComponentSelected(editor);
  }, []);
  return (
    <div>
      <div id="gjs"></div>
    </div>
  );
}
export default Editor;
