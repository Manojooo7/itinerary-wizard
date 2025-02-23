"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Plane, Hotel, Utensils } from "lucide-react";
import Image from "next/image";

const DisplayItinerary = ({ itineraryData }) => {
  if (!itineraryData) return null;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">{itineraryData.overview.title}</h1>
          <p className="text-xl text-muted-foreground">{itineraryData.overview.summary}</p>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{itineraryData.overview.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5" />
              <span>{itineraryData.flights.outbound.airline}</span>
            </div>
            <div className="flex items-center gap-2">
              <Hotel className="w-5 h-5" />
              <span>{itineraryData.hotels.length} Hotels</span>
            </div>
          </div>
        </motion.div>

        {/* Daily Itinerary */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Daily Itinerary</h2>
          {itineraryData.dailyItinerary.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Day {day.day}</h3>
                <span className="text-muted-foreground">{day.date}</span>
              </div>
              <div className="space-y-4">
                {day.activities.map((activity, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">{activity.time} - {activity.activity}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {activity.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Duration: {activity.duration} • Cost: {activity.cost}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hotels Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itineraryData.hotels.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={hotel.imageUrl}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{hotel.location}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 px-2 py-1 rounded text-sm">
                      {hotel.rating}
                    </span>
                    <span className="text-sm font-medium">
                      ₹{hotel.pricePerNight}/night
                    </span>
                  </div>
                  <p className="text-sm">{hotel.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        

        {/* Travel Tips */}
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Travel Tips</h2>
          <ul className="space-y-2">
            {itineraryData.travelTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayItinerary;