import { useState } from "react";
import Home from "./pages/Home/Home"
import SelectSoftware from "./pages/SelectSofware/SelectSoftware"
import SignInSignUp from "./pages/SigninSignup/SignInSignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/global/layout/Layout";

function App() {
  const [menuCollapse, setMenuCollapse] = useState(false);  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignInSignUp />} />
        <Route exact path="/select-software" element={<SelectSoftware />} />
        <Route
          path="/home"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <Home menuCollapse={menuCollapse} />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
      {/* <SignInSignUp/> */}
    </>
  )
}

export default App
