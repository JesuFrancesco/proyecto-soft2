import { IClase } from "@/interfaces/IClase";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface DayProps {
  date: Date;
  events: IClase[];
}

const Day: React.FC<DayProps> = ({ date, events }) => {
  const formattedDate = date.toISOString().split("T")[0];

  const eventsForDay = events.filter((event) =>
    event.fechaClase.startsWith(formattedDate)
  );

  return (
    <div className="flex flex-col p-2 border rounded-lg hover:shadow-md">
      <div className="font-semibold text-center">{date.getDate()}</div>
      <div className="mt-2 space-y-1 text-sm">
        {eventsForDay.length > 0 ? (
          eventsForDay.map((event) => (
            <Link key={event.id} href={`/cursos/${event.id}`}>
              <div key={event.id} className="p-1 rounded-md">
                {event.id} - {event.tema.subespecialidad}
              </div>
            </Link>
          ))
        ) : (
          <div className="text-gray-500 text-center">No hay clases...</div>
        )}
      </div>
    </div>
  );
};

interface CalendarProps {
  clases: IClase[];
}

const Calendar: React.FC<CalendarProps> = ({ clases }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthRange = (date: Date): { start: Date; end: Date } => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return { start, end };
  };

  const { start, end } = getMonthRange(currentDate);

  const getCalendarDays = () => {
    const days = [];
    const firstDayOfMonth = new Date(start);
    const firstDayOfWeek = firstDayOfMonth.getDay();

    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= end.getDate(); i++) {
      days.push(new Date(start.getFullYear(), start.getMonth(), i));
    }

    while (days.length % 7 !== 0) {
      days.push(null);
    }

    return days;
  };

  const days = getCalendarDays();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <motion.button
          className="px-4 py-2 rounded-md shadow-md"
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.setMonth(currentDate.getMonth() - 1))
            )
          }
          whileTap={{ scale: 0.95 }}
        >
          Prev.
        </motion.button>
        <span className="text-xl font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <motion.button
          className="px-4 py-2 rounded-md shadow-md"
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.setMonth(currentDate.getMonth() + 1))
            )
          }
          whileTap={{ scale: 0.95 }}
        >
          Sgte.
        </motion.button>
      </div>

      {/* Calendar Grid with square cells */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex justify-center items-center aspect-w-1 aspect-h-1"
          >
            {day ? (
              <Day date={day} events={clases} />
            ) : (
              <div className="w-full h-full border rounded-lg"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
