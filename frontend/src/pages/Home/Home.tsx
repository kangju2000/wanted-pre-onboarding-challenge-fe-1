import { useNavigate } from 'react-router-dom';
import Button from '@/components/Common/Button/Button';
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
        μμνκΈ°
      </Button>
    </S.Home>
  );
}

export default Home;
