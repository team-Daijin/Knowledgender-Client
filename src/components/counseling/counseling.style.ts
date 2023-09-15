import styled from "styled-components";

interface ElementActiveProps {
  isShowLocationBntActivate: boolean;
  isSubmitButtonColorActivate: boolean;
  isSubmitButtonMarginActivate: boolean;
}

export const WholeWritingPageContainer = styled.div`
  width: 100vw;
  height: 113vh;
  background-color: #f2f2f2;
  overflow: hidden;
`;
export const MainItemContainer = styled.div`
  margin-left: 10.5%;
  padding-top: 2%;
`;
export const TitleBox = styled.div``;
export const Title1 = styled.p`
  color: #090a0a;
  font-family: "Pretendard";
  font-size: 180%;
  font-weight: 700;
  margin-bottom: 0%;
`;
export const Title2 = styled.p`
  color: #303437;
  font-family: "Pretendard";
  font-size: 110%;
  font-weight: 400;
  margin-top: 0.5%;
`;

export const MainContentContainer = styled.div`
  margin-top: 3%;
`;

export const WritingItemTitle = styled.h5`
  color: #434244;
  font-family: "Pretendard";
  font-size: 105%;
  font-weight: 550;
  margin: 0;
`;
export const InputTitleContentBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2%;
`;

export const TitleInputPlace = styled.input`
  margin-top: 1%;
  padding-left: 1%;
  width: 48.5%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #d8dae0;
  background: #fff;
  outline-color: #6823c2;
  color: black;
  font-family: "Pretendard";
  font-size: 100%;
  font-weight: 400;
`;

export const ShowLocationBnt = styled.button<ElementActiveProps>`
  cursor: pointer;
  margin-left: 2%;
  border-radius: 5px;
  border: 1px solid #d8dae0;
  color: ${(props) => (props.isShowLocationBntActivate ? "white" : "gray")};
  font-family: "Pretendard";
  font-size: 100%;
  font-weight: 600;
  padding: 15px 20px;
  background-color: ${(props) =>
    props.isShowLocationBntActivate ? "#6823c2" : "#f2f2f2"};
`;

export const ShowLoactionMap = styled.div`
  height: 450px;
  width: 87%;
  margin-top: 2%;
  position: relative;
`;
export const SubmitBnt = styled.button<ElementActiveProps>`
  cursor: pointer;
  position: absolute;
  border-radius: 5px;
  border: 1px solid #d8dae0;
  color: ${(props) => (props.isSubmitButtonColorActivate ? "white" : "gray")};
  font-family: "Pretendard";
  font-size: 100%;
  font-weight: 600;
  margin-top: ${(props) =>
    props.isSubmitButtonMarginActivate ? "2%" : "-30%"};
  padding: 15px 70px;
  background-color: ${(props) =>
    props.isSubmitButtonColorActivate ? "#6823c2" : "#f2f2f2"};
`;

export const ErrorMessage = styled.p`
  color: #d2092d;
  font-family: "Pretendard";
  font-size: 80%;
  font-weight: 400;
  margin-top: 1%;
`;
