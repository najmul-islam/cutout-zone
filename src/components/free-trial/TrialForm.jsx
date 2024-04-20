"use client";
import { useForm } from "react-hook-form";
import countries from "@/data/countryData.json";
import { MdErrorOutline } from "react-icons/md";

const TrialForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      website: "http://www.",
    },
  });

  const handleFormSubmit = (data) => {};

  return (
    <section className="container flex flex-col-reverse gap-10 py-8 md:flex-row">
      <div className="w-full md:w-1/2">
        <form
          className="flex flex-col gap-4 "
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex w-full flex-col">
            <label htmlFor="name" className="">
              Your name (required)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", {
                required: "Name is required",
              })}
              className={`rounded border  px-3 py-2  focus:outline-0 ${errors?.name ? "border-red-600 focus:border-red-600" : "border-slate-300 focus:border-[#0979E4]"}`}
            />
            <span className="flex items-center gap-1 text-sm text-red-600">
              {errors?.name && (
                <>
                  <MdErrorOutline /> {errors?.name?.message}
                </>
              )}
            </span>
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="email">Your email (required)</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {
                required: "Email is required",
              })}
              className={`rounded border px-3 py-2 focus:outline-0 ${errors?.name ? "border-red-600 focus:border-red-600" : "border-slate-300 focus:border-[#0979E4]"}`}
            />
            <span className="flex items-center gap-1 text-sm text-red-600">
              {errors?.email && (
                <>
                  <MdErrorOutline /> {errors?.email?.message}
                </>
              )}
            </span>
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="company">Your company</label>
            <input
              type="text"
              id="company"
              name="conpany"
              {...register("company")}
              className={`rounded border border-slate-300 px-3 py-2 focus:border-[#0979E4] focus:outline-0`}
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="country">Your country (required)</label>
            <select
              name="country"
              id="country"
              {...register("country", { required: "Country name is required" })}
              className={`rounded border  px-3 py-2  focus:outline-0 ${errors?.country ? "border-red-600 focus:border-red-600" : "border-slate-300 focus:border-[#0979E4]"}`}
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>

            <span className="flex items-center gap-1 text-sm text-red-600">
              {errors?.country && (
                <>
                  <MdErrorOutline /> {errors?.country?.message}
                </>
              )}
            </span>
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="number">Your phone number </label>
            <input
              type="text"
              id="number"
              name="number"
              {...register("number")}
              className={`rounded border border-slate-300 px-3  py-2 focus:border-[#0979E4] focus:outline-0`}
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="website">Your website </label>
            <input
              type="text"
              id="website"
              name="website"
              {...register("website")}
              className={`"border-slate-300 rounded border px-3 py-2 focus:border-[#0979E4] focus:outline-0`}
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="service">Service type (required)</label>
            <select
              name="service"
              id="service"
              {...register("service", {
                required: "Service is required",
              })}
              aria-label="select-service"
              className={`rounded border  px-3 py-2  focus:outline-0 ${errors?.service ? "border-red-600 focus:border-red-600" : "border-slate-300 focus:border-[#0979E4]"}`}
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

          <div className="flex w-full flex-col">
            <label htmlFor="image">Image (required)</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              {...register("image", {
                required: "image is required",
              })}
              className={`rounded border  px-3 py-1 focus:outline-0 ${errors?.image ? "border-red-600 focus:border-red-600" : "border-slate-300 focus:border-[#0979E4]"}`}
            />
            <span className="flex items-center gap-1 text-sm text-red-600">
              {errors?.name && (
                <>
                  <MdErrorOutline /> {errors?.name?.message}
                </>
              )}
            </span>
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="message">Message (required)</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              {...register("message")}
              className={`rounded border border-slate-300 px-3 py-2 focus:border-[#0979E4] focus:outline-0`}
            />
          </div>

          <button
            type="submit"
            className="flex w-40 items-center justify-center text-nowrap rounded bg-[#0254B1] px-10 py-3 font-medium text-white transition-all hover:bg-[#0254B1ea] hover:shadow-lg focus:outline-none focus:ring"
          >
            Send request
          </button>
        </form>
      </div>
      <div className="prose w-full md:w-1/2 lg:pt-5">
        <h3>How to upload sample image?</h3>
        <ul>
          <li>You can send us your free trial images for assessment.</li>
          <li>
            For file sizes larger than 25MB, please contact our support team at
            info@cutoutzone.com or use WeTransfer for uploads.
          </li>
          <li>
            Include any specific instructions or requirements along with your
            sample images.
          </li>
          <li>
            Our team will review your images promptly and provide feedback or
            recommendations.
          </li>
        </ul>
        <h3>Before you go...</h3>
        <ul>
          <li>
            Our services accommodate various image formats including RAW, JPEG,
            PNG, and more.
          </li>
          <li>
            You can request multiple types of image editing services
            simultaneously for your projects.
          </li>
          <li>
            Reach out to our customer support team if you have any questions or
            need assistance with your order.
          </li>
          <li>
            We offer quick turnaround times and flexible options to meet your
            project deadlines.
          </li>
          <li>
            Explore our portfolio and customer testimonials to see examples of
            our high-quality work and client satisfaction.
          </li>
        </ul>

        {/* <Image
          src="/hero/home-hero-girl-flip.png"
          alt="hero-girl"
          className=""
          height={630}
          width={630}
        /> */}
      </div>
    </section>
  );
};
export default TrialForm;
