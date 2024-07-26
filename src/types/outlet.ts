export interface IOutletContext {
  setTitle: (title: string | JSX.Element) => void;
  activateRightSideBar: (isActive?: boolean) => void;
}
