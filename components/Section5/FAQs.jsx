import { useState } from "react";
import { X, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import "./FAQs.css";
import Pbutton from "../Other/Pbutton";
import star from "../../assets/star.svg";
import man4 from "../../assets/man4.webp";
import Button from "../Other/button";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState("item-1"); // Set the first item as open by default

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item); // Toggle the item
  };

  const faqs = [
    {
      id: "item-1",
      question: "What services do you offer?",
      answer:
        "I specialize in Web Development, branding, UI/UX, and Web Design, creating modern, user-friendly experiences tailored to your needs.",
    },
    {
      id: "item-2",
      question: "How do I start working with you?",
      answer:
        "Simply reach out through my contact page, and we’ll discuss your project, goals, and timeline before getting started.",
    },
    {
      id: "item-3",
      question: "What design tools do you use?",
      answer:
        "I primarily use Framer, Figma, Adobe Suite, and Webflow to craft high-quality designs and functional prototypes.",
    },
    {
      id: "item-4",
      question: "How long does a project take?",
      answer:
        "Timelines vary based on project complexity, but most designs take 1–3 weeks, while full websites take 3–6 weeks.",
    },
    {
      id: "item-5",
      question: "Do you provide revisions?",
      answer:
        "Yes! I offer two free rounds of revisions to ensure the final design meets your vision perfectly. Additional revisions are available if needed.",
    },
    {
      id: "item-6",
      question: "What industries do you work with?",
      answer:
        "I’ve designed for tech startups, agencies, e-commerce, personal brands, and more—but I’m open to working with any industry.",
    },
    {
      id: "item-7",
      question: "Do you offer development services?",
      answer:
        "Yes! I build fully functional websites and provide a smooth handoff for other platforms if needed.",
    },
    {
      id: "item-8",
      question: "What is your pricing structure?",
      answer:
        "Pricing depends on the project scope. Contact me for a custom quote based on your needs and budget.",
    },
    {
      id: "item-9",
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely! I can refresh and optimize your current website to improve performance, usability, and aesthetics.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
                  <div className="faq-left">
                    <div className="faq-left-inner">
                      <Link to="/contact">
                        <Pbutton className="s4-pbutt">Frequently Asked Questions</Pbutton>
                      </Link>
                    </div>

                    <div className="faq-left-inner-text">
                      <h2 className="faq-heading">
                        Questions, <span className="faq-subheading">Answers</span>
                      </h2>
                      <p className="faq-description">
                        Get quick answers to your most pressing questions
                      </p>

                      <div className="testimonial-card">
                        <div className="testimonial-card-inner">
                          <img src={man4} alt="Alex Carter NexaWeb Solutions Client Testimonial for GIXI AI Solutions" className="testimonial-card-image" loading="lazy" />
                          <div className="testimonial-card-text">
                            <h3>Alex Carter</h3>
                            <p>NexaWeb Solutions</p>
                          </div>
                        </div>
                        <hr />
                        <div>
                          <div className="testimonial-card-rating">
                            <p>5.0</p>
                            <div className="testimonial-stars">
                              <img src={star} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" loading="lazy" />
                              <img src={star} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" loading="lazy" />
                              <img src={star} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" loading="lazy" />
                              <img src={star} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" loading="lazy" />
                              <img src={star} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" loading="lazy" />
                            </div>
                          </div>
                          <div className="testimonial-card-description">
                            <p>
                              Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-button-container">
                        <Link to="/contact">
                          <Button className="my-custom-class">Contact Now</Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - FAQ Accordion */}
          <div className="faq-right">
            {faqs.map((faq) => (
              <div
              key={faq.id}
              className={`faq-item ${openItem === faq.id ? "open" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleItem(faq.id)}
              >
                <span>{faq.question}</span>
                <div className="faq-icon-container">
                  {openItem === faq.id ? (
                    <X className="faq-icon" />
                  ) : (
                    <Plus className="faq-icon" />
                  )}
                </div>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
