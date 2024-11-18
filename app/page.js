import React from 'react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Page = () => {
  return (
    <div>
      <Head>
        <title>AI Recruitment Hub</title>
        <meta
          name="description"
          content="Revolutionize your hiring process with AI-powered candidate screening, mock interviews, and analytics."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Header Section */}
        <header className="w-full py-6 bg-gradient-to-r from-blue-600 to-green-500 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <h1 className="text-4xl font-extrabold text-white">AutomateInterview</h1>
            <nav className="flex flex-wrap items-center justify-between mt-4 md:mt-0 space-x-6">
              <a href="#features" className="text-lg text-white hover:underline transition duration-300">
                Features
              </a>
              <a href="#testimonials" className="text-lg text-white hover:underline transition duration-300">
                Success Stories
              </a>
              <a href="#contact" className="text-lg text-white hover:underline transition duration-300">
                Contact Us
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
                className="flex items-center space-x-2 text-lg text-white"
              >
                <FaGithub className="w-6 h-6" />
                <span>GitHub</span>
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-gray-900 to-gray-700 text-white px-6">
          <h2 className="text-5xl font-extrabold mb-4">Streamline Your Recruitment Process</h2>
          <p className="text-xl mb-6">
            Harness the power of AI to screen candidates, conduct mock interviews, and get actionable insights.
          </p>
          <div className="flex space-x-4">
            <a
              href="/dashboard"
              className="px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 bg-transparent border border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-gray-800 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-100 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-10">
              Transform your hiring process with these AI-powered tools:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Smart Candidate Screening',
                  description:
                    'Analyze resumes and match candidates to job descriptions using AI-driven insights.',
                },
                {
                  title: 'AI-Assisted Interviews',
                  description: 'Conduct virtual interviews with AI-generated questions tailored to job roles.',
                },
                {
                  title: 'Comprehensive Analytics',
                  description: 'Get detailed reports on candidate performance and recruitment trends.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300"
                >
                  <h3 className="text-2xl font-semibold text-green-600">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="testimonials" className="py-16 bg-gradient-to-r from-gray-200 to-gray-50 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center space-x-4">
              {[
                {
                  feedback:
                    'AI Recruitment Hub streamlined our hiring process and helped us find the perfect candidates.',
                  user: 'HR Manager, Tech Corp',
                },
                {
                  feedback:
                    'The AI-assisted interviews saved us time and provided deep insights into candidate capabilities.',
                  user: 'Recruiter, Startup Inc.',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2 mb-4 transform hover:translate-y-2 transition duration-300"
                >
                  <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                  <h4 className="mt-4 text-lg font-semibold text-blue-600">- {testimonial.user}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white px-6">
          <Contect />
        </section>
      </main>

      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>© 2024 AI Recruitment Hub. Designed for hiring success, powered by innovation.</p>
      </footer>
    </div>
  );
};

export default Page;
