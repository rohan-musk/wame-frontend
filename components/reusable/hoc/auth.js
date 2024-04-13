import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
  selectCurrentAccessToken,
  selectIsAuthenticated,
} from '@lib/redux/auth/auth.selector';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const accessToken = useSelector(selectCurrentAccessToken);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    if (!accessToken || !isAuthenticated) {
      router.push('/');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
