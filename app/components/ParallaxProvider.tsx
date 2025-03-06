'use client';

import { useEffect } from 'react';

export default function ParallaxProvider() {
  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const delta = scrolled - lastScrollY;
          
          // 处理视差元素
          document.querySelectorAll('.parallax').forEach((element) => {
            const speed = element.getAttribute('data-speed') || '0.1';
            const yPos = -(scrolled * Number(speed));
            (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });

          // 处理浮动卡片
          document.querySelectorAll('.floating-card').forEach((element, index) => {
            const baseDelay = index * 0.1; // 为每个卡片添加不同的延迟
            const yOffset = Math.sin((scrolled * 0.002) + baseDelay) * 5;
            const rotation = Math.sin((scrolled * 0.002) + baseDelay) * 0.5;
            (element as HTMLElement).style.transform = 
              `translateY(${yOffset}px) rotate(${rotation}deg)`;
          });

          lastScrollY = scrolled;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
} 