import { Provider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
// import persistStore from 'redux-persist';
import persistStore from "redux-persist/lib/persistStore";

import "@/styles/globals.scss";

let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
