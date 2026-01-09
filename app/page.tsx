import {
  HeaderView,
  HeroView,
  CaseStudiesView,
  ServicesView,
  ContactView,
  FooterView,
  BackgroundGradients,
  AboutView,
} from "@/components/views";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundGradients />
      <div className="relative z-10">
        <HeaderView />
        <HeroView />
        <CaseStudiesView />
        <ServicesView />
        <ContactView />
        <FooterView />
      </div>
    </main>
  );
}
