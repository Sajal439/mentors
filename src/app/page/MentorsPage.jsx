import Image from "next/image";
import { Search, ChevronDown, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[120px] border-r flex flex-col">
        <div className="p-4">{/* Logo placeholder */}</div>
        <div className="flex-1">
          <div className="flex flex-col gap-1 p-2">
            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-md">
              <div className="w-5 h-5 bg-blue-200 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="text-sm text-blue-600 font-medium">Mentor</span>
            </div>

            <div className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-md">
              <div className="w-5 h-5 bg-gray-100 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-600 font-medium">Job</span>
            </div>

            <div className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-md">
              <div className="w-5 h-5 bg-gray-100 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <span className="text-sm text-gray-600 font-medium">Booking</span>
            </div>

            <div className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-md">
              <div className="w-5 h-5 bg-gray-100 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
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
        <div className="flex-1 bg-blue-50 p-4">
          <div className="max-w-5xl mx-auto">
            {/* Title and button */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold text-gray-800">Mentors</h1>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 border border-blue-200">
                Become a mentor
              </Button>
            </div>

            {/* Search and filters */}
            <div className="bg-white p-4 rounded-lg mb-4 flex flex-wrap gap-3">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  className="pl-9 bg-gray-50 border-gray-200"
                  placeholder="Search by name"
                />
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
              {/* Mentor 1 */}
              <div className="bg-white rounded-lg border p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-auto">
                    <div className="relative w-full md:w-[180px] h-[180px] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=180&width=180"
                        alt="Jonny Rose"
                        width={180}
                        height={180}
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#FFD700"
                              stroke="#FFD700"
                              strokeWidth="1"
                              className="w-4 h-4"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-white ml-1">
                          5 Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <h2 className="text-lg font-semibold">Jonny Rose</h2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-500"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="text-gray-600">
                          Sr. Software Engineering at Google
                        </p>
                      </div>
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white text-xs h-8">
                        View profile
                      </Button>
                    </div>
                    <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm text-gray-600">
                      <p>
                        PM @hirespectrumII xCloud @Google II ML summer @Amazon
                        II DEA II Team Development II Growth Management II Full
                        Stack Developer(MERN) II Full Stack Developer(MEAN)II
                        Growth Management II II Growth Management II Full Stack
                        Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentor 2 */}
              <div className="bg-white rounded-lg border p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-auto">
                    <div className="relative w-full md:w-[180px] h-[180px] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=180&width=180"
                        alt="Dev Jain"
                        width={180}
                        height={180}
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#FFD700"
                              stroke="#FFD700"
                              strokeWidth="1"
                              className="w-4 h-4"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-white ml-1">
                          5 Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <h2 className="text-lg font-semibold">Dev Jain</h2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-500"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="text-gray-600">
                          Sr. Software Engineering at Microsoft
                        </p>
                      </div>
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white text-xs h-8">
                        View profile
                      </Button>
                    </div>
                    <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm text-gray-600">
                      <p>
                        PM @hirespectrumII xCloud @Google II ML summer @Amazon
                        II DEA II Team Development II Growth Management II Full
                        Stack Developer(MERN)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentor 3 */}
              <div className="bg-white rounded-lg border p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-auto">
                    <div className="relative w-full md:w-[180px] h-[180px] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=180&width=180"
                        alt="Rishi Mehta"
                        width={180}
                        height={180}
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#FFD700"
                              stroke="#FFD700"
                              strokeWidth="1"
                              className="w-4 h-4"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-white ml-1">
                          4 Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <h2 className="text-lg font-semibold">Rishi Mehta</h2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-500"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="text-gray-600">
                          Sr. Software Engineering at JP Morgan
                        </p>
                      </div>
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white text-xs h-8">
                        View profile
                      </Button>
                    </div>
                    <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm text-gray-600">
                      <p>Prev Application Engineer @Google</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentor 4 */}
              <div className="bg-white rounded-lg border p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-auto">
                    <div className="relative w-full md:w-[180px] h-[180px] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=180&width=180"
                        alt="Heet Mistry"
                        width={180}
                        height={180}
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#FFD700"
                              stroke="#FFD700"
                              strokeWidth="1"
                              className="w-4 h-4"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-white ml-1">
                          3 Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <h2 className="text-lg font-semibold">Heet Mistry</h2>
                        </div>
                        <p className="text-gray-600">
                          Sr. Software Engineering at Zomato
                        </p>
                      </div>
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white text-xs h-8">
                        View profile
                      </Button>
                    </div>
                    <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm text-gray-600">
                      <p>
                        PM @hirespectrumII xCloud @Google II ML summer @Amazon
                        II DEA II Team Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
