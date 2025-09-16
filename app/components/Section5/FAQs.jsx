'use client'
import { useState } from "react";
import { X, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "./FAQs.css";
import Pbutton from "../Other/Pbutton";
import Button from "../Other/button";
import { PATHS } from "../../constants/assetPaths";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState("item-1");

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  const faqs = [
    {
      id: "item-1",
      question: "What automation solutions do you offer?",
      answer:
        "We provide end-to-end automation services including workflow automation, robotic process automation (RPA), and custom automation software tailored to your business needs.",
    },
    {
      id: "item-2",
      question: "How do I start automating my business processes?",
      answer:
        "Contact us to discuss your current workflows and pain points. We’ll analyze your requirements and recommend the best automation strategy for your organization.",
    },
    {
      id: "item-3",
      question: "Which tools and platforms do you use for automation?",
      answer:
        "We utilize leading automation platforms such as UiPath, Zapier, Power Automate, and custom scripts using Python, JavaScript, and more.",
    },
    {
      id: "item-4",
      question: "How long does it take to implement an automation project?",
      answer:
        "Project timelines vary based on complexity, but most automation solutions are delivered within 2–6 weeks after requirements are finalized.",
    },
    {
      id: "item-5",
      question: "Can you automate legacy systems?",
      answer:
        "Yes! We specialize in integrating and automating legacy systems using APIs, RPA, and custom connectors.",
    },
    {
      id: "item-6",
      question: "What industries do you serve with automation?",
      answer:
        "We work with finance, healthcare, e-commerce, logistics, and many other industries to streamline operations and reduce manual work.",
    },
    {
      id: "item-7",
      question: "Do you provide support and maintenance for automation solutions?",
      answer:
        "Absolutely! We offer ongoing support, monitoring, and optimization to ensure your automation runs smoothly.",
    },
    {
      id: "item-8",
      question: "How much does automation cost?",
      answer:
        "Pricing depends on the scope and complexity of your automation needs. Contact us for a tailored quote.",
    },
    {
      id: "item-9",
      question: "Can you automate repetitive tasks in my current software?",
      answer:
        "Yes, we can automate repetitive tasks in most modern and legacy software platforms, improving efficiency and accuracy.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-left">
            <div className="faq-left-inner">
              <Link href="/contact">
                <Pbutton className="s4-pbutt">Automation FAQs</Pbutton>
              </Link>
            </div>

            <div className="faq-left-inner-text">
              <h2 className="faq-heading">
                Question, <span className="faq-subheading">Answers</span>
              </h2>
              <p className="faq-description">
                Get quick answers to your most common automation questions
              </p>

              <div className="testimonial-card">
                <div className="testimonial-card-inner">
                  <Image src={PATHS.TEAM.MAN_4} alt="Alex Carter NexaWeb Solutions Client Testimonial for GIXI AI Solutions" className="testimonial-card-image" width={80} height={80} />
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
                      <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={16} height={16} />
                      <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={16} height={16} />
                      <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={16} height={16} />
                      <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={16} height={16} />
                      <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={16} height={16} />
                    </div>
                  </div>
                  <div className="testimonial-card-description">
                    <p>
                      Their automation expertise transformed our operations, saving us time and reducing errors across the board!
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-button-container">
                <Link href="/contact">
                  <Button className="my-custom-class">Automate Now</Button>
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
