import styled from "styled-components";
export const Wrap = styled.section`
  height: calc(100vh);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;
export const Container = styled.div`
  height: calc(100vh - 120px);
`;
export const WrapContainer = styled.div`
  pointer-events: none;
`;
export const ImgWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const PlaceHolderDiv = styled.div`
  flex: 1;
`;
export const SectionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
`;
export const DetailsWrap = styled.div`
  flex: 0.55;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  /* mix-blend-mode: soft-light; */
  h1 {
    font-size: 60px;
  }

  span {
    font-size: 18px;
  }

  @media (max-width: 1000px) {
    flex:0.6;
    h1 {
      font-size: 40px;
    }
    span {
    font-size: 15px;
  }
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 30px;
    }
  }
`;
export const PlaceHolderDiv2 = styled.div`
  flex: 0.45;
  @media (max-width: 1000px) {
    flex:0.4;

  }
`;
