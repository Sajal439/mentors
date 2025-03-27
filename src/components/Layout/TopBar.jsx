import { Bell, ChevronDown } from "lucide-react";

function TopBar() {
  return (
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
  );
}

export default TopBar;
