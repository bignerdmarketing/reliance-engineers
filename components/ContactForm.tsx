'use client';

import { useState } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card bg-primary/5 text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-primary mb-2">Message Sent</h3>
        <p className="text-gray-600">Thank you for reaching out. We will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-body font-semibold text-gray-700 mb-2">
            Name <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
            style={{ transition: 'border-color 0.2s ease-out, box-shadow 0.2s ease-out' }}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-body font-semibold text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
            style={{ transition: 'border-color 0.2s ease-out, box-shadow 0.2s ease-out' }}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-body font-semibold text-gray-700 mb-2">
          Email <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          style={{ transition: 'border-color 0.2s ease-out, box-shadow 0.2s ease-out' }}
          placeholder="your.email@agency.gov"
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-body font-semibold text-gray-700 mb-2">
          Company / Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          style={{ transition: 'border-color 0.2s ease-out, box-shadow 0.2s ease-out' }}
          placeholder="Your organization"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-body font-semibold text-gray-700 mb-2">
          Message <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-gray-900 resize-y
                     focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          style={{ transition: 'border-color 0.2s ease-out, box-shadow 0.2s ease-out' }}
          placeholder="Tell us about your project or how we can help..."
        />
      </div>

      <button type="submit" className="btn-primary w-full md:w-auto">
        Send Message
      </button>
    </form>
  );
}
