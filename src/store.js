export const url = "https://bookstore.eraasoft.pro/api";


import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: null,
  rememberMe: false,
  isAuthenticated: false,
  authLogin: (token, rememberMe) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem(
      "auth-store",
      JSON.stringify({
        token: token,
        isAuthenticated: true,
        rememberMe: rememberMe,
      }),
    );
    set({
      token,
      isAuthenticated: true,
      rememberMe: rememberMe,
    });
  },
  authLogout: () => {
    localStorage.removeItem("auth-store");
    sessionStorage.removeItem("auth-store");
    set({
      token: null,
      isAuthenticated: false,
      rememberMe: false,
    });
  },
}));
export const useUserInfoStore = create((set) => ({
  name: "",
  email: "",
  getUserInfo: (name, email) => {
    set({
      name: name,
      email: email,
    });
  },
}));
