import React from "react";

import { useState } from "react";
export default function Contact1() {
  const [focusedField, setFocusedField] = useState("");
  return (
    <div className="w-full min-h-screen flex flex-col text-center items-center justify-center text-black bg-[#FFFFFF] p-10">
      <h2 className="mb-6 text-5xl font-semibold">
        Contact us today to begin your{" "}
        <span className="text-[#C9171A]">
          AI <br /> transformation journey
        </span>{" "}
        with Piepeople
      </h2>
      <p className="text-[24px] text-black mb-10">
        Where engineering excellence meets artificial intelligence
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-left text-gray-400">
              Full Name*
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b border-gray-500 outline-none"
              placeholder={
                focusedField === "fullName" ? "Enter your full name" : ""
              }
              onFocus={() => setFocusedField("fullName")}
              onBlur={() => setFocusedField("")}
            />
          </div>

          {/* Work Email */}
          <div>
            <label className="block text-sm font-medium text-left text-gray-400">
              Work Email*
            </label>
            <input
              type="email"
              className="w-full p-2 bg-transparent border-b border-gray-500 outline-none"
              placeholder={
                focusedField === "email" ? "Enter your work email" : ""
              }
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-left text-gray-400">
              Job Title*
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b border-gray-500 outline-none"
              placeholder={
                focusedField === "jobTitle" ? "Enter your job title" : ""
              }
              onFocus={() => setFocusedField("jobTitle")}
              onBlur={() => setFocusedField("")}
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-left text-gray-400">
              Company*
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b border-gray-500 outline-none"
              placeholder={
                focusedField === "company" ? "Enter your company name" : ""
              }
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField("")}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-left text-gray-400">
            Message
          </label>
          <textarea
            className="w-full p-2 bg-transparent border-b border-gray-500 outline-none resize-none"
            placeholder={focusedField === "message" ? "Enter your message" : ""}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField("")}
            rows="1"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-3 ">
          <input
            type="checkbox"
            className="w-5 h-5 text-green-500 bg-white border-none rounded focus:ring-0"
          />
          <p className="text-lg">
            Yes, Piepeople can reach out to me! I agree to the use of my
            personal data as explained in the{" "}
            <a href="#" className="text-red-500 underline">
              Privacy Notice
            </a>
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="flex justify-center">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700">
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
}
