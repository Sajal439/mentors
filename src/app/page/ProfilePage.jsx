import {
  Star,
  Mail,
  Calendar,
  ChevronDown,
  MailIcon,
  Clock,
  Package,
  MonitorPlay,
  FileText,
  Users2,
  Briefcase,
  Phone,
  Bell,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function ProfilePage() {
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

        {/* Existing content wrapped in a container */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto">
            {/* Header with back button and home */}
            <div className="flex items-center justify-between p-4 border-b">
              <button className="text-gray-500">← Back</button>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Home</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Profile section */}
            <div className="p-4 border-b">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Profile image */}
                <div className="w-24 h-24 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Jonny Rose"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>

                {/* Profile info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-semibold">Jonny Rose</h1>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      ✓
                    </Badge>
                  </div>
                  <p className="text-gray-700">
                    Sr. Software Engineering at Google
                  </p>

                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    PM @bigcompany | Cloud Architect | AWS, summer jobseeker |
                    SDLC | Team Development | Growth Management | Full Stack
                    Developer(MERN) | Full Stack Developer(MEAN) | Growth
                    Management | E-Commerce Management | Full Stack Developer
                  </p>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      DM
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <Calendar className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <span>×</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Services section */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Services</h2>

              <div className="bg-gray-50 rounded-full p-1 flex mb-6">
                <button className="flex-1 py-2 px-4 rounded-full bg-white text-center font-medium">
                  All
                </button>
                <button className="flex-1 py-2 px-4 rounded-full text-gray-600 text-center">
                  1:1 Call
                </button>
                <button className="flex-1 py-2 px-4 rounded-full text-gray-600 text-center">
                  Priority DM
                </button>
                <button className="flex-1 py-2 px-4 rounded-full text-gray-600 text-center">
                  Package
                </button>
                <button className="flex-1 py-2 px-4 rounded-full text-gray-600 text-center">
                  Webinar
                </button>
                <button className="flex-1 py-2 px-4 rounded-full text-gray-600 text-center">
                  Digital product
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Career Guidance Card */}
                <div className="border rounded-lg p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      Career Guidance
                    </h3>
                    <Button
                      variant="outline"
                      className="bg-gray-800 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
                    >
                      View Details
                    </Button>
                  </div>

                  <p className="text-gray-700 mb-6">
                    I'll give you advice to help with your career decisions.
                    I'll give you advice to help with your career decisions.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Service type</p>
                      <div className="flex items-center text-blue-600">
                        <MonitorPlay className="w-4 h-4 mr-2" />
                        <span className="font-medium">1:1 call</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Duration</p>
                      <div className="flex items-center text-blue-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">30 min</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Amount</p>
                      <div className="text-blue-600 font-medium">₹ 300</div>
                    </div>
                  </div>
                </div>

                {/* Resume Review Card */}
                <div className="border rounded-lg p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      Resume Review
                    </h3>
                    <Button
                      variant="outline"
                      className="bg-gray-800 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
                    >
                      View Details
                    </Button>
                  </div>

                  <p className="text-gray-700 mb-6">
                    I'll refine your resume to land better opportunities.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Service type</p>
                      <div className="flex items-center text-blue-600">
                        <MailIcon className="w-4 h-4 mr-2" />
                        <span className="font-medium">Priority DM</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Replies</p>
                      <div className="flex items-center text-blue-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">In 1 day</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Amount</p>
                      <div className="text-blue-600 font-medium">₹ 100</div>
                    </div>
                  </div>
                </div>

                {/* Package Card */}
                <div className="border rounded-lg p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      1 month career guidance full confidence
                    </h3>
                    <Button
                      variant="outline"
                      className="bg-gray-800 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
                    >
                      View Details
                    </Button>
                  </div>

                  <div className="text-gray-700 mb-6">
                    <p>2 x 1:1 call - Career guidance</p>
                    <p>1 X Priority Dm - Resume review...</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Service type</p>
                      <div className="flex items-center text-blue-600">
                        <Package className="w-4 h-4 mr-2" />
                        <span className="font-medium">Package</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Duration</p>
                      <div className="flex items-center text-blue-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">1 month</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Amount</p>
                      <div className="text-blue-600 font-medium">₹ 1,000</div>
                    </div>
                  </div>
                </div>

                {/* SQL Card */}
                <div className="bg-[#0a192f] text-white rounded-lg p-6 flex flex-col justify-center">
                  <h3 className="font-semibold text-2xl text-green-400 mb-4">
                    Associate Data engineer in SQL
                  </h3>
                  <p className="text-gray-200">
                    Gain practical knowledge in ETL, SQL and data warehousing
                    for data engineering
                  </p>
                </div>

                {/* Interview Tips Card */}
                <div className="border rounded-lg p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      Interview tips and tricks advice
                    </h3>
                    <Button
                      variant="outline"
                      className="bg-gray-800 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
                    >
                      View Details
                    </Button>
                  </div>

                  <p className="text-gray-700 mb-6">
                    Practical strategies to boost your interview confidence.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Service type</p>
                      <div className="flex items-center text-blue-600">
                        <MonitorPlay className="w-4 h-4 mr-2" />
                        <span className="font-medium">Webinar</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Date</p>
                      <div className="flex items-center text-blue-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">On 28th Oct</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Amount</p>
                      <div className="text-blue-600 font-medium">₹ 1,000</div>
                    </div>
                  </div>
                </div>

                {/* SQL Basics Card */}
                <div className="border rounded-lg p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      SQL Basics Cheat Sheet
                    </h3>
                    <Button
                      variant="outline"
                      className="bg-gray-800 text-white hover:bg-gray-700 text-xs px-3 py-1 h-auto rounded"
                    >
                      View Details
                    </Button>
                  </div>

                  <p className="text-gray-700 mb-6">
                    To strengthen your SQL and data skills
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Service type</p>
                      <div className="flex items-center text-blue-600">
                        <FileText className="w-4 h-4 mr-2" />
                        <span className="font-medium">Digital product</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-600 mb-1">Amount</p>
                      <div className="text-blue-600 font-medium">₹ 500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews section */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold">Reviews</h2>
                <span className="text-sm text-gray-600">3 Reviews</span>
                <div className="flex items-center">
                  <span className="font-medium mr-1">5.0</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div className="space-y-4">
                {/* Review 1 */}
                <div className="border-b pb-4">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-medium">5.0</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    He is very friendly and makes you comfortable first, then he
                    give the actual feedback of your technical knowledge which
                    helps to improve yourself. Honestly that I have was very
                    helpful and useful for me.
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Weilong Shan"
                        width={24}
                        height={24}
                      />
                    </Avatar>
                    <span className="text-sm font-medium">Weilong Shan</span>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="border-b pb-4">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-medium">4.5</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    His ability to create a relaxed atmosphere and provide
                    insightful feedback made the hour-long session highly
                    productive.
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Anonymous"
                        width={24}
                        height={24}
                      />
                    </Avatar>
                    <span className="text-sm font-medium">Anonymous</span>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="pb-4">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-medium">5.0</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    He is very friendly and makes you comfortable first, then he
                    give the actual feedback of your technical knowledge which
                    helps to improve yourself. Honestly that I have was very
                    helpful and useful for me. His honest and actionable
                    feedback on my technical abilities was invaluable.
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Robert Shah"
                        width={24}
                        height={24}
                      />
                    </Avatar>
                    <span className="text-sm font-medium">Robert Shah</span>
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
