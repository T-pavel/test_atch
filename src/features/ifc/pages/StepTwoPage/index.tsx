import { useInit } from "@src/hooks/useInit"
import useServices from "@src/services/use-services"
import React from "react"
import { useEffect } from "react"
import { useBase } from "./hook"

export const StepTwoPage = React.memo(() => {
    useInit({children: <SideBarStepTwo />, isRightSideBar: true})
    return <div>StepTwoPage</div>
})

const SideBarStepTwo = React.memo(() => {
  const ifcService = useServices().ifc
    const {data} = useBase()
    useEffect(() => {
        ifcService.loadIfcModel()
    }, [])

    return <div>
        <div>TwoStep</div>
        <div>{data.name ?? "Нет имени"}</div>
    </div>
})