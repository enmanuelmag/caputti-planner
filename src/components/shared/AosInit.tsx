import { useEffect } from 'react';

const AosInit = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import('aos');
      AOS.default.init({
        delay: 100,
        once: false,
        offset: 300,
        duration: 1250,
      });
    };

    initAOS();
  }, []);

  return null;
};

export default AosInit;
