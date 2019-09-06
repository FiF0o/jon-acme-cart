export const logger = store => next => action => {
  
  const actionType = typeof action === "function" ? `async action ${Date.now()}` : action.type

  console.group(actionType)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.log('result', result)
  console.groupEnd(actionType)
  return result 
}