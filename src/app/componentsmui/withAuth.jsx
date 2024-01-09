import { useEffect } from 'react';
import { useLoggedUserContext } from '@/app/Contexts/GetLoggedUser';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  const AuthRoute = (props) => {
    const { user } = useLoggedUserContext();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        const timeoutId = setTimeout(() => {
          router.push('/signin');
        }, 3000);

        return () => clearTimeout(timeoutId); // Clear the timeout on unmount
      }
    }, [user, router]);

    return <WrappedComponent {...props} />;
  };

  return AuthRoute;
};

export default withAuth;
