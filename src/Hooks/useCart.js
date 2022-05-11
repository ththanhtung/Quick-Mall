import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../Store/CartSlice";
import useAuth from "../Hooks/useAuth";

const useCart = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  useEffect(() => {
    dispatch(fetchCart(user._id));
  }, []);
};

export default useCart;
