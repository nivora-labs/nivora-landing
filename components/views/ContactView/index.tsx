"use client";

import { useContactView } from "./useContactView";
import { LetsWork } from "./partials/LetsWork";
import { ContactForm } from "./partials/ContactForm";

export function ContactView() {
    const {
        step,
        handleBookCall,
        handleSendMessage,
        handleBackToInitial,
        contactForm,
    } = useContactView();

    return (
        <div className="mx-auto max-w-7xl rounded-[3rem] overflow-hidden bg-[#fafafa] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] my-20 border border-gray-200">
            <LetsWork
                step={step}
                onBookCall={handleBookCall}
                onSendMessage={handleSendMessage}
            />

            <ContactForm
                step={step}
                contactForm={contactForm}
                onBack={handleBackToInitial}
            />
        </div>
    );
}
