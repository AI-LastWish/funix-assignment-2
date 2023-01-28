import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Example({ open, setOpen }) {
  const defaultSearch =
    window.location.search.substring(7) !== ""
      ? window.location.search.substring(7)
      : "";
  const [search, setSearch] = useState(defaultSearch);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="flex flex-1 items-center justify-center px-2 lg:justify-end">
                    <div className="w-full max-w-lg lg:max-w-xs">
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <MagnifyingGlassIcon
                            className="h-8 w-8 text-gray-400 mr-4"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="border-none block w-full rounded-md bg-transparent py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          type="search"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between border-b border-indigo-500 py-6 lg:border-none">
                    <div className="flex items-center">
                      <div className="hidden lg:block">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                          onClick={() => setSearch("")}
                        >
                          Reset
                        </button>
                      </div>
                      <div className="hidden lg:block pl-4">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-transparent bg-[#00bbec] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={() =>
                            window.location.assign(`/search?query=${search}`)
                          }
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
