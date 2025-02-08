interface IActivityCardProps {
  title: string;
  value: string;
  status: string;
  statusColor?: string;
  icon: React.ReactNode;
}

export default function ActivityCard({
  title,
  status,
  value,
  statusColor = "text-green-500",
  icon,
}: IActivityCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </div>
      <div className={`mt-1 text-sm ${statusColor}`}>{status}</div>
    </div>
  );
}
