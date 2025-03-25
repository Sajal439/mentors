"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  Bell,
  Star,
  BadgeCheck,
  Users2,
  Briefcase,
  Calendar,
  Phone,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import mentorsData from "@/data/mentors.json";

const MentorCard = ({ mentor }) => (
  <div className="bg-white rounded-lg border p-4">
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-auto">
        <div className="relative w-full md:w-[180px] h-[180px] rounded-lg overflow-hidden">
          <Image
            src={mentor.image}
            alt={mentor.name}
            width={180}
            height={180}
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 flex items-center bg-black/50 px-2 py-1 rounded-md">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < mentor.rating
                      ? "fill-yellow-400 stroke-yellow-400"
                      : "fill-gray-400 stroke-gray-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-white ml-1">
              {mentor.reviews} Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-1">
              <h2 className="text-lg font-semibold">{mentor.name}</h2>
              {mentor.isVerified && (
                <BadgeCheck className="w-5 h-5 text-green-500 stroke-2" />
              )}
            </div>
            <p className="text-gray-600">{mentor.position}</p>
          </div>
          <Button className="bg-gray-800 hover:bg-gray-700 text-white text-xs h-8">
            View profile
          </Button>
        </div>
        <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm text-gray-600">
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

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value && !recentSearches.includes(value)) {
      setRecentSearches((prev) => [value, ...prev].slice(0, 4));
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[120px] border-r flex flex-col">
        <div className="p-4">{/* Logo placeholder */}</div>
        <div className="flex-1">
          <div className="flex flex-col gap-1 p-2">
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
              <div className="w-5 h-5 bg-gray-200 rounded-md flex items-center justify-center">
                <Users2 className="w-4 h-4 text-gray-500" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Mentor</span>
            </div>

            <div className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-md">
              <div className="w-5 h-5 bg-gray-100 rounded-md flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-gray-500" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Job</span>
            </div>

            <div className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-md">
              <div className="w-5 h-5 bg-gray-100 rounded-md flex items-center justify-center">
                <Calendar className="w-4 h-4 text-gray-500" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Booking</span>
            </div>

            <div className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-md">
              <div className="w-5 h-5 bg-gray-100 rounded-md flex items-center justify-center">
                <Phone className="w-4 h-4 text-gray-500" />
              </div>
              <span className="text-sm text-gray-600 font-medium">
                Priority DM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Bell className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-2 border rounded-full px-3 py-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                J
              </div>
              <span className="text-sm font-medium">Jimmy</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-50 p-4">
          <div className="max-w-5xl mx-auto">
            {/* Title and button */}
            <div className="flex justify-between items-center mb-4 bg-blue-50 p-4 rounded-lg">
              <h1 className="text-xl font-semibold text-gray-800">Mentors</h1>
              <Button className="bg-blue-50 border-blue-200 border text-gray-800 hover:bg-blue-100">
                Become a mentor
              </Button>
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
                  onBlur={() =>
                    setTimeout(() => setIsSearchFocused(false), 200)
                  }
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
                <Button
                  variant="outline"
                  className="flex items-center gap-1 text-sm font-normal"
                >
                  Role
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 text-sm font-normal"
                >
                  Company
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 text-sm font-normal"
                >
                  Start
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 text-sm font-normal"
                >
                  Rating
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Mentor cards */}
            <div className="space-y-4">
              {mentorsData.mentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
