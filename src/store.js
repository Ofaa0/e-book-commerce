export const url = "https://bookstore.eraasoft.pro/api";
export const adminToken = "1444|eB38Kn5aodV5ViTU5EaItCDNn0pZuNGVxJUQCrFS1cd5ce92";


import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: {},
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
  getUserInfo: (userInfo) => {
    set({
      user: userInfo
    })
  }
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
export const useHandlePassword = create((set) => ({
  email: "",
  setEmail: (email) => {
    set({ email: email });
  },
  OTP: "",
  setOTP: (OTP) => {
    set({ OTP: OTP });
  },
  
}));
export const useWishList = create((set) => ({
  wishlistLength: 0,
  setWishlistLength: (length) => {
    set({ wishlistLength: length });
  },
  
}));