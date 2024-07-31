import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
// database
import products form './db/data';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const [query, setQuery] = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(products => product.title.
    toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );


  return <>
  <Sidebar />
  <Navigation />
  <Recommended />
  <Products />
  </>
}

export default App;
