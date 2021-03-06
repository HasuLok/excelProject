// import { storage } from '../core/utils';
import {defaultStyles, defaultTitle} from './../constants';


const defaultlState = {
    title: defaultTitle,
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles,
    openedDate: new Date().toJSON()
}

const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})

// export const initialState = storage('excel-state') ?
//     normalize(storage('excel-state')) : defaultlState;

export function normalizeInitialState(state) {
    return state ? normalize(state) : defaultlState
}    