"use client"; 

import Head from "next/head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HowItWorks = () => {
  return (
    <>
      <Head>
        <title>How It Works - AI Recruitment Platform</title>
        <meta
          name="description"
          content="Learn how our AI Recruitment Platform works."
        />
      </Head>
      <main className="bg-gradient-to-r from-blue-100 via-white to-blue-50 p-8 mt-10">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-12 animate-fade-in">
            How It Works
          </h1>
          <section className="space-y-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4 transition-transform transform hover:scale-105">
                    Step 1: Prepare for the Interview
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Get ready by selecting the type of interview and providing
                    some details about the job position. Customize the mock
                    experience to align with your goals.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4 transition-transform transform hover:scale-105">
                    Step 2: Start the AI Interview
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our AI will ask you a series of tailored questions and
                    evaluate your responses in real-time, ensuring a dynamic and
                    interactive interview experience.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4 transition-transform transform hover:scale-105">
                    Step 3: Receive Feedback
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Get detailed feedback on your performance, including
                    strengths, areas for improvement, and personalized
                    recommendations to enhance your skills.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 2s ease-out;
        }
      `}</style>
    </>
  );
};

export default HowItWorks;
