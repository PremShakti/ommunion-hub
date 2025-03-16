import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

const eventSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  date: z.date(),
  category: z.string().min(2, "Category must be at least 2 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
});
interface AddEventFormProps {
  fetchEvents: () => void;
}

export const AddEventForm: React.FC<AddEventFormProps> = ({ fetchEvents }) => {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-blue-600 text-white">
            Add New Event
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Event</DialogTitle>
            <DialogDescription>Fill in event details</DialogDescription>
          </DialogHeader>
          <EventForm setOpen={setOpen} fetchEvents={fetchEvents} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-blue-600 text-white">
          Add New Event
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader>
          <DrawerTitle>Create New Event</DrawerTitle>
          <DrawerDescription>Fill in event details</DrawerDescription>
        </DrawerHeader>
        <EventForm setOpen={setOpen} fetchEvents={fetchEvents} />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

interface EventFormProps {
  setOpen: (value: boolean) => void;
  fetchEvents: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ setOpen, fetchEvents }) => {
  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      date: undefined,
      category: "",
      location: "",
      description: "",
    },
  });
  const [submitLoading, setSubmitLoading] = useState(false);
  const onSubmit = async (data: any) => {
    setSubmitLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxIag6Y79qwXZXO6QxU7WgQe0twbIfDkNVGv5_DVCmaFVkTsos0eqscrTtoGVwLweQIfA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Response from server:", result);

      if (response.ok) {
        fetchEvents();
        setSubmitLoading(false);

        setOpen(false);
        form.reset();
      } else {
        setSubmitLoading(false);

        console.log(response);
      }
    } catch (error) {
      setSubmitLoading(false);

      console.error("Error posting event:", error);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <Label>Title</Label>
              <FormControl>
                <Input {...field} placeholder="Enter event title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date </FormLabel>
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
                <PopoverContent className="w-auto p-0 " align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <Label>Category</Label>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="religious">Religious</SelectItem>
                    <SelectItem value="social">Social</SelectItem>

                    <SelectItem value="educational">Educational</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <Label>Location</Label>
              <FormControl>
                <Input {...field} placeholder="Enter event location" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <Label>Description</Label>
              <FormControl>
                {/* <Input {...field} placeholder="Enter event description" /> */}
                <Textarea
                  placeholder="Enter event description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {submitLoading ? (
          <div className="w-full flex items-center justify-center">
            {" "}
            <div className=" h-10 w-10 border-5 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <Button
            type="submit"
            disabled={submitLoading}
            className="bg-blue-600 hover:bg-blue-500"
          >
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};
