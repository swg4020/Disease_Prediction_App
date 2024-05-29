import { useState } from "react";
import { baseData } from "../../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { listUp } from "../../components/listUp";
import { listUpD } from "../../components/listUpD";

const Container = styled.div``;
const ConWrap = styled.div``;
const Con = styled.div``;

export const Home = () => {
  const [diss, setDiss] = useState(1);
  const [sido, setSido] = useState(26);

  const bsasInfo = useQuery({
    queryKey: ["getDissForecastInfo", diss, sido],
    queryFn: baseData,
  });

  const basedata = bsasInfo && bsasInfo?.data?.response?.body?.items;
  console.log(basedata);
  const info = listUp.filter((res) => res.id == sido);
  const infoD = listUpD.filter((res) => res.id === diss);
  const titleInfo = info[0].title;
  const titleDInfo = infoD[0].title;
  console.log(titleInfo);
  console.log(titleDInfo);

  return (
    <Container>
      <ConWrap>
        <Con>
          <h2>예측 지역 : {titleInfo}</h2>
          <h2>예측 질병 : {titleDInfo}</h2>
          <h3>예측 일자 : {basedata[0].dt}</h3>
          <p>질병 예측 진료건수  : {basedata[0].cnt}</p>
          <p></p>
        </Con>
      </ConWrap>
    </Container>
  );
};
