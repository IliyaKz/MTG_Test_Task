import data from  '../assets/data.json'
import { actionType, defaultDataType, reviewType, stateType } from '../utils/types'
import { CHUNK_SIZE, DECREMENT_PAGE, DECREMENT_PAGE_SKIP, INCREMENT_PAGE, INCREMENT_PAGE_SKIP, PAGINATION_START, SELECT_LANG } from '../utils/constants';

const transformData = (data: defaultDataType): stateType => {
  return {
    ru: Object.values(data.ru) as reviewType[],
    en: Object.values(data.en) as reviewType[],
    currentPage: PAGINATION_START,
    currentLang: 'ru'
  }
}

const initialState: stateType = transformData(data);

export const reviewReducer = (state: stateType = initialState, action: actionType): stateType => {
  switch(action.type){
    case INCREMENT_PAGE: 
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case DECREMENT_PAGE: 
      return {
        ...state,
        currentPage: state.currentPage - 1
      }
    case DECREMENT_PAGE_SKIP: 
      return {
        ...state,
        currentPage: PAGINATION_START
      }
    case INCREMENT_PAGE_SKIP: 
      return {
        ...state,
        currentPage: Math.ceil(state[state.currentLang].length / CHUNK_SIZE)
      }
    case SELECT_LANG: 
      if (action.payload === 'ru' || action.payload === 'en') 
      return {
        ...state,
        currentLang: action.payload
      }
    default: 
      return state
  }
}