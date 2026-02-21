"use client";

import type React from "react";
import { useState } from "react";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import { ContactViewStep } from "../useContactView";

interface LetsWorkProps {
    step: ContactViewStep;
    onBookCall: () => void;
    onSendMessage: () => void;
}

export function LetsWork({ step, onBookCall, onSendMessage }: LetsWorkProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const [isBtn1Hovered, setIsBtn1Hovered] = useState(false);
    const [isBtn2Hovered, setIsBtn2Hovered] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsClicked(true);

        setTimeout(() => {
            setShowSuccess(true);
        }, 500);
    };

    if (step === "form") return null;

    return (
        <section className="flex min-h-[50vh] items-center justify-center px-6 bg-transparent overflow-hidden pb-12 pt-20">
            <div className="relative flex flex-col items-center gap-12 w-full max-w-5xl">
                <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                        opacity: showSuccess ? 1 : 0,
                        transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                        pointerEvents: showSuccess ? "auto" : "none",
                    }}
                >
                    {/* Elegant heading */}
                    <div className="flex flex-col items-center gap-2">
                        <span
                            className="text-xs font-medium tracking-[0.3em] uppercase text-gray-500 transition-all duration-500"
                            style={{
                                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "100ms",
                            }}
                        >
                            Perfeito
                        </span>
                        <h3
                            className="text-3xl font-semibold tracking-tight text-gray-900 transition-all duration-500 sm:text-4xl"
                            style={{
                                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "200ms",
                            }}
                        >
                            Vamos conversar
                        </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                        {/* Book a call button */}
                        <button
                            onClick={onBookCall}
                            onMouseEnter={() => setIsBtn1Hovered(true)}
                            onMouseLeave={() => setIsBtn1Hovered(false)}
                            className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
                            style={{
                                transform: showSuccess
                                    ? isBtn1Hovered
                                        ? "translateY(0) scale(1.02)"
                                        : "translateY(0) scale(1)"
                                    : "translateY(15px) scale(1)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "150ms",
                            }}
                        >
                            <div
                                className="h-px w-6 bg-gray-200 transition-all duration-500 sm:w-10"
                                style={{
                                    transform: isBtn1Hovered ? "scaleX(0)" : "scaleX(1)",
                                    opacity: isBtn1Hovered ? 0 : 1,
                                }}
                            />

                            <div
                                className="relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4"
                                style={{
                                    borderColor: isBtn1Hovered ? "#111827" : "#e5e7eb",
                                    backgroundColor: isBtn1Hovered ? "#111827" : "transparent",
                                    boxShadow: isBtn1Hovered ? "0 0 30px rgba(0,0,0,0.1), 0 10px 40px rgba(0,0,0,0.08)" : "none",
                                }}
                            >
                                <Calendar
                                    className="w-4 h-4 transition-all duration-500 sm:w-5 sm:h-5"
                                    strokeWidth={1.5}
                                    style={{
                                        color: isBtn1Hovered ? "#ffffff" : "#111827",
                                    }}
                                />
                                <span
                                    className="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base whitespace-nowrap"
                                    style={{
                                        color: isBtn1Hovered ? "#ffffff" : "#111827",
                                    }}
                                >
                                    Marcar Reunião
                                </span>
                                <ArrowUpRight
                                    className="w-4 h-4 transition-all duration-500 sm:w-5 sm:h-5"
                                    strokeWidth={1.5}
                                    style={{
                                        color: isBtn1Hovered ? "#ffffff" : "#111827",
                                        transform: isBtn1Hovered ? "translate(3px, -3px) scale(1.1)" : "translate(0, 0) scale(1)",
                                    }}
                                />
                            </div>

                            <div
                                className="h-px w-6 bg-gray-200 transition-all duration-500 sm:w-10"
                                style={{
                                    transform: isBtn1Hovered ? "scaleX(0)" : "scaleX(1)",
                                    opacity: isBtn1Hovered ? 0 : 1,
                                }}
                            />
                        </button>

                        {/* Send a message button */}
                        <button
                            onClick={onSendMessage}
                            onMouseEnter={() => setIsBtn2Hovered(true)}
                            onMouseLeave={() => setIsBtn2Hovered(false)}
                            className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
                            style={{
                                transform: showSuccess
                                    ? isBtn2Hovered
                                        ? "translateY(0) scale(1.02)"
                                        : "translateY(0) scale(1)"
                                    : "translateY(15px) scale(1)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "250ms",
                            }}
                        >
                            <div
                                className="h-px w-6 bg-gray-200 transition-all duration-500 sm:w-10 hidden sm:block"
                                style={{
                                    transform: isBtn2Hovered ? "scaleX(0)" : "scaleX(1)",
                                    opacity: isBtn2Hovered ? 0 : 1,
                                }}
                            />

                            <div
                                className="relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4"
                                style={{
                                    borderColor: isBtn2Hovered ? "#111827" : "#e5e7eb",
                                    backgroundColor: isBtn2Hovered ? "#111827" : "transparent",
                                    boxShadow: isBtn2Hovered ? "0 0 30px rgba(0,0,0,0.1), 0 10px 40px rgba(0,0,0,0.08)" : "none",
                                }}
                            >
                                <Mail
                                    className="w-4 h-4 transition-all duration-500 sm:w-5 sm:h-5"
                                    strokeWidth={1.5}
                                    style={{
                                        color: isBtn2Hovered ? "#ffffff" : "#111827",
                                    }}
                                />
                                <span
                                    className="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base whitespace-nowrap"
                                    style={{
                                        color: isBtn2Hovered ? "#ffffff" : "#111827",
                                    }}
                                >
                                    Enviar Mensagem
                                </span>
                                <ArrowUpRight
                                    className="w-4 h-4 transition-all duration-500 sm:w-5 sm:h-5"
                                    strokeWidth={1.5}
                                    style={{
                                        color: isBtn2Hovered ? "#ffffff" : "#111827",
                                        transform: isBtn2Hovered ? "translate(3px, -3px) scale(1.1)" : "translate(0, 0) scale(1)",
                                    }}
                                />
                            </div>

                            <div
                                className="h-px w-6 bg-gray-200 transition-all duration-500 sm:w-10 hidden sm:block"
                                style={{
                                    transform: isBtn2Hovered ? "scaleX(0)" : "scaleX(1)",
                                    opacity: isBtn2Hovered ? 0 : 1,
                                }}
                            />
                        </button>
                    </div>

                    {/* Subtle subtext */}
                    <span
                        className="text-xs tracking-widest uppercase text-gray-400 transition-all duration-500 mt-6"
                        style={{
                            transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                            opacity: showSuccess ? 1 : 0,
                            transitionDelay: "450ms",
                        }}
                    >
                        Selecione uma opção
                    </span>
                </div>

                <div
                    className="flex items-center gap-3 transition-all duration-500"
                    style={{
                        opacity: isClicked ? 0 : 1,
                        transform: isClicked ? "translateY(-20px)" : "translateY(0)",
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
                        Disponível para projetos
                    </span>
                </div>

                <div
                    className="group relative cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleClick}
                    style={{
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <div className="flex flex-col items-center gap-6">
                        <h2
                            className="relative text-center text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{
                                opacity: isClicked ? 0 : 1,
                                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
                            }}
                        >
                            <span className="block overflow-hidden pb-2">
                                <span
                                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                    style={{
                                        transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                                    }}
                                >
                                    Vamos trabalhar
                                </span>
                            </span>
                            <span className="block overflow-hidden">
                                <span
                                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                                    style={{
                                        transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                                    }}
                                >
                                    <span className="text-gray-400">juntos</span>
                                </span>
                            </span>
                        </h2>

                        <div className="relative mt-4 flex w-16 h-16 items-center justify-center sm:w-20 sm:h-20">
                            <div
                                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                                style={{
                                    borderColor: isClicked ? "#111827" : isHovered ? "#111827" : "#e5e7eb",
                                    backgroundColor: isClicked ? "transparent" : isHovered ? "#111827" : "transparent",
                                    transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                                    opacity: isClicked ? 0 : 1,
                                    transitionDuration: isClicked ? "700ms" : "500ms",
                                }}
                            />
                            <ArrowUpRight
                                className="w-6 h-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-7 sm:h-7"
                                style={{
                                    transform: isClicked
                                        ? "translate(100px, -100px) scale(0.5)"
                                        : isHovered
                                            ? "translate(2px, -2px)"
                                            : "translate(0, 0)",
                                    opacity: isClicked ? 0 : 1,
                                    color: isHovered && !isClicked ? "#ffffff" : "#111827",
                                    transitionDuration: isClicked ? "600ms" : "500ms",
                                }}
                            />
                        </div>
                    </div>

                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
                        <div
                            className="h-px w-8 bg-gray-200 transition-all duration-500 sm:w-12"
                            style={{
                                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                                opacity: isClicked ? 0 : isHovered ? 1 : 1,
                            }}
                        />
                    </div>
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
                        <div
                            className="h-px w-8 bg-gray-200 transition-all duration-500 sm:w-12"
                            style={{
                                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                                opacity: isClicked ? 0 : isHovered ? 1 : 1,
                            }}
                        />
                    </div>
                </div>

                <div
                    className="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100 px-4"
                    style={{
                        opacity: isClicked ? 0 : 1,
                        transform: isClicked ? "translateY(20px)" : "translateY(0)",
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <p className="max-w-md text-sm leading-relaxed text-gray-500">
                        Tem um projeto em mente? Nós adoraríamos ouvir sobre ele. Vamos criar algo excepcional juntos.
                    </p>
                    <span className="text-xs tracking-widest uppercase text-gray-400">comercial@nivoralabs.com</span>
                </div>
            </div>
        </section>
    );
}
