import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsItems from "./components/NewsItems"
import Newsboard from "./components/Newsboard"

const App = () => {

  const [category,setCategory] = useState("general")
  return (
    <div>
  
   <Navbar setCategory = {setCategory}/>
   <Newsboard category ={category}/>
   <NewsItems/>
  
    </div>
  )
}

export default App

