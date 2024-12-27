import { useDispatch, useSelector } from "react-redux";

// Create custom hooks for dispatch and selector
const useAppDispatch = () => useDispatch();  // useDispatch works without types in JS
const useAppSelector = (selector) => useSelector(selector);  // useSelector works without types in JS

export { useAppDispatch, useAppSelector };
