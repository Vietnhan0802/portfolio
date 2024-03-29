import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Hi, my name is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Nhan Vo Viet
            </span>
          </h1>

          <p className="text-gray-200 hidden md:block">
            Hello! I&apos;m Nhan, an enthusiastic and innovative fresher with
            a major in .NET technology. I am skilled in both front-end and
            back-end development, ready to tackle challenges across the full
            stack. My education and projects have equipped me with a solid
            foundation in creating seamless and efficient digital solutions.
            Outside of coding, I&apos;m passionate about sports, particularly
            badminton and swimming, which keep me energized and inspired. Dive
            into my portfolio to discover my potential and feel free to connect
            for any projects or opportunities.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-4 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-project"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-4 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My project
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-4 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-4 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>
        <Link
          href="/my-project"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-4 text-lg text-white max-w-[200px]"
        >
          My project
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-4 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </main>
  );
}
