import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineOpenInNew, MdOutlineZoomOutMap } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const PortfolioItem = ({ portfolio }) => {
  const { featured_media, title, slug, description } = portfolio;
  return (
    <div className="rounded border">
      <Dialog className="w-[500px]">
        <div className="relative overflow-hidden rounded-t bg-cover bg-no-repeat">
          <Image
            src={`/portfolio/${featured_media}`}
            alt={title}
            width={431}
            height={431}
            className="h-full w-full"
            placeholder="blur"
            blurDataURL={`/portfolio/${featured_media}`}
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center gap-3 overflow-hidden bg-[#097ae4] opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center gap-3 overflow-hidden bg-transparent opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            <DialogTrigger asChild>
              <button
                aria-label={slug}
                className="rounded-full bg-[#0254B1] p-3 text-2xl text-white transition-colors duration-300 ease-in-out hover:bg-[#097ae4ea]"
              >
                <MdOutlineZoomOutMap />
              </button>
            </DialogTrigger>
            <Link
              className="rounded-full bg-[#0254B1] p-3 text-2xl text-white transition-colors duration-300 ease-in-out hover:bg-[#097ae4ea]"
              href={`/portfolio/${slug}`}
              aria-label={slug}
            >
              <MdOutlineOpenInNew />
            </Link>
          </div>
        </div>

        <DialogContent className="max-w-md rounded md:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">{title}</DialogTitle>
            <DialogDescription className="text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
          <Image
            src={`/portfolio/${featured_media}`}
            alt={title}
            width={500}
            height={250}
            className="h-full w-full"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                aria-label={slug}
                variant="secondary"
                className="w-full"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <h2
        title={title}
        className="rounded-b bg-[#0254B1] py-5 text-center font-semibold text-white"
      >
        {title}
      </h2>
    </div>
  );
};
export default PortfolioItem;
