import  grapesjs from 'grapesjs';
import loadTraits from './traits';
import loadBlocks from './blocks';
import loadComponents from './components';


const plugin = (editor, opts = {}) => {

  const config = {
    blocks: ['form', 'input', 'textarea', 'select', 'button', 'label', 'checkbox', 'radio'],
    category: { id: 'forms', label: 'Forms' },
    block: () => ({}),
    ...opts
  };

  loadComponents(editor);
  loadTraits(editor);
  loadBlocks(editor, config);
};

export default plugin;