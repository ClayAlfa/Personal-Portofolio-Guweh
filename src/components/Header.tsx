import Image from "next/image";

export default function Header() {
  return (
    <header className=" flex gap-x-8 flex-col md:flex-row">
      <Image
        className="size-[100px] rounded-full"
        src="/amorim.jpg"
        alt="picture of author"
        width={100}
        height={100}
      />
      <div>
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-50 mb-1.5">
          Ruben Amorim
        </h1>
        <h2 className="text-lg font-light text-zinc-500 dark:text-zinc-300">
          Pelatih Manchester United dan mantan pemain sepak bola
        </h2>
        <div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
          <span className="text-zinc-500 dark:text-zinc-300">
            Manchester United FC
          </span>
        </div>
      </div>
    </header>
  );
}
