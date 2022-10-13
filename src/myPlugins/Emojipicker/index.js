/* eslint-disable import/no-anonymous-default-export */
import loadComponent from  './components';
import loadBlock from './blocks';

export default (editor, opts = {}) => {
    const options = {
        label: 'Emoji',
        name: 'Emoji',
        category: 'Extra',
        ...opts
    };
    loadBlock(editor,options);
    loadComponent(editor, options);
};