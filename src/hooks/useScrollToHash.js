import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToHash = ref => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;

    if (!id) {
      return;
    }

    const element = [...ref.current.children].find(child => child.id === id.toLowerCase());

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
    });
  }, [location.state?.scrollTo, ref]);
};
