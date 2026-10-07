"use client";

import React, { useState } from "react";
import { getInTouchData } from "./CpGetInTouch_mockdata";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type FormErrors = {
  name: string;
  email: string;
  phone: string;
};

const CpGetInTouch = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: "",
      email: "",
      phone: "",
    };

    if (!formValues.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[0-9\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email.trim())
    ) {
      newErrors.email = "Please enter valid Email Id";
    }

    if (!formValues.phone.trim()) {
      newErrors.phone = "Mobile is required";
    } else if (!/^[5-9]\d{9}$/.test(formValues.phone.trim())) {
      newErrors.phone = "Please enter valid Mobile Number";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("/api/get-in-touch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      alert("Thank you! Your details have been submitted.");

      setFormValues({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      setErrors({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="cp-get-in-touch" id="CpGetInTouch"  >
      <div className="container">
        <div
          className={`sec-head`}
        >
          {getInTouchData.tag && <span className={"sec-tag"}>{getInTouchData.tag}</span>}
          {getInTouchData.title && <h2 className={"sec-title"}>
            {getInTouchData.title} <span className={"sec-titleBold"}>{getInTouchData.secTitleBoldTxt}</span>
          </h2>
          }
          {getInTouchData.description && <p className="sec-desc">{getInTouchData.description}</p>}
        </div>
        <div className={`sec-cont`}>
          <form
            className="form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* Name */}
            <div className="field-wrapper">
              <div className={`field ${errors.name ? "field--error" : ""} `}>
                <input
                  type="text" className="input-field"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>

              {errors.name && (
                <span className="error">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="field-wrapper">
              <div className={`field ${errors.email ? "field--error" : ""} `}>
                <input className="input-field"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Id"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>

              {errors.email && (
                <span className="error">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="field-wrapper">
              <div className={`field ${errors.phone ? "field--error" : ""} `}>
                <input className="input-field"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>

              {errors.phone && (
                <span className="error">
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Company */}
            <div className="field-wrapper">
              <div className="field">
                <input
                  type="text" className="input-field"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  value={formValues.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Message */}
            <div className="field-wrapper typ-full-width">
              <div className="field">
                <textarea className="input-field" 
                  id="message" rows="4" cols="50"
                  name="message"
                  placeholder="Your Message"
                  value={formValues.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-default"
            >
              <span>Send Message</span>

              <span
                className="arrow"
                aria-hidden="true"
              >
                →
              </span>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default CpGetInTouch;