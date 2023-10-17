"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TUserSchema, UserSchema } from "@/lib/types";
import { createUser } from "@/lib/uesr-type";
import { chuyenSangAscii } from "@/lib/user-utils";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
// import "react-day-picker/src/style.css";

export function InputForm() {
  const form = useForm<TUserSchema>({
    resolver: zodResolver(UserSchema),
    mode: "onChange",
  });

  function onSubmit(data: TUserSchema) {
    // Navigate to the next page

    const user = createUser(data.name, data.birthday);
    debugger;
    console.log("user", user);

    const queryParams = new URLSearchParams({
      name: data.name,
      birthday: format(data.birthday, "dd/MM/yyyy", { locale: vi }),
    });

    console.log(queryParams);
    // window.location.href = `/destiny?${queryParams}`;
  }

  return (
    <Card className="w-2/4">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">User info</CardTitle>
        <CardDescription>Enter your name and birthday</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    {...form.register(field.name)}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy", { locale: vi })
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" align="start">
                      <Calendar
                        mode="single"
                        captionLayout="dropdown-buttons"
                        fromYear={1901}
                        toYear={new Date().getFullYear()}
                        locale={vi}
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
