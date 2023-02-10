import Head from 'next/head';
import { Inter } from '@next/font/google';
import CardResource from '@/src/components/CardResource';
import Image from 'next/image';
import { Card } from 'flowbite-react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ElvisDev Resources</title>
        <meta
          name="description"
          content="My selection of useful software tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-y-4 overflow-x-hidden">
        <aside className="flex flex-col gap-y-4 px-4 bg-blacklight py-4 rounded-br rounded-bl shadow">
          <div>
            <h1 className=" text-center text-main-50 text-3xl font-bold">
              Elvis<span className=" text-main-400">Dev</span>
            </h1>
            <p className="text-center font-light text-main-50">Resources</p>
          </div>
          <div>
            <nav>
              <ul className="flex justify-between text-main-50 max-w-sm mx-auto">
                <li>💻 Frontend</li>
                <li>💾 Backend</li>
                <li>🎨 Design</li>
              </ul>
            </nav>
          </div>
        </aside>
        <div className="px-4 flex flex-col gap-y-10">
          <section className="flex flex-col gap-y-4">
            <h2 className="text-2xl text-main-50 font-bold">
              Last <span className="text-main-400">Frontend</span> Resources
            </h2>

            <div className="flex overflow-x-scroll gap-x-3">
              <CardResource
                title="React"
                imageLink=""
                description="A Javascript framework which allow us to build app faster and solid."
              />
              <CardResource
                title="React"
                imageLink=""
                description="A Javascript framework which allow us to build app faster and solid."
              />
              <CardResource
                title="React"
                imageLink=""
                description="A Javascript framework which allow us to build app faster and solid."
              />
            </div>
          </section>

          <section className="flex flex-col gap-y-4 ">
            <h2 className="text-2xl text-main-50 font-bold">
              Last <span className="text-main-400">Backend</span> Resources
            </h2>
            <div className="flex overflow-x-scroll gap-x-3">
              <CardResource
                title="Express"
                imageLink=""
                description="A Javascript framework which allow us to build app faster and solid."
              />
              <CardResource
                title="React"
                imageLink=""
                description="A Javascript framework which allow us to build app faster and solid."
              />
              <CardResource
                title="React"
                imageLink=""
                description="A Javascript framework which allow us to build app faster and solid."
              />
            </div>
          </section>

          <section className="flex flex-col gap-y-4 ">
            <h2 className="text-2xl text-main-50 font-bold">
              Last <span className="text-main-400">Design</span> Resources
            </h2>
            <div className="flex overflow-x-scroll gap-x-3">
              <CardResource
                title="Express"
                imageLink=""
                description="A Javascript framework which allow us to build app faster and solid."
              />
              <CardResource
                title="React"
                imageLink=""
                description="A Javascript framework which allow us to build app faster and solid."
              />
              <CardResource
                title="React"
                imageLink=""
                description="A Javascript framework which allow us to build app faster and solid."
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
