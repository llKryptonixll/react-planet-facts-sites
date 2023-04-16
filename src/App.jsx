import { useState } from "react"
import data from "../public/planetsData.json"
import Navbar_desktop from "./components/navbar/desktop/Navbar_desktop"
import Navbar_mobile from "./components/navbar/mobile/Navbar_mobile"
import Planet from "./components/planet/Planet"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarValue, setNavbarValue] = useState("Earth");

  function openCloseSidebar(){
    setIsOpen(!isOpen);
  }

  function getNavbarValues(e){
    setNavbarValue(e.target.value);
    setIsOpen(false)
  }

  return (
    <div className="App bg-[url('/images/background-stars.svg')] lg:h-screen lg:min-h-[900px] min-h-[100vh] bg-mainBG font-antonio overflow-x-hidden">
      <header>
        <Navbar_desktop 
          openCloseSidebar={openCloseSidebar}
          isOpen={isOpen}
          getNavbarValues={getNavbarValues}
        />

        <Navbar_mobile 
          isOpen={isOpen}
          getNavbarValues={getNavbarValues}
        />
      </header>

      {
          !isOpen && // dont render it if sidebar open to give sidebar full height
          data.map((planet, id) => {
            if(planet.name === navbarValue){
              return (
                <Planet 
                  key={planet.name}
                  currentPlanetData={planet}
                  name={planet.name}
                  rotation={planet.rotation}
                  revolution={planet.revolution}
                  radius={planet.radius}
                  temperature={planet.temperature}
                />
              ) 
            }
          })
      }
    </div>
  )
}

export default App
