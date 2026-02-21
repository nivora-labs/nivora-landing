import { useEffect, useRef, useCallback, useState } from "react";
import { PanInfo } from "framer-motion";
import { useCaseStudiesCarousel } from "@/viewmodels";

const AUTO_SWIPE_INTERVAL = 6000;

export function useCaseStudiesView() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCase, setSelectedCase] = useState<any>(null);

    const carouselData = useCaseStudiesCarousel();

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const isHoveredRef = useRef(false);
    const isDraggingRef = useRef(false);

    const startAutoSwipe = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (!isHoveredRef.current && !isDraggingRef.current) carouselData.handleNext();
        }, AUTO_SWIPE_INTERVAL);
    }, [carouselData]);

    const stopAutoSwipe = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    useEffect(() => {
        startAutoSwipe();
        return () => stopAutoSwipe();
    }, [startAutoSwipe, stopAutoSwipe]);

    const handleMouseEnter = () => { isHoveredRef.current = true; };
    const handleMouseLeave = () => { isHoveredRef.current = false; };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

    const handleDragStart = () => { isDraggingRef.current = true; };
    const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        isDraggingRef.current = false;
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) carouselData.handleNext();
        else if (swipe > swipeConfidenceThreshold) carouselData.handlePrev();
        startAutoSwipe();
    };

    const handleManualNavigation = (callback: () => void) => {
        callback();
        startAutoSwipe();
    };

    return {
        ...carouselData,
        isModalOpen,
        setIsModalOpen,
        selectedCase,
        setSelectedCase,
        handleMouseEnter,
        handleMouseLeave,
        handleDragStart,
        handleDragEnd,
        handleManualNavigation,
        startAutoSwipe,
        stopAutoSwipe
    };
}
