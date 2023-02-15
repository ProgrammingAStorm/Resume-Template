import Details from "./components/Details";
import Header from "./components/Header";
import Skills from "./components/Skills";

import {data} from "./data";

function App() {
  return (
    <main className="">
      <Header {...data.header}/>
      <Details {...data.personalDetails}/>
      <Skills {...data.skills}/>
    </main>
  )
}

export default App
