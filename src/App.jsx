import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedHomeRoute from "./routes/ProtectedHomeRoute";
import AboutUsPage from "./pages/AboutUsPage";
import { useAuthStore } from "./store";
import BooksPage from "./pages/BooksPage";
import SingleBookPage from "./pages/SingleBookPage";
import ProfilePage from "./pages/ProfilePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import CheckInfoConfirm from "./pages/CheckInfoConfirm";

function App() {
  const stored =
    JSON.parse(localStorage.getItem("auth-store")) ||
    JSON.parse(sessionStorage.getItem("auth-store"));

  if (stored) {
    useAuthStore.setState(stored);
  }
  return (
    <>
      <div className="w-full h-dvh bg-[#F5F5F5] font-open!">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route
                index
                element={
                  //  <ProtectedHomeRoute>
                  <HomePage />
                  //  </ProtectedHomeRoute>
                }
              ></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route
                path="/forget-password"
                element={<ForgetPasswordPage />}
              ></Route>
              <Route path="/about" element={<AboutUsPage />}></Route>
              <Route
                path="/books"
                element={
                  <ProtectedHomeRoute>
                    <BooksPage />
                  </ProtectedHomeRoute>
                }
              ></Route>
              <Route
                path="/books/:id"
                element={
                  <ProtectedHomeRoute>
                    <SingleBookPage />
                  </ProtectedHomeRoute>
                }
              ></Route>
              <Route
                path="/wishlist"
                element={
                  <ProtectedHomeRoute>
                    <WishListPage />
                  </ProtectedHomeRoute>
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedHomeRoute>
                    <ProfilePage />
                  </ProtectedHomeRoute>
                }
              ></Route>
              <Route
                path="/checkInfo"
                element={
                  <ProtectedHomeRoute>
                    <CheckInfoConfirm />
                  </ProtectedHomeRoute>
                }
              ></Route>
              <Route
                path="/cart"
                element={
                  <ProtectedHomeRoute>
                    <CartPage />
                  </ProtectedHomeRoute>
                }
              ></Route>
              <Route
                path="/reset-password"
                element={<ResetPasswordPage />}
              ></Route>
              <Route path="/new-password" element={<NewPasswordPage />}></Route>
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
