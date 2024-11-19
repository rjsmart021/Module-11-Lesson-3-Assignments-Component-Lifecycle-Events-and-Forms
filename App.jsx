yarn create vite
yarn add sass md5
VITE_PUBLIC_KEY = "YOUR_PUBLIC_KEY"
VITE_PRIVATE_KEY = "YOUR_PRIVATE_KEY"
// App.js

import "./App.css"
import Search from "./components/Search"

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  )
}
