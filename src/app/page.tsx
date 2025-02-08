import { Activity, Sun, Wind } from "lucide-react";
import ActivityCard from "./_components/ActivityCard";
import Aside from "./_components/Aside";
import Header from "./_components/Header";

export default function DashboardLayout() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <div className="ml-16">
        {/* Top Navigation */}
        <Header />

        {/* Dashboard Content */}
        <section className="p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <ActivityCard
              title="Solar Activity"
              value="M2.5"
              status="Active"
              icon={<Sun className="w-5 h-5 text-yellow-500" />}
            ></ActivityCard>

            {/* X-Ray Flux Card */}
            <ActivityCard
              title="X-Ray Flux"
              value="1.5e-6 W/m²"
              status="Moderate"
              statusColor="text-yellow-500"
              icon={<Activity className="w-5 h-5 text-blue-500" />}
            ></ActivityCard>

            {/* Geomagnetic Storm Card */}
            <ActivityCard
              title="Geomagnetic Storm"
              value="Kp 4"
              status="Minor Storm"
              statusColor="text-blue-500"
              icon={<Wind className="w-5 h-5 text-purple-500" />}
            ></ActivityCard>
          </div>

          {/* Chart Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Solar Activity Trend
            </h3>
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
          </div>

          {/* Additional Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Recent Alerts
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Solar Flare Warning
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        2 hours ago
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Forecast
              </h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      24h Forecast
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Moderate Activity
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
