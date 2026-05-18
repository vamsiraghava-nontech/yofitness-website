export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Yo! Fitness
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-lime-300 font-semibold">
          Premium workout experience building soon in Hyderabad.
        </p>

        {/* <p className="mt-4 text-gray-300">
          Transformation-focused coaching.
        </p> */}

        <div className="mt-10 text-sm text-gray-400">
          Vamsi Raghava Yenumula
        </div>
      </section>
    </main>
  );
}