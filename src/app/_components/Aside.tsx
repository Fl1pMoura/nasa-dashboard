import { Activity, Sun, Wind } from "lucide-react";

export default function Aside() {
  return (
    <aside className="fixed top-0 left-0 h-full w-16 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center py-4 space-y-8 justify-center">
        <div className="space-y-4 w-6 flex flex-col items-center mt-18">
          <button className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg">
            <Sun className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Wind className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Activity className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </aside>
  );
}
