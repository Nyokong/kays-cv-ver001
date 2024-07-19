import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    {/* Intro tab */}
    <div className="md:container md:mx-auto px-4 group 
                    flex items-center">
        <div className="overflow-hidden relative w-96 mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
          <Image
              src="/ing 09.png"
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
              width={200}
              height={200}
              alt="Profile Image - Author"
          />

          <div className="flex flex-col py-5 pl-24">
            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Khotso Nyokong</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Junior Software Engineer</span>
          </div>
        </div>
        
    </div>

    <div>

    </div>


    <div className="flex md:container md:mx-auto px-4 flex-col
    items-center justify-between">
        <h1 className="text-3xl font-bold py-4">Contact Me | Below</h1>
        <form>
          <label className="peer-invalid:text-red-500">
            <span className="text-2xl block text-sm font-medium text-slate-700 py-5">Email</span>
            <input type="email" className="peer-focus" placeholder="Enter Your Email"/>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
        </form>
      </div>
    </main>
  );
}
