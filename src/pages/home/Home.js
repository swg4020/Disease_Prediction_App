import { useState } from "react";
import { baseData } from "../../api";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const [diss, setDiss] = useState(1);
  const [sido, setSido] = useState(11);

  const bsasInfo = useQuery({
    queryKey: ["getDissForecastInfo", diss, sido],
    queryFn: baseData,
  });

  console.log(bsasInfo);
  return <div></div>;
};
