import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative z-0 h-52 bg-[#0979E4] bg-cover bg-center bg-no-repeat">
      <img
        src="/contact/Page-Contact-Subheader.jpg"
        alt="bg-img"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0979E4] opacity-80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="mb-3 text-4xl font-semibold text-[#eeeeee]">Contact</h2>
        <Breadcrumb className="text-white">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-[#EEEEEE] hover:text-white">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-white">
                Contact
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};
export default HeroSection;
