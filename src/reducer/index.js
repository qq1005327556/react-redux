//@Crawford:初始状态写在这里
const defaultState = {
  items: [
    { title: '1', isChose: false },
    { title: '2', isChose: false }
  ],
  isAllChecked: false
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('2222222222', action.item)
      return {
        ...state,
        items: [action.item, ...state.items]
      }
    case 'ALL_TOGGLE':
      return {
        ...state,
        isAllChecked: !state.isAllChecked,
        items: state.items.map(item => {
          item.isChose = !state.isAllChecked
          return item
        })
      }
    default:
      return state
  }
}
