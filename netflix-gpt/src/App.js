import Body from "./components/Body";
import appstore from "./utils/appStore";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={appstore}>
   <Body />
</Provider>
  )
}