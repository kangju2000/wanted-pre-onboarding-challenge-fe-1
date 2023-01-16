import AuthForm from '@/components/AuthForm/AuthForm';
import { useSignUp } from '@/hooks/queries/auth';
import { AuthType } from '@/types/auth';
import * as S from './SignUp.styles';

function SignUp() {
  const { mutate } = useSignUp();

  const onSignUpSubmit = ({ email, password }: AuthType) => {
    mutate({ email, password });
  };

  return (
    <S.SignUp>
      <S.SignUpContainer>
        <AuthForm title="회원가입" onAuthSubmit={onSignUpSubmit} />
      </S.SignUpContainer>
    </S.SignUp>
  );
}

export default SignUp;
