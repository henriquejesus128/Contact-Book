import { FourHundredFour, LinkStyle, NotFound } from "./style";

const NotFoundPage = () => {
  return (
    <>
      <FourHundredFour>404</FourHundredFour>
      <NotFound>Not Found Page</NotFound>
      <LinkStyle to="/">Go to Home</LinkStyle>
    </>
  );
};

export default NotFoundPage;
