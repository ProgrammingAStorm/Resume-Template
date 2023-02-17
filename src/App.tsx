import Details from "./components/Details";
import Education from "./components/Education";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkHistory from "./components/WorkHistory";

import { data } from "./data";

function App() {
  return (
    <main className="flex flex-col items-center m-4 overflow-hidden">
      <div className="flex w-screen ">
        <Header {...data.header} />
        <Details {...data.personalDetails} />
      </div>
      <Skills {...data.skills} />
      <WorkHistory {...data.workHistory} />
      <Education {...data.education} />
      <Projects {...data.projects} />
    </main>
  )
}

export default App
