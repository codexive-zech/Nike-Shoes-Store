import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSort } from "../features/CartSlice";

const SortForm = () => {
  const { productSort } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const sortProduct = (e) => {
    const value = e.target.value;
    dispatch(updateSort({ value }));
  };
  return (
    <div className=" flex items-center justify-between visible md:invisible mb-3">
      <h4 className=" font-bold text-slate-900 px-2 text-lg ">Sort By:</h4>
      <form className=" flex items-center justify-center">
        <select
          name="sortPrice"
          id=""
          className="w-[12rem] md:w-0 rounded-lg flex items-center bg-slate-100 text-slate-900 p-1 font-medium"
          value={productSort}
          onChange={sortProduct}
        >
          <option value="highest">Price: (HIGHEST)</option>
          <option value="lowest">Price: (LOWEST)</option>
        </select>
      </form>
    </div>
  );
};

export default SortForm;
