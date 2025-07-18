import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can join this course?",
      answer: "Any graduate or final year student who is preparing for SBI PO exam can join our course. We welcome students from all academic backgrounds including Arts, Science, Commerce, and Engineering."
    },
    {
      question: "Are classes live or recorded?",
      answer: "We provide both live interactive online classes via Zoom and recorded sessions. Live classes allow real-time interaction with faculty, while recorded sessions help you revise at your own pace."
    },
    {
      question: "Will I get study materials?",
      answer: "Yes, you will receive comprehensive PDF study materials covering the entire SBI PO syllabus, practice papers, previous year questions, and current affairs updates."
    },
    {
      question: "What is the fee and duration?",
      answer: "Our course is competitively priced with flexible payment options. The complete program runs for 4-6 months with intensive preparation. Contact us for current fee structure and early-bird discounts."
    },
    {
      question: "How many mock tests are included?",
      answer: "The course includes 500+ mock tests covering all sections - Reasoning, Quantitative Aptitude, English, General Awareness, and Descriptive Writing. Each test comes with detailed performance analysis."
    },
    {
      question: "Is the course available in regional languages?",
      answer: "Yes, our course is available in both English and Tamil to cater to students from different linguistic backgrounds. All study materials and doubt clearing sessions are provided in both languages."
    },
    {
      question: "What kind of support is provided for doubt clearing?",
      answer: "We conduct regular doubt clearing sessions where you can directly interact with our expert faculty. Additionally, we have a dedicated support team to address your queries through WhatsApp and email."
    },
    {
      question: "What is your success rate?",
      answer: "We are proud to have a 95% success rate with over 10,000 students successfully placed in various banking positions. Our experienced faculty and comprehensive training methodology ensure excellent results."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            Got questions? We've got answers. Everything you need to know about our SBI PO course.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-poppins font-semibold text-secondary hover:text-primary transition-colors duration-300 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-card-foreground font-poppins leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-poppins mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+919876543210" 
              className="text-secondary hover:text-primary font-poppins font-medium transition-colors duration-300"
            >
              📞 +91 98765 43210
            </a>
            <a 
              href="https://wa.me/919876543210" 
              className="text-secondary hover:text-primary font-poppins font-medium transition-colors duration-300"
            >
              💬 WhatsApp Chat
            </a>
            <a 
              href="mailto:info@shankarbanking.com" 
              className="text-secondary hover:text-primary font-poppins font-medium transition-colors duration-300"
            >
              ✉️ Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;