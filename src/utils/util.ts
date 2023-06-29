// get modal container
export const getPortalContainer = (getContainer: any) =>
  typeof getContainer === 'function'
    ? getContainer()
    : getContainer || document.body;
