"use client";
import Section from "./Section";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

const QuoteForam = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <Section className="bg-[#0254B1]">
      <div className="mb-10">
        <h2 className="py-3 text-center text-3xl font-semibold text-white lg:text-4xl">
          Get Your Quote in 45 Minutes
        </h2>
        <h6 className="text-center text-white">
          Fill out the form with details your image editing requirements. We’ll
          get back within 45 minutes.
        </h6>
      </div>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={`bg:#F1F1F1 m-auto flex max-w-lg flex-col justify-center gap-3 md:max-w-3xl md:flex-row`}
      >
        <div className="w-full">
          <label htmlFor="service"></label>
          <select
            name="service"
            id="service"
            {...register("service", {
              required: "Service is required",
            })}
            aria-label="select-service"
            className={`w-full rounded border-2 p-3 ${errors?.service ? "border-red-600 focus:border-red-600" : "border-slate-300 focus:border-[#0979E4]"}`}
          >
            <option value="">Service Type (required)</option>
            <option value="Clipping Path and Background Remove">
              Clipping Path and Background Remove
            </option>
            <option value="Shadow Making">Shadow Making</option>
            <option value="Image Masking">Image Masking</option>
            <option value="Ghost Mannequin">Ghost Mannequin</option>
            <option value="Jewelry Retouching">Jewelry Retouching</option>
            <option value="Photo Retouching">Photo Retouching</option>
            <option value="Headshot Retouching">Headshot Retouching</option>
            <option value="Color Correction">Color Correction</option>
            <option value="Newborn Photo Retouching">
              Newborn Photo Retouching
            </option>
            <option value="Beauty Retouching">Beauty Retouching</option>
            <option value="E-Commerce Image Solution">
              E-Commerce Image Solution
            </option>
            <option value="Photo Crop and Image Resizing">
              Photo Crop and Image Resizing
            </option>
          </select>
          <span className="flex items-center gap-1 text-red-600">
            {errors?.service && (
              <>
                <MdErrorOutline /> {errors?.service?.message}
              </>
            )}
          </span>
        </div>
        {/* <Select onValueChange={(value) => setService(value)}>
          <SelectTrigger className=" text-white focus:ring-0">
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
        </Select> */}
        <div className="w-full">
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Email is required",
            })}
            placeholder="Email (required)"
            className={`w-full rounded border p-3 text-black  placeholder:text-black ${errors?.email ? "border-red-600 focus:border-red-600" : "border-slate-300 focus:border-[#0979E4]"}`}
          />
          <span className="flex items-center gap-1 text-red-600">
            {errors?.email && (
              <>
                <MdErrorOutline /> {errors?.email?.message}
              </>
            )}
          </span>
        </div>

        <button
          type="submit"
          className="h-[50px] rounded bg-black px-8 font-medium  text-white hover:shadow-lg"
        >
          Submit
        </button>
      </form>
    </Section>
  );
};
export default QuoteForam;
