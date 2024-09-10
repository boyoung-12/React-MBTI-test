import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <TitleBox>
        <div>무료 성격테스트</div>
        <div>
          자신의 성격 유형을 확인할 수 있도록 솔직담100하게 답변해 주세요.
        </div>
      </TitleBox>
      <ContentBoxs>
        <FirstBox>
          <div>성격 유형 검사</div>
          <div>
            자신의 성격 유형을 파악하고 삶의 여럭 영역에서 어떤 영향을 미치는지
            알아보세요
          </div>
        </FirstBox>
        <SecondBox>
          <div>성격 유형 이해</div>
          <div>
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </div>
        </SecondBox>
        <ThirdBox>
          <div>팀 평가</div>
          <div>
            팀 내에게 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워부세요.
          </div>
        </ThirdBox>
      </ContentBoxs>
      <StartLink>
        <Link to="/login">내 성격 알아보러 gogo</Link>
      </StartLink>
    </Container>
  );
};

export default Home;

const TitleBox = styled.div`
  background-color: #d0e4f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Container = styled.div`
  background-color: #d0e4f5;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-around;
  align-items: center;
`;

const ContentBoxs = styled.div`
  display: flex;
  gap: 40px;
`;

const FirstBox = styled.div`
  background-color: white;
  width: 280px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 20px;
  border-radius: 20px;
`;

const SecondBox = styled.div`
  background-color: white;
  width: 280px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 20px;
  border-radius: 20px;
`;

const ThirdBox = styled.div`
  background-color: white;
  width: 280px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 20px;
  border-radius: 20px;
`;

const StartLink = styled.div`
  width: 200px;
  height: 45px;
  background-color: red;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
