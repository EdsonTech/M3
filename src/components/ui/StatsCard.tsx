import React, { useEffect, useState, useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { useInView } from '../../utils/hooks/useInView';

interface StatsCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
}

const StatsCard = ({ icon: Icon, value, label, suffix = '' }: StatsCardProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        if (currentStep < steps) {
          setCount(Math.round(stepValue * currentStep));
          currentStep++;
        } else {
          setCount(value);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-white/10">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="text-3xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white/80 font-medium text-sm">{label}</div>
    </div>
  );
};

export default StatsCard;