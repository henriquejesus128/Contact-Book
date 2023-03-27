import {
  FourHundredFour,
  LinkStyle,
  NotFound,
  NotFoundContainer,
} from "./style";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <FourHundredFour>404</FourHundredFour>
      <NotFound>Not Found Page</NotFound>
      <LinkStyle to="/">Go to Home</LinkStyle>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
