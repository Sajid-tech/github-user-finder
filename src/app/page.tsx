"use client";
import Image from "next/image";
import DarkAndLightBtn from "./components/DarkAndLightBtn";
import SearchAndBtn from "./components/SearchAndBtn";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-stone-100 p-1.2 sm:p-4 pt-10 sm:pt-12 transition-all dark:bg-slate-900">
      {/* container  */}
      <div className="border mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">GitFinder</p>
          <DarkAndLightBtn />
        </section>
        {/* search and main section  */}
        <section className="flex flex-col gap-6">
          {/* search btn  */}
          <SearchAndBtn />
          <main className="flex w-full felx-col gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8 min-h-[200px]">
            <section>
              {/* user image  */}
              <Image
                src={"https://avatars.githubusercontent.com/u/80850448?v=4"}
                alt=""
                className=" h-20 w-20 rounded-full"
                width={200}
                height={200}
              />
              <section>
                <div>
                  {/* user name  */}
                  <h1>Sajid Hussain</h1>
                  {/* user id  */}
                  <Link
                    className="text-blue-500 hover:underline text-sm transition-all"
                    href={"#"}
                  >
                    @Sajid-tech
                  </Link>
                </div>
                {/* joined date  */}
              </section>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
}
