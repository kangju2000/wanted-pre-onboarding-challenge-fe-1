import Header from '@/components/Header/Header';
import SnackBar from '@/components/SnackBar/SnackBar';
import useSnackBar from '@/hooks/useSnackBar';
import * as S from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isShown, message } = useSnackBar();

  return (
    <S.Layout>
      <S.Container>
        <Header />
        <S.Content>{children}</S.Content>
        <SnackBar isShown={isShown} message={message} />
      </S.Container>
    </S.Layout>
  );
};

export default Layout;
