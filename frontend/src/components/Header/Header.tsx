import { useNavigate } from 'react-router-dom';
import ROUTES from '@/constants/routes';
import * as S from './Header.styles';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <S.Header>
      <S.Title onClick={handleClick}>Todo App</S.Title>
    </S.Header>
  );
};

export default Header;
