"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormLabel, FormControl, FormMessage, FormItem } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  email: z.string().email("Invalid email"),
  contact: z.string().min(10, "Invalid contact number"),
  qualification: z.string().min(2, "Required"),
  college: z.string().min(2, "Required"),
  city: z.string().min(2, "Required"),
  organization: z.string().min(2, "Required"),
  referral: z.string().min(2, "Required"),
});

export default function FifaForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
        FIFA/CIES International Programme in Sports Management
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
        Dear Candidate, Thank you for your interest in the only FIFA Certified Sports Management Course in India, based in Mumbai.
        The Pillai Group of Institutions has partnered with the World's Governing Body of Football (FIFA) and the International Center
        for Sports Studies (CIES) to conduct the prestigious FIFA/CIES International Programme in Sports Management at the Pillai
        Campus in Navi Mumbai.
      </p>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
        It is a part-time post graduate diploma course certified by both FIFA and CIES and is conducted in four blocks
        of one week over the course of 8 months. This course is an excellent opportunity for those currently working in the sports industry who wish to
        advance their careers with a prestigious professional and global certification. It is also a perfect stepping stone for individuals looking to switch to or
        start their careers in sports management.
      </p>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
        Register below to discover how our program can help you achieve your professional goals in sports management.
        Please visit our website given below for detailed information on the course.
        <br />
        <a href="https://fifacies.pimsr.ac.in/" className="text-blue-500 underline">https://fifacies.pimsr.ac.in/</a>
        <br />
        Contact: 9833709566 / 8450960483
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Name *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your name" className="border-gray-300 focus:ring-blue-500" />
                </FormControl>
                <FormMessage>{form.formState.errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* Date of Birth Field */}
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Date of Birth *</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="border-gray-300 focus:ring-blue-500" />
                </FormControl>
                <FormMessage>{form.formState.errors.dob?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Email ID *</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="Enter your email" className="border-gray-300 focus:ring-blue-500" />
                </FormControl>
                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* Contact Number Field */}
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Contact Number *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your contact number" className="border-gray-300 focus:ring-blue-500" />
                </FormControl>
                <FormMessage>{form.formState.errors.contact?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* Qualification Field */}
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Highest Educational Qualification *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your qualification" className="border-gray-300 focus:ring-blue-500" />
                </FormControl>
                <FormMessage>{form.formState.errors.qualification?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* College Field */}
          <FormField
            control={form.control}
            name="college"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Name of College / University *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your college/university name" className="border-gray-300 focus:ring-blue-500" />
                </FormControl>
                <FormMessage>{form.formState.errors.college?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* City Field */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Current City / Town *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your city" className="border-gray-300 focus:ring-blue-500" />
                </FormControl>
                <FormMessage>{form.formState.errors.city?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* Organization Field */}
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Current Organization and Designation *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your organization and designation" className="border-gray-300 focus:ring-blue-500" />
                </FormControl>
                <FormMessage>{form.formState.errors.organization?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* Referral Field */}
          <FormField
            control={form.control}
            name="referral"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">How did you hear about this course? *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g. Social Media, Friend, Website" className="border-gray-300 focus:ring-blue-500" />
                </FormControl>
                <FormMessage>{form.formState.errors.referral?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
