"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import mentorsData from "@/data/mentors.json";
import {
  BadgeCheck,
  Check,
  ChevronDown,
  Clock,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MentorCard = ({ mentor }) => (
  <div className="bg-white rounded-lg border border-slate-300 p-6">
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-auto">
        <div className="relative w-full md:w-[184px] h-[168px] rounded-lg overflow-hidden">
          <Image
            src={mentor.image}
            alt={mentor.name}
            width={184}
            height={168}
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 flex w-full items-center justify-center gap-2 bg-black/50 px-2 py-1 rounded-md">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 p-0.5 ${
                    index < mentor.rating
                      ? "fill-[#FBBF24] stroke-[#FBBF24]"
                      : "fill-gray-400 stroke-gray-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-white font-semibold text-sm leading-4">
              |
            </span>
            <span className="text-sm leading-4 text-white  font-semibold">
              {mentor.reviews} Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-1">
              <h2 className="text-sm sm:text-[20px] leading-4 sm:leading-7 text-slate-700 font-semibold">
                {mentor.name}
              </h2>
              {mentor.isVerified && (
                <BadgeCheck className="w-5 h-5 text-green-500 stroke-2" />
              )}
            </div>
            <p className="text-slate-700 leading-4 sm:leading-7 font-medium">
              {mentor.position}
            </p>
          </div>
          <Button className="bg-slate-700 hover:bg-slate-600 py-1.5 px-3 text-white text-xs gap-2.5">
            <Link href={`/mentors/${mentor?.id}`}>View profile</Link>
          </Button>
        </div>
        <div className="mt-4 bg-slate-100 min-h-24 p-3 rounded-md text-sm text-slate-700 font-medium">
          <p>{mentor.bio}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [showError, setShowError] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const roleDropdownRef = useRef(null);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isRatingDropdownOpen, setIsRatingDropdownOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const companyDropdownRef = useRef(null);
  const ratingDropdownRef = useRef(null);
  const [ratingSort, setRatingSort] = useState(null); // 'asc' or 'desc'
  const [isSlotDropdownOpen, setIsSlotDropdownOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const slotDropdownRef = useRef(null);

  const roles = [
    "SE/SDE",
    "DS/AI/ML",
    "Product Management",
    "Project Management",
    "Consulting",
    "Quantative Finance",
  ];

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Apple",
    "Netflix",
  ];

  const ratingSortOptions = [
    { value: "desc", label: "Highest First", icon: "↓" },
    { value: "asc", label: "Lowest First", icon: "↑" },
  ];

  const slotOptions = [
    { value: "this-week", label: "This Week" },
    { value: "next-week", label: "Next Week" },
    { value: "anytime", label: "Anytime" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        roleDropdownRef.current &&
        !roleDropdownRef.current.contains(event.target)
      ) {
        setIsRoleDropdownOpen(false);
      }
      if (
        companyDropdownRef.current &&
        !companyDropdownRef.current.contains(event.target)
      ) {
        setIsCompanyDropdownOpen(false);
      }
      if (
        ratingDropdownRef.current &&
        !ratingDropdownRef.current.contains(event.target)
      ) {
        setIsRatingDropdownOpen(false);
      }
      if (
        slotDropdownRef.current &&
        !slotDropdownRef.current.contains(event.target)
      ) {
        setIsSlotDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value) {
      const results = mentorsData.mentors.filter(
        (mentor) =>
          mentor.name.toLowerCase().includes(value.toLowerCase()) ||
          mentor.position.toLowerCase().includes(value.toLowerCase())
      );

      if (results.length === 0) {
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      } else if (!recentSearches.includes(value)) {
        setRecentSearches((prev) => [value, ...prev].slice(0, 4));
      }
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleCompanySelect = (company) => {
    setSelectedCompanies((prev) =>
      prev.includes(company)
        ? prev.filter((c) => c !== company)
        : [...prev, company]
    );
  };

  const handleRatingSort = (sortType) => {
    setRatingSort(sortType === ratingSort ? null : sortType);
    setIsRatingDropdownOpen(false);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot === selectedSlot ? null : slot);
    setIsSlotDropdownOpen(false);
  };

  return (
    <div className="flex-1 bg-gray-50 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Title and button */}
        <div className="flex justify-between items-center mb-4 bg-blue-50 p-4 rounded-lg relative">
          <div className="flex-1 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Mentors</h1>

            <Button className="bg-blue-50 border-blue-200 border text-gray-800 hover:bg-blue-100">
              Become a mentor
            </Button>
          </div>
        </div>

        {/* Search and filters */}
        <div className="bg-white p-4 rounded-lg mb-4 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              className="pl-9 bg-gray-50 border-gray-200"
              placeholder="Search by name, role or company"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchValue) {
                  handleSearch(searchValue);
                }
              }}
            />

            {/* Search Popup */}
            {isSearchFocused && !searchValue && (
              <div className="absolute z-10 w-full mt-2 py-2 bg-white rounded-lg border border-gray-200 shadow-md">
                {recentSearches.length > 0 && (
                  <>
                    <div className="px-3 pb-2 mb-2 border-b border-gray-100">
                      <p className="text-xs font-bold text-gray-500">
                        RECENT SEARCHES
                      </p>
                    </div>
                    {recentSearches.map((search, index) => (
                      <button
                        key={`recent-${index}`}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                        onClick={() => handleSearch(search)}
                      >
                        <Clock className="w-4 h-4" />
                        <span>{search}</span>
                      </button>
                    ))}
                    <div className="my-2 border-b border-gray-100" />
                  </>
                )}

                <div className="px-3 pb-2 mb-2 border-b border-gray-100">
                  <p className="text-xs font-bold text-gray-500">
                    TRENDING SEARCHES
                  </p>
                </div>
                {mentorsData.trendingSearches.map((search, index) => (
                  <button
                    key={`trending-${index}`}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                    onClick={() => handleSearch(search)}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>{search}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            <div className="relative" ref={roleDropdownRef}>
              <Button
                variant="outline"
                className="flex items-center gap-1 text-sm font-normal"
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
              >
                Role {selectedRoles.length > 0 && `(${selectedRoles.length})`}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isRoleDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {isRoleDropdownOpen && (
                <div className="absolute top-full mt-1 w-48 py-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50">
                  {roles.map((role, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                      onClick={() => handleRoleSelect(role)}
                    >
                      <div
                        className={`w-4 h-4 border rounded flex items-center justify-center ${
                          selectedRoles.includes(role)
                            ? "bg-blue-500 border-blue-500"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedRoles.includes(role) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      {role}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={companyDropdownRef}>
              <Button
                variant="outline"
                className="flex items-center gap-1 text-sm font-normal"
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
              >
                Company{" "}
                {selectedCompanies.length > 0 &&
                  `(${selectedCompanies.length})`}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isCompanyDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {isCompanyDropdownOpen && (
                <div className="absolute top-full mt-1 w-48 py-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50">
                  {companies.map((company, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                      onClick={() => handleCompanySelect(company)}
                    >
                      <div
                        className={`w-4 h-4 border rounded flex items-center justify-center ${
                          selectedCompanies.includes(company)
                            ? "bg-blue-500 border-blue-500"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedCompanies.includes(company) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      {company}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={slotDropdownRef}>
              <Button
                variant="outline"
                className="flex items-center gap-1 text-sm font-normal"
                onClick={() => setIsSlotDropdownOpen(!isSlotDropdownOpen)}
              >
                Slot{" "}
                {selectedSlot &&
                  `(${
                    slotOptions.find((opt) => opt.value === selectedSlot)?.label
                  })`}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isSlotDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {isSlotDropdownOpen && (
                <div className="absolute top-full mt-1 w-48 py-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50">
                  {slotOptions.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="slot"
                        value={option.value}
                        checked={selectedSlot === option.value}
                        onChange={() => handleSlotSelect(option.value)}
                        className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={ratingDropdownRef}>
              <Button
                variant="outline"
                className="flex items-center gap-1 text-sm font-normal"
                onClick={() => setIsRatingDropdownOpen(!isRatingDropdownOpen)}
              >
                Rating {ratingSort && `(${ratingSort === "desc" ? "↓" : "↑"})`}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isRatingDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {isRatingDropdownOpen && (
                <div className="absolute top-full mt-1 w-48 py-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50">
                  {ratingSortOptions.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 ${
                        ratingSort === option.value
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => handleRatingSort(option.value)}
                    >
                      <span className="w-4">{option.icon}</span>
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mentor cards */}
        <div className="space-y-4">
          {mentorsData.mentors
            .slice()
            .sort((a, b) => {
              if (!ratingSort) return 0;
              return ratingSort === "desc"
                ? b.rating - a.rating
                : a.rating - b.rating;
            })
            .map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
        </div>
      </div>
    </div>
  );
}
