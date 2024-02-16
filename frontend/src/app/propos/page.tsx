import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="grid md:grid-cols-6">
    <div className="md:col-start-1 md:col-end-2 md:flex md:justify-end">
      <Sidebar
        key={1}
        attributes="lg:col-span-1 md:flex md:justify-start p-6 shadow-md"
      />
    </div>

    <main className="px-16 py-6 overflow-hidden bg-gray-100 md:col-end-7 md:col-span-5">
      <div className="mt-10">
        <div className="flex justify-center">
          <Image
            alt="c"
            width={500}
            height={500}
            className="mb-10 h-auto max-w-xl rounded-lg dark:shadow-gray-800"
            src="/malechef.jpg"
          />
        </div>

        <p className="mb-3 font-light text-gray-500 dark:text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ex lorem, feugiat interdum diam at, laoreet imperdiet ligula. Mauris
          fringilla blandit nibh eleifend vehicula. Duis accumsan pulvinar
          vestibulum. Sed imperdiet elit eu leo luctus euismod. Nunc vitae
          purus posuere erat viverra cursus quis sed metus. In non aliquam
          justo, in consequat nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <p className="mb-10 font-light text-gray-500 dark:text-gray-900">
          Maecenas id nisl magna. Quisque volutpat et arcu non tristique. In
          fringilla sem erat. Nunc pulvinar elit arcu, eu posuere libero
          feugiat sed. Nulla facilisi. Integer nibh leo, tempus non turpis ac,
          lobortis viverra odio. In ut odio vitae sem sollicitudin commodo
          porttitor non urna. Suspendisse potenti. Integer sit amet fermentum
          tortor. In sollicitudin ex non metus convallis tristique. Curabitur
          sed purus sed quam pellentesque mattis vitae eu nunc. Cras metus
          nisi, ultricies sit amet malesuada sit amet, ultricies id nisi. Nam
          fringilla dui ut eros dictum, sit amet imperdiet purus rutrum.
          Aliquam felis quam, vehicula et enim sagittis, placerat rutrum
          tellus. Ut malesuada elementum quam, cursus pharetra lorem egestas
          ut.
        </p>

        {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Laptop
                </td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Laptop PC
                </td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Accessories
                </td>
                <td className="px-6 py-4">$99</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Google Pixel Phone
                </th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Phone
                </td>
                <td className="px-6 py-4">$799</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Apple Watch 5
                </th>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Wearables
                </td>
                <td className="px-6 py-4">$999</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-4 border-blueteal rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                What is Foody?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 font-light border border-b-2 border-blueteal dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-900 dark:text-gray-900">
                Praesent non velit eleifend, suscipit velit quis, rhoncus
                orci. Mauris a imperdiet felis. Suspendisse vehicula justo ut
                fringilla iaculis. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <p className="text-gray-900 dark:text-gray-900">
                Etiam sed diam tristique, interdum diam a, dignissim risus.
                Proin ut orci et felis posuere efficitur sed a velit. Maecenas
                libero sem, blandit efficitur massa a, tincidunt fringilla
                velit.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-2 border-blueteal focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Who creates the recipes?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 font-light border border-b-2 border-blueteal dark:border-gray-700">
              <p className="mb-2 text-gray-900 dark:text-gray-900">
                Donec nec pharetra nisl. Etiam purus libero, scelerisque a
                feugiat non, porta ut diam. Mauris a ipsum nec mi auctor
                hendrerit. Suspendisse malesuada dui quis elit varius semper.
                Vestibulum lobortis, nibh vel mollis pharetra, eros orci
                interdum mi, in dapibus quam sapien in purus. Aenean imperdiet
                nibh velit. Aenean vel congue est. Integer congue, nisl vitae
                pellentesque porta, purus velit blandit arcu, in auctor magna
                magna feugiat dui. Integer at facilisis metus, non commodo
                orci.
              </p>
              <p className="text-gray-900 dark:text-gray-900">
                Quisque sed pellentesque dui. Morbi et tincidunt felis, vel
                cursus sapien. Mauris cursus orci lectus, quis aliquet ante
                varius at. Cras aliquet blandit diam, a semper metus luctus
                quis. Etiam lacinia nibh turpis, suscipit congue felis iaculis
                ac. Curabitur euismod, magna ut commodo congue, libero ex
                interdum lorem, nec consequat nibh arcu et neque. Sed nec
                suscipit leo.
              </p>
            </div>
          </div>
        </div> */}
      </div>

      {/* <footer className="p-4 mt-6 bg-white sm:p-6 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </footer> */}
    </main>
  </div>
  );
}
