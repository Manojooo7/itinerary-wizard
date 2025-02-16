"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const formSchema = z.object({
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
});

const tourTypes = [
  "Adventure",
  "Honeymoon",
  "Beach",
  "Safari",
  "Cultural",
  "City Break",
  "Mountain",
  "Wellness",
];

const hotelPreferences = ["Budget", "Mid-Range", "Luxury", "Ultra-Luxury"];
const flightClasses = ["Economy", "Premium Economy", "Business", "First Class"];
const foodPreferences = ["All", "Vegetarian", "Vegan", "Halal", "Kosher"];

export default function CreateItinerary() {
    const {
        handleSubmit,
        control,
        setValue,
        formState,
        ...formMethods
      } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          destinations: [],
          description: "",
          budget: "",
          numberOfPeople: "1",
        },
      });

  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState("");

  function onSubmit(values) {
    console.log(values);
  }

  const addDestination = () => {
    if (newDestination.trim()) {
      setDestinations([...destinations, newDestination.trim()]);
      setNewDestination("");
      form.setValue("destinations", [...destinations, newDestination.trim()]);
    }
  };

  const removeDestination = (index) => {
    const newDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(newDestinations);
    form.setValue("destinations", newDestinations);
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container max-w-3xl mx-auto px-4"
      >
        <h1 className="text-3xl font-bold mb-2">Create Your Perfect Itinerary</h1>
        <p className="text-muted-foreground mb-8">
          Tell us about your dream trip, and we'll help you plan it.
        </p>

        <Form {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <FormLabel>Destinations</FormLabel>
              <div className="flex gap-2 mb-2">
                <Input
                  value={newDestination}
                  onChange={(e) => setNewDestination(e.target.value)}
                  placeholder="Add a destination"
                  className="flex-1"
                />
                <Button type="button" onClick={addDestination}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {destinations.map((dest, index) => (
                  <div
                    key={index}
                    className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    <span>{dest}</span>
                    <button
                      type="button"
                      onClick={() => removeDestination(index)}
                      className="hover:text-red-400"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              {formState.errors.destinations && (
                <p className="text-sm text-red-500">
                  {formState.errors.destinations.message}
                </p>
              )}
            </div>

            <FormField
              control={control}
              name="tourType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of Tour</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tour type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {tourTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trip Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your dream trip..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter your budget" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="numberOfPeople"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of People</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FormField
                control={control}
                name="hotelPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hotel Preference</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {hotelPreferences.map((pref) => (
                          <SelectItem key={pref} value={pref.toLowerCase()}>
                            {pref}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="flightClass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Flight Class</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {flightClasses.map((cls) => (
                          <SelectItem key={cls} value={cls.toLowerCase()}>
                            {cls}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="foodPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food Preference</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {foodPreferences.map((pref) => (
                          <SelectItem key={pref} value={pref.toLowerCase()}>
                            {pref}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full shiny-button">
              Create Itinerary
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
