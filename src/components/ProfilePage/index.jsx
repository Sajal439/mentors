import ProfileCard from "./ProfileCard";
import ServicesCard from "./ServicesCard";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Clock,
  FileText,
  MailIcon,
  MonitorPlay,
  Package,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div>
      <ProfileCard />

      <ServicesCard />

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
              He is very friendly and makes you comfortable first, then he give
              the actual feedback of your technical knowledge which helps to
              improve yourself. Honestly that I have was very helpful and useful
              for me.
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
              His ability to create a relaxed atmosphere and provide insightful
              feedback made the hour-long session highly productive.
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
              He is very friendly and makes you comfortable first, then he give
              the actual feedback of your technical knowledge which helps to
              improve yourself. Honestly that I have was very helpful and useful
              for me. His honest and actionable feedback on my technical
              abilities was invaluable.
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
  );
}
