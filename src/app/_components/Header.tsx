import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4">
      <div className="h-full flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Space Weather Monitor
        </h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
