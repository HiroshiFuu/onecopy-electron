import React from "react";
import { AppStateProvider } from "./AppContext";
import Header from "./components/Header"
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <ItemList />
      <Footer />
    </AppStateProvider>
  );
}

export default App;