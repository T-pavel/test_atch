import { useBase } from "@src/services/ifc/hooks";
import useServices from "@src/services/use-services";
import { PageKeyEnum } from "@src/types";
import { memo, useEffect } from "react";

export const SideBar = ({ pageKey }: { pageKey: PageKeyEnum }) => {
  const renderSideBarByPage = () => {
    switch (pageKey) {
      case PageKeyEnum.OneStep:
        return <div>Сайдбар первого шага</div>;
      case PageKeyEnum.TwoStep:
        return <SideBarStepTwo />;
      default:
        break;
    }
  };
  return <aside className="left-sidebar">{renderSideBarByPage()}</aside>;
};

const SideBarStepTwo = memo(() => {
    const ifcService = useServices().ifc
    const { data } = useBase()
    useEffect(() => {
        ifcService.loadIfcModel()
    }, [])

    return <div>
        <div>TwoStep</div>
        <div>{data.name ?? "Нет имени"}</div>
    </div>
})