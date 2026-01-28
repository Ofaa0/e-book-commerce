import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="w-full h-dvh bg-[#F5F5F5] font-open!">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
