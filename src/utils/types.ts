export type defaultDataType = {
  ru: object,
  en: object
}

export type reviewType = {
  name: string,
  review: string,
  date: string
}

export type stateType = {
  ru: Array<reviewType>,
  en: Array<reviewType>,
  currentPage: number,
  currentLang: 'ru' | 'en'
}

export type actionType = {
  type: string,
  payload?: string
}

export type mainStateType = {
  review: stateType
}

export type buttonPropsType = {
  content: string,
  isDisable: boolean,
  onClick: () => void
}

export type controllersPropsType = {
  review: stateType
  onIncrementPage: () => void,
  onDecrementPage: () => void,
  onIncrementPageSkip: () => void,
  onDecrementPageSkip: () => void
}

export type selectPropsType = {
  review: stateType
  onSelect: (payload: string) => void
}

export type watchStateType = {
  time: string
}

export type watchPropsType = {
}