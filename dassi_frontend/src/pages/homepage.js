import React, { useEffect } from "react";
import NavHome from "../components/navbar";
import { useDispatch } from "react-redux";
import { getActiveLoans } from "../redux/actions/loan";
import { useSelector } from "react-redux";

export default function Homepage() {
  const dispatch = useDispatch();
  const activeLoans = useSelector((state) => state.loan.activeLoans);

  useEffect(() => {
    dispatch(getActiveLoans());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <NavHome />
      {activeLoans.map((loan, i) => {
        return <li key={i}>loan.id</li>;
      })}
    </div>
  );
}
