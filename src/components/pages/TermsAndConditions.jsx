import React from 'react';
import useTitle from '../Hooks/useTitle';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const TermsAndConditions = () => {
  useTitle("Terms And Conditions")
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen p-6">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-6">Terms and Conditions</h1>

        <div className="rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Foodie Delights! These terms and conditions outline the
            rules and regulations for the use of our website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">2. Acceptance</h2>
          <p>
            By accessing this website, you accept these terms and conditions in
            full. If you disagree with any part of these terms and conditions,
            do not use our website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">3. Use of Content</h2>
          <p>
            You may use the content on this website for personal, non-commercial
            purposes. However, you must not republish material from this website
            without our consent.
          </p>

          {/* Add more sections for your terms and conditions as needed */}

          <h2 className="text-xl font-semibold mt-6 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at info@foodiedelights.com.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default TermsAndConditions;
