import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calendar, MapPin, Plane, Hotel, Utensils, Activity, Image, GalleryHorizontal } from "lucide-react";

// Mock data - in a real app, this would come from an API or context
const itineraryData = {
  id: "it-1234",
  title: "Dream Bali Adventure",
  description: "Experience the best of Bali with this carefully curated 7-day adventure itinerary.",
  featuredImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=630&fit=crop",
  destinations: ["Ubud", "Kuta", "Seminyak", "Nusa Dua"],
  tourType: "Adventure",
  startDate: new Date("2023-10-15"),
  endDate: new Date("2023-10-22"),
  duration: 7,
  budget: "$2,500",
  people: 2,
  flights: [
    {
      id: "fl-1",
      airline: "Singapore Airlines",
      flightNumber: "SQ-456",
      departureAirport: "LAX",
      departureCity: "Los Angeles",
      departureDate: new Date("2023-10-15T10:30:00"),
      arrivalAirport: "DPS",
      arrivalCity: "Denpasar",
      arrivalDate: new Date("2023-10-16T18:45:00"),
      class: "Economy"
    },
    {
      id: "fl-2",
      airline: "Singapore Airlines",
      flightNumber: "SQ-789",
      departureAirport: "DPS",
      departureCity: "Denpasar",
      departureDate: new Date("2023-10-22T20:15:00"),
      arrivalAirport: "LAX",
      arrivalCity: "Los Angeles",
      arrivalDate: new Date("2023-10-23T08:30:00"),
      class: "Economy"
    }
  ],
  hotels: [
    {
      id: "ht-1",
      name: "Ubud Jungle Resort & Spa",
      location: "Ubud",
      checkIn: new Date("2023-10-16"),
      checkOut: new Date("2023-10-19"),
      rating: 4.8,
      amenities: ["Pool", "Spa", "Free Breakfast", "WiFi"]
    },
    {
      id: "ht-2",
      name: "Kuta Beach Resort",
      location: "Kuta",
      checkIn: new Date("2023-10-19"),
      checkOut: new Date("2023-10-22"),
      rating: 4.5,
      amenities: ["Beachfront", "Pool", "Restaurant", "WiFi"]
    }
  ],
  activities: [
    {
      id: "act-1",
      name: "Ubud Monkey Forest Tour",
      location: "Ubud",
      day: 1,
      duration: "3 hours",
      description: "Explore the sacred monkey forest sanctuary with over 700 monkeys.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
    },
    {
      id: "act-2",
      name: "Tegallalang Rice Terraces",
      location: "Ubud",
      day: 2,
      duration: "Half day",
      description: "Visit the stunning rice terraces and take in the beautiful landscape.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    },
    {
      id: "act-3",
      name: "Kuta Beach Surfing Lesson",
      location: "Kuta",
      day: 4,
      duration: "2 hours",
      description: "Learn how to surf at the famous Kuta Beach with professional instructors.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
    },
    {
      id: "act-4",
      name: "Uluwatu Temple Sunset Tour",
      location: "Uluwatu",
      day: 5,
      duration: "4 hours",
      description: "Watch the sunset at the iconic Uluwatu temple and enjoy a Kecak fire dance.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    },
    {
      id: "act-5",
      name: "Seminyak Shopping & Dining",
      location: "Seminyak",
      day: 6,
      duration: "Full day",
      description: "Explore the trendy shops and restaurants in Seminyak.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
    }
  ],
  dayWiseItinerary: [
    {
      day: 1,
      title: "Arrival & Welcome",
      description: "Arrive in Bali, transfer to Ubud hotel, welcome dinner.",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
    {
      day: 2,
      title: "Ubud Cultural Day",
      description: "Explore Ubud's cultural highlights.",
      activities: ["Monkey Forest", "Local market visit", "Traditional dance performance"]
    },
    {
      day: 3,
      title: "Nature & Adventure",
      description: "Experience Bali's natural beauty.",
      activities: ["Rice terraces trek", "Waterfall visit", "Coffee plantation tour"]
    },
    {
      day: 4,
      title: "Transfer to Kuta & Beach Day",
      description: "Check out from Ubud hotel, transfer to Kuta, and relax.",
      activities: ["Hotel transfer", "Beach time", "Surfing lesson"]
    },
    {
      day: 5,
      title: "South Bali Exploration",
      description: "Discover Bali's stunning southern peninsula.",
      activities: ["Uluwatu Temple", "Padang Padang beach", "Seafood dinner at Jimbaran"]
    },
    {
      day: 6,
      title: "Shopping & Relaxation",
      description: "Shop for souvenirs and enjoy Seminyak.",
      activities: ["Seminyak shopping", "Spa treatment", "Sunset at beach club"]
    },
    {
      day: 7,
      title: "Departure Day",
      description: "Last-minute shopping, check out and transfer to airport.",
      activities: ["Free morning", "Airport transfer", "Departure"]
    }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop"
  ],
  includedServices: ["Airport transfers", "Accommodation", "Breakfast", "Tour guide", "Entrance fees"],
  excludedServices: ["International flights", "Travel insurance", "Personal expenses", "Optional activities"]
};

const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
};

export default function ItineraryDisplay() {
  return (
    <div className="w-full bg-background py-10 mt-9">
      <div className="w-full flex flex-col px-4">
        {/* Hero Section with Featured Image */}
        <div className="relative w-full h-[70vh] rounded-xl overflow-hidden mb-8">
          <img 
            src={itineraryData.featuredImage} 
            alt={itineraryData.title}
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-10">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            > */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {itineraryData.title}
              </h1>
              <p className="text-white/80 text-lg mb-4">
                {itineraryData.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary rounded-full px-3 py-1 text-sm flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {itineraryData.duration} days
                </span>
                <span className="bg-primary/20 text-primary rounded-full px-3 py-1 text-sm flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {itineraryData.destinations.length} destinations
                </span>
                <span className="bg-primary/20 text-primary rounded-full px-3 py-1 text-sm flex items-center gap-1">
                  {itineraryData.tourType}
                </span>
              </div>
            {/* </motion.div> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Summary and Tabs */}
          <div className="lg:col-span-2">
            {/* Summary Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Itinerary Summary</CardTitle>
                <CardDescription>
                  {formatDate(itineraryData.startDate)} - {formatDate(itineraryData.endDate)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tour Type</p>
                    <p className="font-medium">{itineraryData.tourType}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{itineraryData.duration} days</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-medium">{itineraryData.budget}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">People</p>
                    <p className="font-medium">{itineraryData.people}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book This Trip</Button>
              </CardFooter>
            </Card>

            {/* Tabs for Details */}
            <Tabs defaultValue="day-by-day" className="mb-8">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="day-by-day">Day by Day</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>
              
              {/* Day-by-Day Tab */}
              <TabsContent value="day-by-day" className="space-y-4 mt-4">
                {itineraryData.dayWiseItinerary.map((day) => (
                  <Collapsible key={day.day} className="border rounded-lg overflow-hidden">
                    <CollapsibleTrigger className="flex justify-between items-center w-full px-4 py-3 hover:bg-muted/50">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center font-medium">
                          {day.day}
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium">{day.title}</h3>
                        </div>
                      </div>
                      <span className="text-muted-foreground">+</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-3 border-t">
                      <p className="text-muted-foreground mb-3">{day.description}</p>
                      <h4 className="font-medium mb-2">Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {day.activities.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </TabsContent>
              
              {/* Activities Tab */}
              <TabsContent value="activities" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {itineraryData.activities.map((activity) => (
                    <Card key={activity.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <img 
                          src={activity.image} 
                          alt={activity.name}
                          className="absolute inset-0 w-full h-full object-cover" 
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{activity.name}</CardTitle>
                          <div className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                            Day {activity.day}
                          </div>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {activity.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                        <p className="text-sm mt-2">
                          <span className="font-medium">Duration:</span> {activity.duration}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Gallery Tab */}
              <TabsContent value="gallery" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {itineraryData.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Gallery image ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Flights, Hotels, Details */}
          <div className="space-y-8">
            {/* Flights Card */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Plane className="h-5 w-5" />
                <div>
                  <CardTitle>Flight Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {itineraryData.flights.map((flight) => (
                  <div key={flight.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{flight.airline}</span>
                      <span className="text-sm text-muted-foreground">{flight.flightNumber}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-left">
                        <p className="text-xl font-bold">{flight.departureAirport}</p>
                        <p className="text-sm text-muted-foreground">{flight.departureCity}</p>
                        <p className="text-xs">
                          {flight.departureDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                      </div>
                      <div className="flex-1 px-4">
                        <div className="relative flex items-center justify-center">
                          <div className="border-t border-dashed border-muted-foreground flex-1"></div>
                          <Plane className="mx-1 h-4 w-4 text-muted-foreground rotate-90" />
                        </div>
                        <p className="text-xs text-center text-muted-foreground mt-1">
                          {formatDate(flight.departureDate)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">{flight.arrivalAirport}</p>
                        <p className="text-sm text-muted-foreground">{flight.arrivalCity}</p>
                        <p className="text-xs">
                          {flight.arrivalDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Class:</span> {flight.class}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Hotels Card */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Hotel className="h-5 w-5" />
                <div>
                  <CardTitle>Accommodations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {itineraryData.hotels.map((hotel) => (
                  <div key={hotel.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-semibold">{hotel.name}</h3>
                      <div className="flex items-center">
                        <span>★</span>
                        <span className="ml-1">{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                      <MapPin className="h-3 w-3" /> {hotel.location}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Check in:</span>
                        <p>{formatDate(hotel.checkIn)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Check out:</span>
                        <p>{formatDate(hotel.checkOut)}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm text-muted-foreground">Amenities:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {hotel.amenities.map((amenity, index) => (
                          <span key={index} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Cities Card */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <MapPin className="h-5 w-5" />
                <div>
                  <CardTitle>Included Destinations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {itineraryData.destinations.map((city, index) => (
                    <div key={index} className="bg-secondary/50 px-3 py-1.5 rounded-full text-sm">
                      {city}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inclusions/Exclusions */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Included in package:</h3>
                  <ul className="space-y-1">
                    {itineraryData.includedServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Not included:</h3>
                  <ul className="space-y-1">
                    {itineraryData.excludedServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">✗</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
