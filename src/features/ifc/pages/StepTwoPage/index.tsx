import React from "react"
import { useLayoutChange } from "@src/hooks/useLayoutChange"
import { PageKeyEnum } from "@src/types"

export const StepTwoPage = React.memo(() => {
    useLayoutChange({ pageKey: PageKeyEnum.TwoStep, isRightSideBar: true })
    return <div>StepTwoPage</div>
})

