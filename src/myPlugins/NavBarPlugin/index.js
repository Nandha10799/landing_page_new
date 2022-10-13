import loadBlocks from './blocks';
import loadComponents from './components';


const plugin = (editor, opts = {}) => {
  const options = {
    id: 'navbar',
    label: 'Navbar',
    block: {},
    style: '',
    styleAdditional: '',
    classPrefix: 'navbar',
    ...opts,
  };

  loadBlocks(editor, options);
  loadComponents(editor, options);
};

export default plugin;