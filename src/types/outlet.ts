export interface IOutletContext {
  setChildren: (pageKey: PageKeyEnum) => void;
  activateRightSideBar: (isActive?: boolean) => void;
}

export const enum PageKeyEnum {
  OneStep = 'oneStep',
  TwoStep = 'twoStep'
}