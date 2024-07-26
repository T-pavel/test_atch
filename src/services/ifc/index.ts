import Service from "@src/services/service";
import { IIfcState } from "./types";
import { State } from "../state";

class IfcService extends Service {
  protected state = new State<IIfcState>({name: null})

  loadIfcModel = async () => {
    setTimeout(() => {
      new Promise(res => {
        res({name: "Новый файл"})
      }).then(data => {
        this.state.setState(data as IIfcState)
      })
    }, 1000);
  }

  getIfcModel = () => {
    return this.state
  }
}

export default IfcService