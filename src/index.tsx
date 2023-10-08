import store from "./store"
import { Provider } from "react-redux"
import ReactDom from "react-dom/client"
import { App } from "./components/App/App"

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)