import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    const widthSize = isClient ? window.innerWidth : undefined;
    const size = {
      width: '',
      height: ''
    };

    if (widthSize >= 991) {
      size.width = 644;
      size.height = 373;
    }
    
    if (widthSize <= 990) {
      size.width = 410;
      size.height = 380;
    }
    
    if (widthSize <= 880) {
      size.width = 330;
      size.height = 250;
    }        
    if (widthSize <= 719) {
      size.width = 260;
      size.height = 250;
    }
    if (widthSize <= 559) {
      size.width = 300;
      size.height = 250;
    }

    return size;
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}