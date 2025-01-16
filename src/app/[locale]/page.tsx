import Header from '@/components/header/Header';
import Main from '@/modules/landing/main/Main';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

const Home = async (props: { params: { locale: string } }) => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <Main />
    </HydrationBoundary>
  );
};

export default Home;
