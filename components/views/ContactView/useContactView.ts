"use client";

import { useState, useCallback } from "react";
import { useContactForm } from "@/viewmodels";

export type ContactViewStep = "initial" | "options" | "form";

export function useContactView() {
    const [step, setStep] = useState<ContactViewStep>("initial");
    const contactForm = useContactForm();

    const handleBookCall = useCallback(() => {
        window.open("https://calendly.com/comercial-nivoralabs/discovery-call", "_blank");
    }, []);

    const handleSendMessage = useCallback(() => {
        setStep("form");
    }, []);

    const handleShowOptions = useCallback(() => {
        setStep("options");
    }, []);

    const handleBackToInitial = useCallback(() => {
        setStep("initial");
    }, []);

    return {
        step,
        handleBookCall,
        handleSendMessage,
        handleShowOptions,
        handleBackToInitial,
        contactForm,
    };
}
