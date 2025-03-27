import { Briefcase, Calendar, Phone, Users2 } from "lucide-react";

function SideBar() {
  return (
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
  );
}

export default SideBar;
