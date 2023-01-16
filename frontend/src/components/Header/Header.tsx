import { useNavigate } from 'react-router-dom';
import Button from '@/components/Common/Button/Button';
import ROUTES from '@/constants/routes';
import useSnackBar from '@/hooks/useSnackBar';
import { getToken, setToken } from '@/utils/storage';
import * as S from './Header.styles';

const Header = () => {
  const navigate = useNavigate();
  const { showSnackBar } = useSnackBar();
  const isLogin = !!getToken();

  const onTitleClick = () => {
    navigate(ROUTES.HOME);
  };

  const onAuthClick = () => {
    if (isLogin) {
      setToken('');
      showSnackBar('로그아웃 되었습니다.');
      navigate(ROUTES.HOME);
      return;
    }

    navigate(ROUTES.LOGIN);
  };

  return (
    <S.Header>
      <S.Title onClick={onTitleClick}>Todo App</S.Title>
      <Button size="small" onClick={onAuthClick}>
        {isLogin ? '로그아웃' : '로그인'}
      </Button>
    </S.Header>
  );
};

export default Header;
