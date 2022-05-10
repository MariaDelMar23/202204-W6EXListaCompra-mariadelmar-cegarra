import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import List from "./components/List/List";
import groceriesData from "./Data/groceriesData";
import { loadGroceriesActionCreator } from "./redux/features/groceriesSlice";

function App() {
  const dispatch = useDispatch();
  const groceries = useSelector((state) => state.groceries);

  useEffect(() => {
    dispatch(loadGroceriesActionCreator(groceriesData));
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <Header />
      <Info />
      <main className="row py-4">
        <List />
      </main>
    </div>
  );
}

export default App;
