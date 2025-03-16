import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

//   const eventData = [
//     {
//       id: 1,
//       category: "Religious",
//       title: "Interfaith Prayer Meeting",
//       date: "Sun Mar 16 2025 00:00:00 GMT+0530",
//       time: "6:00 PM",
//       location: "Community Center, 123 Main St",
//       description:
//         "Join us for an evening of prayer and reflection across different faith traditions. All are welcome to participate and share.",
//     },
//     {
//       id: 2,
//       category: "Social",
//       title: "Community Picnic & Networking",
//       date: "Sun Mar 16 2025 00:00:00 GMT+0530",
//       time: "2:00 PM",
//       location: "City Park, 456 Elm St",
//       description:
//         "Come and enjoy a fun-filled picnic with food, games, and networking opportunities. Bring your family and friends!",
//     },
//     {
//       id: 3,
//       category: "Charity",
//       title: "Fundraiser for Local Shelter",
//       date: "Sun Mar 16 2025 00:00:00 GMT+0530",
//       time: "5:00 PM",
//       location: "Town Hall, 789 Oak St",
//       description:
//         "Help support our local homeless shelter by attending this fundraising dinner. Your contributions will make a difference.",
//     },
//     {
//       id: 4,
//       category: "Religious",
//       title: "Sunday Morning Worship",
//       date: "Sun Mar 16 2025 00:00:00 GMT+0530",
//       time: "9:00 AM",
//       location: "Faith Church, 321 Pine St",
//       description:
//         "Join our weekly worship service and spiritual discussions. Everyone is welcome to share their experiences and learn.",
//     },
//     {
//       id: 5,
//       category: "Social",
//       title: "Cultural Dance & Music Night",
//       date: "Sun Mar 16 2025 00:00:00 GMT+0530",
//       time: "7:00 PM",
//       location: "Art Center, 567 Maple St",
//       description:
//         "Experience an evening of diverse cultural performances featuring traditional dances and live music from around the world.",
//     },
//   ];
