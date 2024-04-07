"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import Section from "./Section";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const QuoteForam = () => {
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("service", service);
    console.log("email", email);
  };
  return (
    <Section className="bg-[#0979E4]">
      <div className="mb-10">
        <h2 className="py-3 text-center text-3xl font-semibold text-white lg:text-4xl">
          Get Your Quote in 45 Minutes
        </h2>
        <h6 className="text-center text-white">
          Fill out the form with details your image editing requirements. We’ll
          get back within 45 minutes.
        </h6>
      </div>

      <form onSubmit={handleSubmit} className="flex justify-center gap-3">
        <Select onValueChange={(value) => setService(value)}>
          <SelectTrigger className="w-[350px] text-white focus:ring-0">
            <SelectValue placeholder="Service Type (required)" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Clipping Path and Background Remove">
                Clipping Path and Background Remove
              </SelectItem>
              <SelectItem value="Shadow Making">Shadow Making</SelectItem>
              <SelectItem value="Image Masking">Image Masking</SelectItem>
              <SelectItem value="Ghost Mannequin">Ghost Mannequin</SelectItem>
              <SelectItem value="Jewelry Retouching">
                Jewelry Retouching
              </SelectItem>
              <SelectItem value="Photo Retouching">Photo Retouching</SelectItem>
              <SelectItem value="Headshot Retouching">
                Headshot Retouching
              </SelectItem>
              <SelectItem value="Color Correction">Color Correction</SelectItem>
              <SelectItem value="Newborn Photo Retouching">
                Newborn Photo Retouching
              </SelectItem>
              <SelectItem value="Beauty Retouching">
                Beauty Retouching
              </SelectItem>
              <SelectItem value="E-Commerce Image Solution">
                E-Commerce Image Solution
              </SelectItem>
              <SelectItem value="Photo Crop and Image Resizing">
                Photo Crop and Image Resizing
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (required)"
          className="w-[350px] text-white placeholder:text-white focus:ring-0"
        />

        <button
          type="submit"
          className="rounded bg-white px-4 font-medium hover:shadow-lg"
        >
          Submit
        </button>
      </form>
    </Section>
  );
};
export default QuoteForam;
