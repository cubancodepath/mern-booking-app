export const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          MernHolidays.com
        </span>
        <ul className="text-white font-bold tracking-tight flex gap-4">
          <li className="cursor-pointer">Privacy Police</li>
          <li className="cursor-pointer">Term of Service</li>
        </ul>
      </div>
    </div>
  );
};
