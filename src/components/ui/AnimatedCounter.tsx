import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2.5,
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          separator=","
          suffix={suffix}
          prefix={prefix}
        />
      ) : (
        '0'
      )}
    </span>
  );
};

export default AnimatedCounter;