import {combineReducers} from 'redux';
import {editorReducer} from './editorType';

export const allReducer = combineReducers({
    editor: editorReducer
});
  

