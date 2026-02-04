// Events Data
// HOW TO ADD A NEW EVENT:
// 1. Copy the template below
// 2. Fill in the details (title, date, description, media)
// 3. Set status to "current" for ongoing events, "past" for completed ones
// 4. Add images/videos to src/assets/events/ folder
// 5. Save this file

/* EVENT TEMPLATE:
{
  id: [NEXT_NUMBER],
  title: "Event Title",
  date: "2026-02-15",
  status: "current", // or "past"
  description: "Brief description of the event and its impact.",
  media: {
    poster: "/src/assets/events/event-poster.jpg",
    images: [
      "/src/assets/events/event-1.jpg",
      "/src/assets/events/event-2.jpg"
    ],
    videos: [] // Optional: YouTube embed URLs
  },
  donationActive: false // Set to true to enable donation button
}
*/

export const events = [
    {
        id: 1,
        title: "Winter Clothing Drive",
        date: "2026-01-15",
        status: "current",
        description: "Collecting warm clothing for families in need during the winter season. Join us in making a difference!",
        media: {
            poster: "/src/assets/events/placeholder-event-1.jpg",
            images: [
                "/src/assets/events/placeholder-event-1.jpg"
            ],
            videos: []
        },
        donationActive: true
    },
    {
        id: 2,
        title: "Community Clean-Up Day",
        date: "2025-12-10",
        status: "past",
        description: "Successfully organized a community clean-up initiative with over 50 volunteers.",
        media: {
            poster: "/src/assets/events/placeholder-event-2.jpg",
            images: [
                "/src/assets/events/placeholder-event-2.jpg"
            ],
            videos: []
        },
        donationActive: false
    },
    {
        id: 3,
        title: "Educational Workshop Series",
        date: "2025-11-20",
        status: "past",
        description: "Conducted educational workshops for underprivileged children, reaching 100+ students.",
        media: {
            poster: "/src/assets/events/placeholder-event-3.jpg",
            images: [
                "/src/assets/events/placeholder-event-3.jpg"
            ],
            videos: []
        },
        donationActive: false
    }
];

// Helper functions
export const getCurrentEvents = () => events.filter(e => e.status === "current");
export const getPastEvents = () => events.filter(e => e.status === "past").sort((a, b) => new Date(b.date) - new Date(a.date));
