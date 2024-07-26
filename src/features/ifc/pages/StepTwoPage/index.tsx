import { useInit } from "@src/hooks/useInit"

export const StepTwoPage = () => {
    useInit({children: <SideBarStepTwo />, isRightSideBar: true})
    return <div>StepTwoPage</div>
}

const SideBarStepTwo =() => {
    return <div>SideBarStepTwo</div>
}