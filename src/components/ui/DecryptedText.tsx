'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  className = '',
  revealDirection = 'start',
  useOriginalCharsOnly = false,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    if (isInView || isHovering) {
      setIsScrambling(true);
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split('')
            .map((letter, index) => {
              if (letter === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              if (useOriginalCharsOnly) {
                return text[Math.floor(Math.random() * text.length)];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsScrambling(false);
        }

        iteration += 1 / (maxIterations / text.length);
      }, speed);
    }

    return () => clearInterval(interval);
  }, [isInView, isHovering, text, speed, maxIterations, useOriginalCharsOnly]);

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
}
