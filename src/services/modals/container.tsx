import { memo, useSyncExternalStore } from 'react';
import useServices from '@src/services/use-services';
/**
 * Отображает стек открытых модальных окон
 */
function ModalsContainer() {
  const modals = useServices().modals;
  const modalsStack = useSyncExternalStore(modals.subscribe, modals.getStack, modals.getStack);
  return <>{modalsStack.map(state => {
    // const Component = modalsComponents[state.name];
    // return <Component key={state.key} {...state.props as any} />;
    return null

  })}</>;
}

export default memo(ModalsContainer);