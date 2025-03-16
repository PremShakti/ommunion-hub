import { useEffect, useState } from "react";
import { AddEventForm } from "@/components/Events/AddEventForm";
import EventCard from "@/components/Events/EventCard";
import EventCardSkeleton from "@/components/Events/EventCardSkeletonloader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const api = `https://script.google.com/macros/s/AKfycbxIag6Y79qwXZXO6QxU7WgQe0twbIfDkNVGv5_DVCmaFVkTsos0eqscrTtoGVwLweQIfA/exec`;

const Events = () => {
  const [eventData, setEventData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [category, setCategory] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(api);
      if (response.ok) {
        const data = await response.json();
        // Sort by latest first
        const sortedData = data.sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setEventData(sortedData);
        setFilteredData(sortedData);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter Function
  useEffect(() => {
    let filtered = [...eventData];

    // Category Filtering
    if (category !== "all") {
      filtered = filtered.filter((event) => event.category === category);
    }

    // Date Filtering
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday of this week
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday of this week

    if (dateFilter === "today") {
      filtered = filtered.filter(
        (event) => new Date(event.date).toDateString() === today.toDateString()
      );
    } else if (dateFilter === "this-week") {
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay()); // Set to Sunday of this week
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // Set to Saturday of this week
      endOfWeek.setHours(23, 59, 59, 999);

      filtered = filtered.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= startOfWeek && eventDate <= endOfWeek;
      });
    } else if (dateFilter === "this-month") {
      filtered = filtered.filter(
        (event) => new Date(event.date).getMonth() === today.getMonth()
      );
    } else if (dateFilter === "upcoming") {
      filtered = filtered.filter((event) => new Date(event.date) > today);
    }

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  }, [category, dateFilter, eventData]);

  // Pagination Logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredData.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <main>
      <section id="events" className="min-h-screen pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              Community Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover and join events from various faith communities or create
              your own to share with others.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-8">
            <div className="w-full md:w-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Select onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-[130px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="religious">Religious</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="educational">Educational</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setDateFilter}>
                <SelectTrigger className="w-full md:w-[130px]">
                  <SelectValue placeholder="All Dates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <AddEventForm fetchEvents={fetchEvents} />
          </div>

          {/* Event List */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }, (_, i) => (
                <EventCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEvents.length > 0 ? (
                currentEvents.map((event, i) => (
                  <EventCard key={i} {...event} />
                ))
              ) : (
                <p className="text-center w-full col-span-3">
                  No events found.
                </p>
              )}
            </div>
          )}

          {/* Pagination */}
          {filteredData.length > eventsPerPage && (
            <div className="flex justify-center mt-8">
              {Array.from(
                { length: Math.ceil(filteredData.length / eventsPerPage) },
                (_, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 mx-1 rounded ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Events;
