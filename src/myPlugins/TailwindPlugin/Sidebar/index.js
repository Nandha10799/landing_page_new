/* eslint-disable import/no-anonymous-default-export */
import loadBlock from './blocks';

export default (editor, opts = {}) => {
    const options = {
        label: 'SideBar',
        name: 'SideBar',
        type: 'SideBar',
        category: 'Extra',
        ...opts
    };
    loadBlock(editor,options);
};