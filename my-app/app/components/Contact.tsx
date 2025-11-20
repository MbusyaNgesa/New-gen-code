"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ firstName: "", lastName: "", phone: "", email: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="min-h-screen bg-[#1a1a0f] flex 
    items-center justify-center px-4 py-20"
      id="contact"
    >
      <div className="w-full max-w-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#e8e8d0] mb-4"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            Contact
          </h2>
          <p
            className="text-[#c8c8a8] text-sm md:text-base"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            Fill out form below for Inquiries & Booking
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label
                className="text-[#e8e8d0] text-sm"
                style={{ fontFamily: "Courier New, monospace" }}
              >
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="bg-transparent border-2 border-[#9d9d6f] rounded-lg h-12 text-[#e8e8d0]
                focus-visible:ring-[#9d9d6f] focus-visible:ring-offset-0"
                style={{ fontFamily: "Courier New, monospace" }}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-[#e8e8d0] text-sm"
                style={{ fontFamily: "Courier New, monospace" }}
              >
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="bg-transparent border-2 border-[#9d9d6f] rounded-lg h-12 text-[#e8e8d0] focus-visible:ring-[#9d9d6f] focus-visible:ring-offset-0"
                style={{ fontFamily: "Courier New, monospace" }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-[#e8e8d0] text-sm"
              style={{ fontFamily: "Courier New, monospace" }}
            >
              Phone *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-transparent border-2 border-[#9d9d6f] rounded-lg h-12 text-[#e8e8d0] focus-visible:ring-[#9d9d6f] focus-visible:ring-offset-0"
              style={{ fontFamily: "Courier New, monospace" }}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-[#e8e8d0] text-sm"
              style={{ fontFamily: "Courier New, monospace" }}
            >
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border-2 border-[#9d9d6f] rounded-lg h-12 text-[#e8e8d0] focus-visible:ring-[#9d9d6f] focus-visible:ring-offset-0"
              style={{ fontFamily: "Courier New, monospace" }}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-transparent border-2 border-[#9d9d6f] text-[#e8e8d0] hover:bg-[#9d9d6f] hover:text-[#1a1a0f] h-14 rounded-lg text-lg font-medium transition-colors"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
