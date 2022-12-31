import Header from '@/components/Header/Header';
import * as S from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.Content>
        <Header />
        {children}
      </S.Content>
    </S.Layout>
  );
};

export default Layout;
