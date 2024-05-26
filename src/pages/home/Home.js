import { useState } from "react";
import { baseData } from "../../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { listUp } from "../../components/listUp";

const Container = styled.div``;
const ConWrap = styled.div``;

export const Home = () => {
  const [diss, setDiss] = useState(1);
  const [sido, setSido] = useState(11);

  const bsasInfo = useQuery({
    queryKey: ["getDissForecastInfo", diss, sido],
    queryFn: baseData,
  });

  const data = bsasInfo && bsasInfo?.data?.response?.body?.items
  console.log(data);
  const info = listUp.filter(res => res.id == sido);
  console.log(info[0]?.title)

  
  return (
    <Container>
      <ConWrap></ConWrap>
    </Container>
  );
};
