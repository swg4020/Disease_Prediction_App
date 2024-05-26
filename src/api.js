import axios from "axios";

const apiKey =
  "uzqzCV0OaR8IQR7UXErSXf++hcUKyQRCS2CT6q/LrQdoMNHPHkm3UtU5godlE8EyQMoTu5sY1nkbJKMWOouO6w==";

//국민건강보험공단 질병예측 정보
const instanc = axios.create({
  baseURL: "http://apis.data.go.kr/B550928/dissForecastInfoSvc/",
  params: {
    serviceKey: apiKey,
    pageNo: 1,
    numOfRows: 10,
    type: `JSON`,
  },
});

export const baseData = ({ queryKey }) => {
    const [getDissForecastInfo, diss, sido] = queryKey;
    return instanc
      .get(`${getDissForecastInfo}?&dissCd=${diss}&znCd=${sido}`)
      .then((res) => res.data);
  };