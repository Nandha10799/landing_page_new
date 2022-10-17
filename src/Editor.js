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
// import tailwinds from "grapesjs-tailwind";
// import theme from "./myPlugins/themeChanger";
import table from "./myPlugins/Table";
import jswiper from "./myPlugins/Jswiper";

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
        jswiper,
        // tailwinds,
        // theme,
        table,
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
