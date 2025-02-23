"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"

export async function createItinerary(preferences){

    console.log(preferences);
    

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Act as a travel planning expert. Create a detailed travel itinerary in strict JSON format based on the following preferences:
    - Traveling from: ${preferences.source}
    - Destination: ${preferences.destinations}
    - Dates: ${preferences.startDate} to ${preferences.endDate}
    - Budget: ${preferences.budget}
    - Number of Travelers: ${preferences.numberOfPeople}
    - Interests: ${preferences.tourType}
    - Description: ${preferences.description}
    - flightClass: ${preferences.flightClass}
    - foodPreference: ${preferences.flightClass}
    - hotelPreference: ${preferences.hotelPreference}
   Return ONLY a JSON object with this exact structure (no additional text or markdown):
{
  "overview": {
    "title": "Your Trip Title",
    "summary": "Brief trip summary",
    "duration": "X days",
    "totalCost": "Estimated total cost"
  },
  "dailyItinerary": [
    {
      "day": 1,
      "date": "YYYY-MM-DD",
      "activities": [
        {
          "time": "HH:MM",
          "activity": "Activity description",
          "location": "Location name",
          "cost": "Estimated cost",
          "duration": "Duration in hours"
        }
      ]
    }
  ],
  "hotels": [
    {
      "name": "Hotel Name",
      "location": "Hotel Address",
      "rating": "5-star",
      "pricePerNight": "Price in INR",
      "amenities": ["amenity1", "amenity2"],
      "description": "Brief hotel description",
      "imageUrl": "Use a placeholder image URL from unsplash.com related to the hotel type and location"
    }
  ],
  "flights": {
    "outbound": {
      "from": "Source Airport",
      "to": "Destination Airport",
      "date": "YYYY-MM-DD",
      "duration": "Duration in hours",
      "airline": "Airline name",
      "class": "${preferences.flightClass}"
    },
    "return": {
      "from": "Destination Airport",
      "to": "Source Airport",
      "date": "YYYY-MM-DD",
      "duration": "Duration in hours",
      "airline": "Airline name",
      "class": "${preferences.flightClass}"
    }
  },
  "travelTips": [
    "Tip 1",
    "Tip 2"
  ]`

  try {
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      let data = response.text();
      data = data.replace().replace(/```json/g, '').replace(/```/g, '').trim(); 
      
      const itineraryData = JSON.parse(data);
      itineraryData.hotels = itineraryData.hotels.map(hotel => ({
        ...hotel,
        imageUrl: hotel.imageUrl.replace(
            'https://unsplash.com/photos/',
            'https://images.unsplash.com/photo-'
        )   
    }));
      return itineraryData

  } catch (error) {
        console.error('Error generating itinerary:', error);
        throw new Error('Failed to generate itinerary. Please try again.');
  }
    // const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=GEMINI_API_KEY${process.env.GEMINI_API_KEY}`, {
    //     headers:{
            
    //     }
    // })
}