// import "./App.css";
// import { useState } from "react";
// import MainMit from "./MainMit";
// import NavBar  from "./NavBar";
import { Route, Routes } from 'react-router-dom'

// function App() {
//   const [accounts, setAccounts] = useState([]);

//   return (
//     <>
//       <Routes>
//         <Route>
//     <div className="overlay">
//       <div className="App">
//         <NavBar accounts={accounts} setAccounts={setAccounts} />
//         <MainMit accounts={accounts} setAccounts={setAccounts} />
//       </div>
//       <div className="moving-background"></div>
//     </div>
//         </Route>
//       </Routes>
//     </>


//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";
import MainMit from "./MainMit";
import NavBar  from "./NavBar";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <Routes>
          <Route>
            <NavBar accounts={accounts} setAccounts={setAccounts} />
            <MainMit accounts={accounts} setAccounts={setAccounts} />
          </Route>
        </Routes>
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <>
//       <Routes>
//         {/* <Route path="/" element={<Layout />} /> */}
//         <Route path="/" element={<Layout />} >
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App