"use client";
import { siteConfig } from "@/content/siteConfig";
import Image from "next/image";
export default function Solution() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mx-auto flex flex-col justify-center items-center bg-green-300/10 rounded-full px-3 text-sm font-medium text-green-600 w-50 h-10">
          {siteConfig.solution.badge}
        </h2>

        <p className="lg:text-3xl font-bold text-gray-900 mt-5 text-2xl text-center">
          {siteConfig.solution.titre}
        </p>
        <p className="text-center text-md lg:text-gray-600 mt-5">
          {siteConfig.solution.description}
        </p>
      </div>
      <div className="flex justify-between flex-col lg:flex-row items-center px-10 mt-10 lg:mt-14 gap-10 ">
        <div className=" lg:px-12">
          <Image
            src="/Images/Sedap.jpg"
            width={500}
            height={700}
            alt="Solution"
            className="rounded-2xl border border-gray-200 shadow-sm"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 max-w-xl mt-5 lg:mt-0 lg:mr-16 ">
          {siteConfig.solution.services.map((service, index) => (
            <div
              key={index}
              className="mb-6 border border-gray-200 rounded-xl p-4 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 "
            >
              <h3 className="text-lg font-semibold text-green-600">
                {service.titre}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{service.sous}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
