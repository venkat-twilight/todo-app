import { Provider } from "react-redux";
import StackNavigation from "./src/navigations/StackNavigation";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}
