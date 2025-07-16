import styled from "styled-components";
const HomeContainer = ({ className }) => {
  return (
    <>
      <p className={className}>Добро пожаловать!<br/> Вы во вселенной Рика и Морти!</p>
      <img src={'/src/assets/i.jpg'} alt="" width='500px'/>
    </>
  );
};
export const Home = styled(HomeContainer)`
    font-size: 30px;
    color: #47c36a;
`