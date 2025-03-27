"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import mentorsData from "@/data/mentors.json"; // Adjust path if necessary
import { BadgeCheck, Star } from "lucide-react";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

function ProfileCard() {
  const { id } = useParams(); // Extract mentor ID from URL params
  const mentor = mentorsData?.mentors?.find((m) => m.id.toString() === id);

  if (!mentor) {
    return <p className="text-center text-red-500">Mentor not found</p>;
  }

  return (
    <div className="bg-white p-6">
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
              <span className="text-sm leading-4 text-white font-semibold">
                {mentor.reviews} Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            {/* Left Section: Name & Position */}
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

            {/* Right Section: Session Badge & Social Links */}
            <div className="flex flex-col items-center gap-2">
              {/* Session Count Badge */}
              <div className="bg-[#E5E7EB] px-2 py-1 h-6 text-slate-900 text-xs leading-4 rounded-sm font-semibold self-end">
                20 Sessions
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3 text-black text-xl">
                <FaLinkedin size={20} />
                <FaInstagram size={20} />
                <FaMediumM size={20} />
                <FaXTwitter size={20} />
              </div>
            </div>
          </div>

          <div className="mt-4 bg-slate-100 min-h-24 p-3 rounded-md text-sm text-slate-700 font-medium">
            <p>{mentor.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
