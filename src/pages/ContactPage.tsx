import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a free, detailed and transparent quote on your next project."
        breadcrumb="Contact"
      />
      <ContactSection />
    </PageLayout>
  );
}
