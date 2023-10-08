import { actionType } from "../utils/types"
import { DECREMENT_PAGE, DECREMENT_PAGE_SKIP, INCREMENT_PAGE, INCREMENT_PAGE_SKIP, SELECT_LANG } from "../utils/constants"

export function incrementPage(): actionType {
  return { 
    type: INCREMENT_PAGE
  }
}

export function decrementPage(): actionType {
  return { 
    type: DECREMENT_PAGE
  }
}

export function incrementPageSkip(): actionType {
  return { 
    type: INCREMENT_PAGE_SKIP
  }
}

export function decrementPageSkip(): actionType {
  return { 
    type: DECREMENT_PAGE_SKIP
  }
}

export function selectLang(payload: string): actionType {
  return { 
    type: SELECT_LANG,
    payload
  }
}