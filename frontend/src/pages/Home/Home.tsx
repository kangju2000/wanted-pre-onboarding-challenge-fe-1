import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';
import ROUTES from '@/constants/routes';
import * as S from './Home.styles';

function Home() {
  const navigate = useNavigate();

  const onTodoClick = () => {
    navigate(ROUTES.TODOS);
  };

  return (
    <S.Home>
      <S.Title>Todo App</S.Title>
      <Button size="large" onClick={onTodoClick}>
        시작하기
      </Button>
    </S.Home>
  );
}

export default Home;
