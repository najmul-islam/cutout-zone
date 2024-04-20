import Image from "next/image";

const CardSection = () => {
  return (
    <section className="py-10">
      <div className="container rounded bg-[#0254B1] px-4 py-10 text-white">
        <h1 className="mb-3 text-center text-2xl font-bold md:text-4xl">
          Fast and secure checkout
        </h1>
        <p className="text-center text-slate-100">
          We accept PayPal and most of the major credit/debit cards including
          Visa, MasterCard, JCB, Diners Club, and others.
        </p>

        <div className="flex flex-wrap justify-center gap-3 py-6">
          <Image
            src="/pricing/payoneer-card.webp"
            width={300}
            height={200}
            alt="payoneer-card"
            className="w-28"
          />

          <Image
            src="/pricing/american-express-card.webp"
            width={300}
            height={200}
            alt="payoneer-card"
            className="w-28"
          />

          <Image
            src="/pricing/visa-card.webp"
            width={300}
            height={200}
            alt="payoneer-card"
            className="w-28"
          />

          <Image
            src="/pricing/master-card.webp"
            width={300}
            height={200}
            alt="payoneer-card"
            className="w-28"
          />

          <Image
            src="/pricing/discover-card.webp"
            width={300}
            height={200}
            alt="payoneer-card"
            className="w-28"
          />

          <Image
            src="/pricing/paypal-card.webp"
            width={300}
            height={180}
            alt="payoneer-card"
            className="w-28"
          />
        </div>
      </div>
    </section>
  );
};
export default CardSection;
