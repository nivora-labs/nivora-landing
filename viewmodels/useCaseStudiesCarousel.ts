"use client";

import { useState, useCallback, useMemo } from 'react';
import { CASE_STUDIES } from '@/models';

export function useCaseStudiesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = CASE_STUDIES.length;

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const visibleItems = useMemo(() => {
    const prevIndex = activeIndex === 0 ? total - 1 : activeIndex - 1;
    const nextIndex = activeIndex === total - 1 ? 0 : activeIndex + 1;
    return { prevIndex, nextIndex };
  }, [activeIndex, total]);

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
    }),
  };

  const currentSlide = CASE_STUDIES[activeIndex];
  const prevSlide = CASE_STUDIES[visibleItems.prevIndex];
  const nextSlide = CASE_STUDIES[visibleItems.nextIndex];

  return {
    activeIndex,
    direction,
    total,
    handlePrev,
    handleNext,
    goToSlide,
    visibleItems,
    slideVariants,
    currentSlide,
    prevSlide,
    nextSlide,
    caseStudies: CASE_STUDIES,
  };
}

