import {z} from "zod"

export const itineraryFormSchema = z.object({
    source: z.string().min(1, "Add Source").max(70, "Source can't be longer then 70"),
    destinations: z.array(z.string()).min(1, "Add at least one destination"),
    tourType: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    description: z.string().min(10, "Description should be at least 10 characters"),
    budget: z.string(),
    numberOfPeople: z.string(),
    hotelPreference: z.string(),
    flightClass: z.string(),
    foodPreference: z.string(),
})