import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedHomeRoute from "./routes/ProtectedHomeRoute";

function App() {
  return (
    <>
      <div className="w-full h-dvh bg-[#F5F5F5] font-open!">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route
                index
                element={
                  <ProtectedHomeRoute>
                    <HomePage />
                  </ProtectedHomeRoute>
                }
              ></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route
                path="/forget-password"
                element={<ForgetPasswordPage />}
              ></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
