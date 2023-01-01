import Header from '@/components/Header/Header';
import * as S from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.Container>
        <Header />
        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Layout>
  );
};

export default Layout;
