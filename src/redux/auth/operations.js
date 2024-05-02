import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});
export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};
export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      setToken(data.token);
      toast.success(
        `Welcome, ${data.user.name}!. You are successfully registered. Continue with your Contacts page!`,
        {
          autoClose: 5000,
        }
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", formData);
      setToken(data.token);
      toast.success(
        `Welcome, ${data.user.name}!. You are successfully logged in. Continue with your Contacts page!`,
        {
          autoClose: 5000,
        }
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);
      const { data } = await instance.get("/users/current");

      toast.success(
        `Welcome, ${data.name}!. You are successfully logged in. Continue with your Contacts page!`,
        {
          autoClose: 5000,
        }
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const token = state.auth.token;
    setToken(token);
    const { data } = await instance.post("/users/logout");

    toast.success("You are successfully logged out!", {
      autoClose: 5000,
    });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
