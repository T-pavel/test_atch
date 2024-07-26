import { useStateSync } from "@src/services/state"
import useServices from "@src/services/use-services"

export const useBase = () => {
  const ifcService = useServices().ifc

  const state = ifcService?.getIfcModel()
  const model = useStateSync(state)
  return { data: model }
}