"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MonitorPlay,
  Clock,
  MailIcon,
  Package as PackageIcon,
  FileText,
} from "lucide-react";

const ServicesComponent = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const serviceCards = [
    {
      type: "1:1 Call",
      component: (
        <div
          key="career-guidance"
          className="bg-white border rounded-lg p-4 shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              Career Guidance
            </h3>
            <Button
              variant="outline"
              className="bg-gray-900 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
            >
              View Details
            </Button>
          </div>

          <p className="text-gray-600 mb-4">
            I'll give you advice to help with your career decisions.
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Service type</p>
              <div className="text-blue-600 font-medium text-sm">1:1 call</div>
            </div>

            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Duration</p>
              <div className="text-blue-600 font-medium text-sm">30 min</div>
            </div>

            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Amount</p>
              <div className="text-blue-600 font-medium text-sm">₹ 300</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "Priority DM",
      component: (
        <div
          key="resume-review"
          className="bg-white border rounded-lg p-4 shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              Resume Review
            </h3>
            <Button
              variant="outline"
              className="bg-gray-900 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
            >
              View Details
            </Button>
          </div>

          <p className="text-gray-600 mb-4">
            I'll refine your resume to land better opportunities.
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Service type</p>
              <div className="text-blue-600 font-medium text-sm">
                Priority DM
              </div>
            </div>

            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Replies</p>
              <div className="text-blue-600 font-medium text-sm">In 1 day</div>
            </div>

            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Amount</p>
              <div className="text-blue-600 font-medium text-sm">₹ 100</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "Package",
      component: (
        <div key="package" className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              1 month career guidance full confidence
            </h3>
            <Button
              variant="outline"
              className="bg-gray-900 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
            >
              View Details
            </Button>
          </div>

          <p className="text-gray-600 mb-4">
            2 x 1:1 call - Career guidance 1 X Priority Dm - Resume review...
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Service type</p>
              <div className="text-blue-600 font-medium text-sm">Package</div>
            </div>

            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Duration</p>
              <div className="text-blue-600 font-medium text-sm">1 month</div>
            </div>

            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Amount</p>
              <div className="text-blue-600 font-medium text-sm">₹ 1,000</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "Digital product",
      component: (
        <div
          key="sql-basics"
          className="bg-white border rounded-lg p-4 shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              SQL Basics Cheat Sheet
            </h3>
            <Button
              variant="outline"
              className="bg-gray-900 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
            >
              View Details
            </Button>
          </div>

          <p className="text-gray-600 mb-4">
            To strengthen your SQL and data skills
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Service type</p>
              <div className="text-blue-600 font-medium text-sm">
                Digital product
              </div>
            </div>

            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Amount</p>
              <div className="text-blue-600 font-medium text-sm">₹ 500</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "Webinar",
      component: (
        <div
          key="interview-tips"
          className="bg-white border rounded-lg p-4 shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              Interview tips and tricks advice
            </h3>
            <Button
              variant="outline"
              className="bg-gray-900 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
            >
              View Details
            </Button>
          </div>

          <p className="text-gray-600 mb-4">
            Practical strategies to boost your interview confidence.
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Service type</p>
              <div className="text-blue-600 font-medium text-sm">Webinar</div>
            </div>

            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Date</p>
              <div className="text-blue-600 font-medium text-sm">
                On 28th Oct
              </div>
            </div>

            <div className="bg-blue-50 p-2 rounded-md">
              <p className="text-xs text-gray-500 mb-1">Amount</p>
              <div className="text-blue-600 font-medium text-sm">₹ 1,000</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "All",
      component: (
        <div
          key="data-engineer"
          className="bg-[#0a192f] text-white rounded-lg p-6 flex flex-col justify-center"
        >
          <h3 className="font-semibold text-2xl text-green-400 mb-4">
            Associate Data engineer in SQL
          </h3>
          <p className="text-gray-200">
            Gain practical knowledge in ETL, SQL and data warehousing for data
            engineering
          </p>
        </div>
      ),
    },
  ];

  const filterCards = (type) => {
    setActiveFilter(type);
  };

  const visibleCards =
    activeFilter === "All"
      ? serviceCards.map((card) => card.component)
      : serviceCards
          .filter((card) => card.type === activeFilter)
          .map((card) => card.component);

  return (
    <div className="p-6 bg-gray-50">
      <div className="bg-white border rounded-full p-1 flex mb-6 mx-auto max-w-2xl">
        {[
          "All",
          "1:1 Call",
          "Priority DM",
          "Package",
          "Webinar",
          "Digital product",
        ].map((type) => (
          <button
            key={type}
            onClick={() => filterCards(type)}
            className={`flex-1 py-2 px-4 rounded-full text-center font-medium text-sm transition-colors 
              ${
                activeFilter === type
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {visibleCards}
      </div>
    </div>
  );
};

export default ServicesComponent;
