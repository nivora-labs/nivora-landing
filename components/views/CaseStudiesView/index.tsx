"use client";

import { useCaseStudiesView } from "./useCaseStudiesView";
import { SectionHeader } from "./partials/SectionHeader";
import { Carousel } from "./partials/Carousel";
import { CaseModal } from "./partials/CaseModal";

export function CaseStudiesView() {
    const caseStudiesView = useCaseStudiesView();

    return (
        <section id="case-studies" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <SectionHeader />

                {/* Carousel Wrapper */}
                <Carousel {...caseStudiesView} />

                {/* Modal */}
                <CaseModal
                    isModalOpen={caseStudiesView.isModalOpen}
                    setIsModalOpen={caseStudiesView.setIsModalOpen}
                    selectedCase={caseStudiesView.selectedCase}
                    startAutoSwipe={caseStudiesView.startAutoSwipe}
                />
            </div>
        </section>
    );
}
