import Details from "./components/Details";
import Education from "./components/Education";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkHistory from "./components/WorkHistory";

import { data } from "./data";

function App() {
  return (
    <main className="">
      <Header {...data.header} />
      <Details {...data.personalDetails} />
      <Skills {...data.skills} />
      <WorkHistory {...data.workHistory} />
      <Education {...data.education} />
      <Projects {...data.projects} />
    </main>
  )
}

export default App
