import Link from "next/link";

const PricingPlanSection = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-20">
        <div>
          <h1 className="mb-6 text-center text-2xl font-bold text-[#0254B1] md:text-4xl">
            Choose your perfect pricing plan
          </h1>
          <p className="m-auto text-center md:w-3/4 lg:w-2/4">
            CutOut Zone service provider super quality and lowest rate photo
            editing service. Where you can begin your Natural & Exceptional
            Photo Editing Journey with a group. But we will give a discount for
            images editing.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto text-center md:w-full">
            <thead className="border bg-[#0254B1] text-center text-lg text-white md:text-2xl">
              <tr>
                <th scope="col" className="border px-6 py-3">
                  Service
                </th>
                <th scope="col" className="border px-6 py-3">
                  Basic
                </th>
                <th scope="col" className="border px-6 py-3">
                  Medium
                </th>
                <th scope="col" className="border px-6 py-3">
                  Complex
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="shadow-slate-50 hover:shadow">
                <th className="border px-6 py-4 font-medium text-gray-900">
                  Clipping path
                </th>
                <td className="border px-6 py-4">$0.39</td>
                <td className="border px-6 py-4">$0.99</td>
                <td className="border px-6 py-4">$2.50</td>
              </tr>

              <tr className="border bg-gray-50 hover:shadow">
                <td className="border px-6 py-4 font-medium">
                  Shadow creation
                </td>
                <td className="border px-6 py-4">$0.49</td>
                <td className="border px-6 py-4">$1.00</td>
                <td className="border px-6 py-4">$2.00</td>
              </tr>

              <tr className="border hover:shadow">
                <th className="border px-6 py-4 font-medium">Image masking</th>
                <td className="border px-6 py-4">$0.75</td>
                <td className="border px-6 py-4">$1.49</td>
                <td className="border px-6 py-4">$3.00</td>
              </tr>

              <tr className="border bg-gray-50 hover:shadow">
                <th
                  scope="row"
                  className="border px-6 py-4 font-medium text-gray-900"
                >
                  Ghost mannequin
                </th>
                <td className="border px-6 py-4">$0.80</td>
                <td className="border px-6 py-4">$1.50</td>
                <td className="border px-6 py-4">$3.00</td>
              </tr>

              <tr className="border hover:shadow">
                <th className="border px-6 py-4 font-medium text-gray-900">
                  Jewelry retouching
                </th>
                <td className="border px-6 py-4">$3.00</td>
                <td className="border  px-6 py-4">$5.00</td>
                <td className="border px-6 py-4">$7.00</td>
              </tr>

              <tr className="border bg-gray-50 hover:shadow">
                <th
                  scope="row"
                  className="border px-6 py-4 font-medium text-gray-900"
                >
                  Color correction
                </th>
                <td className="border px-6 py-4">$0.79</td>
                <td className="border px-6 py-4 ">$1.49</td>
                <td className="border px-6 py-4">$2.49</td>
              </tr>

              <tr className="border hover:shadow">
                <th
                  scope="row"
                  className="whitespace-nowrap border px-6 py-4 font-medium text-gray-900"
                >
                  Photo retouching
                </th>
                <td className="border px-6 py-4">$1.00</td>
                <td className="border px-6 py-4 ">$1.50</td>
                <td className="border px-6 py-4">$2.50</td>
              </tr>

              <tr className="border bg-gray-50 hover:shadow">
                <th
                  scope="row"
                  className="whitespace-nowrap border px-6 py-4 font-medium text-gray-900"
                >
                  Headshot retouching
                </th>
                <td className="border px-6 py-4">$2.00</td>
                <td className="border px-6 py-4 ">$3.00</td>
                <td className="border px-6 py-4">$5.00</td>
              </tr>

              <tr className="border hover:shadow">
                <th
                  scope="row"
                  className="border px-6 py-4 font-medium text-gray-900"
                >
                  Newborn photo retouching
                </th>
                <td className="border px-6 py-4">$2.00</td>
                <td className="border px-6 py-4 ">$3.00</td>
                <td className="border px-6 py-4">$5.00</td>
              </tr>

              <tr className="border border-gray-200 bg-gray-50 hover:shadow">
                <th
                  scope="row"
                  className="border px-6 py-4 font-medium text-gray-900"
                >
                  Beauty retouching
                </th>
                <td className="border px-6 py-4">$2.49</td>
                <td className="border px-6 py-4 ">$3.99</td>
                <td className="border px-6 py-4">$5.99</td>
              </tr>

              <tr className="border border-gray-200 hover:shadow">
                <th
                  scope="row"
                  className="border px-6 py-4 font-medium text-gray-900"
                >
                  E-commerce image solution
                </th>
                <td className="border px-6 py-4">$0.59</td>
                <td className="border px-6 py-4">$1.49</td>
                <td className="border px-6 py-4">$2.49</td>
              </tr>

              <tr className="border border-gray-200">
                <th
                  scope="row"
                  className="border px-6 py-4 font-medium text-gray-900"
                ></th>
                <td className="border px-6 py-4">
                  <Link
                    href="/free-trial"
                    aria-label="free-trial"
                    className="text-nowrap rounded bg-[#0254B1] px-3 py-2 text-white hover:bg-[#097ae4ec] hover:shadow-lg"
                  >
                    Order Now
                  </Link>
                </td>
                <td className="border px-6 py-4 ">
                  <Link
                    href="/free-trial"
                    aria-label="free-trial"
                    className="text-nowrap rounded bg-[#0254B1] px-3 py-2 text-white hover:bg-[#097ae4ec] hover:shadow-lg"
                  >
                    Order Now
                  </Link>
                </td>
                <td className="border px-6 py-4">
                  <Link
                    href="/free-trial"
                    aria-label="free-trial"
                    className="text-nowrap rounded bg-[#0254B1] px-3 py-2 text-white hover:bg-[#097ae4ec] hover:shadow-lg"
                  >
                    Order Now
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default PricingPlanSection;
