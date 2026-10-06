"use client";

import React, { useState } from "react";
import { getInTouchData } from "./CpGetInTouch_mockdata";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
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
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error while user is correcting it
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

    // Name validation
    const nameRegex = /^[A-Za-z]+[A-Za-z ]*$/;

    if (!formValues.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formValues.name.trim())) {
      newErrors.name = "Please enter valid Name";
    }

    // Email validation
    const emailRegex = /^[0-9\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formValues.email.trim())) {
      newErrors.email = "Please enter valid Email Id";
    }

    // Mobile validation
    const mobileRegex = /^[5-9]\d{9}$/;

    if (!formValues.phone.trim()) {
      newErrors.phone = "Mobile is required";
    } else if (!mobileRegex.test(formValues.phone.trim())) {
      newErrors.phone = "Please enter valid Mobile Number";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    // API submission can be added here
    console.log("Form submitted:", formValues);
  };

  return (
    <section className="cp-get-in-touch" id="CpGetInTouch">
      <div className="cp-get-in-touch__container">
        <div className="cp-get-in-touch__content">
          <div className="cp-get-in-touch__tag">
            {getInTouchData.tag}
          </div>

          <h2 className="cp-get-in-touch__title">
            {getInTouchData.title}{" "}
            <strong>{getInTouchData.titleBold}</strong>
          </h2>

          <p className="cp-get-in-touch__description">
            {getInTouchData.description}
          </p>

          <form
            className="cp-get-in-touch__form"
            onSubmit={handleSubmit}
            noValidate
          >
            {getInTouchData.form.fields.map((field) => {
              const error =
                field.id === "name"
                  ? errors.name
                  : field.id === "email"
                    ? errors.email
                    : field.id === "phone"
                      ? errors.phone
                      : "";

              return (
                <div
                  className="cp-get-in-touch__field-wrapper"
                  key={field.id}
                >
                  <div
                    className={`cp-get-in-touch__field ${error
                        ? "cp-get-in-touch__field--error"
                        : ""
                      }`}
                  >
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={
                        formValues[
                        field.name as keyof FormValues
                        ]
                      }
                      onChange={handleChange}
                    />

                    <label htmlFor={field.id}>
                      {field.label}
                    </label>
                  </div>

                  {error && (
                    <span className="cp-get-in-touch__error">
                      {error}
                    </span>
                  )}
                </div>
              );
            })}

            <button
              type="submit"
              className="cp-get-in-touch__button"
            >
              <span>{getInTouchData.form.button.text}</span>

              <span
                className="cp-get-in-touch__arrow"
                aria-hidden="true"
              >
                {getInTouchData.form.button.arrow}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CpGetInTouch;