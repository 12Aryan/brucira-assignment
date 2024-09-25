import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"; // Use angle up for the open state

const faqItems = [
  {
    question: "How do I sign up?",
    answer:
      "You can sign up by clicking the sign-up button located at the top right corner of the homepage. After clicking, you'll be redirected to the registration page where you'll be asked to fill in basic details like your full name, email address, and a secure password. Once completed, an email verification link will be sent to your inbox. Please verify your email to activate your account and complete the sign-up process.",
  },
  {
    question:
      "What information do I need to provide during the sign-up process?",
    answer:
      "During the sign-up process, you'll need to provide essential details such as your full name, a valid email address, and a password of your choice. We also recommend adding a phone number for account recovery purposes, though it's optional. After entering this information, you may be required to accept our terms of service and privacy policy before proceeding. Providing accurate and up-to-date information ensures that your account remains secure and that you can easily recover it if needed.",
  },
  {
    question: "Is my information secure during the sign-up process?",
    answer:
      "Absolutely! We prioritize your privacy and security. All the information you provide during the sign-up process is encrypted using industry-standard SSL (Secure Socket Layer) technology. This ensures that your personal data is transmitted securely over the internet. Additionally, we do not share your information with third parties without your consent, and we regularly update our security protocols to guard against any unauthorized access to our systems. You can read more about our data protection practices in our Privacy Policy.",
  },
  {
    question: "Who can apply?",
    answer:
      "Anyone who meets our basic eligibility criteria is welcome to apply. Generally, we require applicants to be at least 18 years old and legally eligible to enter into a contract. Depending on the specific program or collaboration, additional qualifications may apply. For example, some opportunities may be limited to professionals in certain industries or locations. Detailed eligibility criteria will be outlined in the specific program or project description, so be sure to review those before applying.",
  },
  {
    question: "What are the terms and conditions for the collaboration?",
    answer:
      "The terms and conditions for the collaboration include the specific obligations, roles, and responsibilities of all parties involved. This typically covers the scope of work, payment terms, timelines, confidentiality agreements, intellectual property rights, and termination clauses. It's important to review these terms carefully before agreeing to ensure that you understand your commitments. If you have any questions or need clarification, please don't hesitate to reach out to us before signing the agreement. Full details of the terms and conditions can be found on our website.",
  },
  {
    question: "What is the minimum duration of the contract?",
    answer:
      "The minimum duration of the contract is typically 6 months, though it may vary depending on the specific program or collaboration. During this period, both parties are expected to fulfill their contractual obligations. If either party wishes to terminate the contract before the end of this period, there may be penalties or conditions for early termination outlined in the agreement. After the minimum duration has been met, you may have the option to renew or renegotiate the contract based on mutual agreement.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which item is open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="flex flex-col md:w-[60%] md:justify-normal w-auto justify-center">
      {faqItems.map((item, index) => (
        <div key={index}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div
              className={`font-normal xs:text-sm md:text-base lg:text-base xl:text-lg text-[#111010] py-6 ${
                openIndex === index ? "pb-2" : ""
              }`}
            >
              {item.question}
            </div>
            {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {openIndex !== index && (
            <hr className="border-[1px] border-[#11101026]" />
          )}
          {index === faqItems.length - 1 &&
            openIndex !== faqItems.length - 1 && (
              <hr className="border-[1px] border-[#11101026]" />
            )}
          {/* Conditionally render the answer */}
          {openIndex === index && (
            <>
              <div className="pb-4 font-light text-sm md:text-sm lg:text-sm xl:text-base text-[#111010]">
                {item.answer}
              </div>
              <hr className="border-[1px] border-[#11101026]" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
