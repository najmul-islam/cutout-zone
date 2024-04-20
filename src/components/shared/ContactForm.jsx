"use client";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {};

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex w-full flex-col">
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", {
            required: "Name is required",
          })}
          className={`rounded border  px-3 py-2  focus:outline-0 ${errors?.name ? "border-red-600 focus:border-red-600" : "border-slate-300 focus:border-[#0979E4]"}`}
          placeholder="Name (required)"
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
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", { required: "Email is required" })}
          className={`rounded border  px-3 py-2  focus:outline-0 ${errors?.name ? "border-red-600 focus:border-red-600" : "border-slate-300 focus:border-[#0979E4]"}`}
          placeholder="Email (required)"
        />

        <span className="flex items-center gap-1 text-sm text-red-600">
          {errors?.name && (
            <>
              <MdErrorOutline /> {errors?.email?.message}
            </>
          )}
        </span>
      </div>

      <input
        type="text"
        id="subject"
        name="subject"
        {...register("subject")}
        className="rounded border border-slate-300 px-3 py-2  focus:border-[#0979E4] focus:outline-0"
        placeholder="Subject"
      />

      <textarea
        id="message"
        name="message"
        rows={6}
        {...register("message")}
        className="rounded border border-slate-300 px-3 py-2  focus:border-[#0979E4] focus:outline-0"
        placeholder="Write a message here"
      />

      <button
        type="submit"
        className="flex w-40 items-center justify-center text-nowrap rounded bg-[#0254B1] px-10 py-3 font-medium text-white transition-all hover:bg-[#0254B1ea] hover:shadow-lg focus:outline-none focus:ring"
      >
        Send message
      </button>
    </form>
  );
};
export default ContactForm;
