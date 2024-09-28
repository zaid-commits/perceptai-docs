import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (currentScroll / height) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ width: `${scrollProgress}%`, height: '4px', background: '#2196F3' }} />
  );
};
