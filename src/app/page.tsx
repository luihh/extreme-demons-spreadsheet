export const dynamic = 'force-dynamic';

import Table from './components/Table';

export default async function Home() {
  return (
    <>
      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>
      <main className="px-4">
        <section className="section py-8 md:py-16 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
          <div className="max-w-x1">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
              Hey, I&apos;m Luihh!
            </h1>
            <p className="mt-6 text-xl text-gray-800 dark:text-gray-300">
              And this is a table of all the Extreme Demons that I&apos;ve
              completed or I&apos;m planning to beat!
            </p>
          </div>
        </section>
        <section className="section pb-8 scroll-m-20 w-full mx-auto container flex justify-center">
          <Table />
        </section>
      </main>
    </>
  );
}
