import React, { use, useEffect, useState } from "react";
import Section1 from "../section1/section1";
import Search from "../search/Search";

function Halls() {
  return (
    <>
      <Search />
      <Section1 name="TopRated" />
      <Section1 name="Newest" />
    </>
  );
}

export default Halls;
