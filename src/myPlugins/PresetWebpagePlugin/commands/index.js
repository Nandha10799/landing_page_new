/* eslint-disable import/no-anonymous-default-export */
import grapesjs from "grapesjs";

import openImport from "./openImport";
import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
} from "./../consts";

export default (editor, config) => {
  const { Commands } = editor;
  const txtConfirm = config.textCleanCanvas;

  Commands.add(cmdImport, openImport(editor, config));
  Commands.add(cmdDeviceDesktop, {
    run: (ed) => ed.setDevice("Desktop"),
    stop: () => {},
  });
  Commands.add(cmdDeviceTablet, {
    run: (ed) => ed.setDevice("Tablet"),
    stop: () => {},
  });
  Commands.add(cmdDeviceMobile, {
    run: (ed) => ed.setDevice("Mobile portrait"),
    stop: () => {},
  });
  Commands.add(
    cmdClear,
    (e) => window.confirm(txtConfirm) && e.runCommand("core:canvas-clear")
  );
};
