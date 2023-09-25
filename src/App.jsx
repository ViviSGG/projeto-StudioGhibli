import React from "react";
import Header from "./Header"; /* o caminho relativo entre as aspas */
import Corpo from "./Corpo"

function App(){
  return(
    <> {/* tag vazia é chamada de fragmento */}
      <Header/>
      <Corpo/>
    </>
  )
}

export default App