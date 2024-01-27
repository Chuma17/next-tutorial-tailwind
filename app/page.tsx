import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen font-['Montserrat']">

      {/* First banner start */}
      <section className="mt-10 flex justify-evenly bg-fuchsia-50">
        <div className="mb-auto mt-auto flex-col">

          <div>
            <h1 className="section-headers text-5xl text-fuchsia-700">TRANSFORM YOUR FUTURE</h1>
            <h2 className="section-headers text-4xl mt-5">ENROLL NOW</h2>
            <div className=" mt-5 w-32 h-2 bg-fuchsia-700" />

          </div>

          <button className="border-2 border-fuchsia-800 p-3 flex px-10 rounded-lg mt-20">
            <span className="text-fuchsia-700 text-2xl section-headers">Watch video</span>
            <img className="size-6 mb-auto mt-auto ms-2" src="./Assets/Group 57.svg" alt="" />
          </button>
        </div>
        <img className="size-8 mt-auto ms-0 me-0" src="./Assets/Group 65.svg" alt="" />

        <img src="./Assets/male-futuristic-tech-student-PhotoRoom 1.png" alt="" />
      </section>
      {/* First banner end */}


      {/* Second banner start */}
      <section className="mt-20 flex">

        <div className="container ms-auto w-1/2 p-10 border-2 border-dashed border-fuchsia-400">
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vero temporibus illum distinctio.
            Qui accusantium maxime impedit quibusdam est architecto vel enim cumque exercitationem? Esse earum
            pariatur harum sunt omnis laboriosam saepe, fugiat optio quam nihil! Qui reprehenderit maiores consectetur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut, vitae ipsa recusandae porro consequuntur
            deserunt molestias? Autem temporibus eveniet architecto maxime magni explicabo 
          </p>
        </div>

        <h2 className="me-auto mt-auto mb-10 ms-5 italic text-lg text-fuchsia-700 font-bold">. CEO, Teckvion</h2>

      </section>
      {/* Second banner end */}


      {/* Third banner start */}
      <section className="mt-20 flex justify-evenly bg-fuchsia-200 p-20">

        <div className="flex">
          <img className="me-5" src="./Assets/Vector (8).svg" alt="" />

          <div className="text-fuchsia-700">
            <h1 className="section-headers text-4xl">BECOME A PARTNER TODAY</h1>
            <p className="font-bold text-xl">Support our community of future leaders</p>
          </div>
        </div>

        <button className="bg-fuchsia-700 text-white px-20 rounded-md shadow-2xl font-bold text-xl">Join us</button>

      </section>
      {/* Third banner end */}


      {/* Fourth banner start */}
      <section className="mt-20">
        <div className="h-96 w-full bg-cover bg-center relative">

          <img className="w-full absolute" src="./Assets/explore-academic-courses-upscaled 1.png" alt="" />

          <div className="relative text-white pt-28 px-32">
            <h1 className="text-5xl topic-headers">Explore our courses</h1>
            <p className="font-bold text-xl">Learn at your own pace</p>
          </div>
        </div>

      </section>
      {/* Fourth banner end */}


      {/* Fifth banner start */}
      <section className="mt-10">
        <div className="container w-2/3 p-20 bg-fuchsia-100 ms-auto me-auto shadow-2xl rounded-3xl">

          <div className="flex flex-col">
            <h1 className="text-4xl section-headers ms-20">Our Courses</h1>
            <div className="mb-10 ms-20 mt-3 w-24 h-2 bg-fuchsia-700" />
          </div>

          <div className="flex">

            <div className="w-44 h-44 border border-black ms-auto me-5 mb-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16" src="./Assets/Group (1).svg" alt="" />
                <p className="text-center">Artificial <br /> Intelligence</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16" src="./Assets/Group.svg" alt="" />
                <p className="text-center">Data <br /> Analytics</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-14">
                <img className="px-16" src="./Assets/Vector (1).svg" alt="" />
                <p className="text-center">Coding</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-14">
                <img className="px-16" src="./Assets/Vector 1.svg" alt="" />
                <p className="text-center">Forex</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-auto rounded-2xl">
              <div className="py-10">
                <img className="px-16" src="./Assets/Group.svg" alt="" />
                <p className="text-center">Data <br /> Analytics</p>
              </div>
            </div>

          </div>

          <div className="flex">

            <div className="w-44 h-44 border border-black ms-auto me-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16" src="./Assets/Group (1).svg" alt="" />
                <p className="text-center">Artificial <br /> Intelligence</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16" src="./Assets/Group.svg" alt="" />
                <p className="text-center">Data <br /> Analytics</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-14">
                <img className="px-16" src="./Assets/Vector (1).svg" alt="" />
                <p className="text-center">Coding</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-14">
                <img className="px-16" src="./Assets/Vector 1.svg" alt="" />
                <p className="text-center">Forex</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-auto rounded-2xl">
              <div className="py-10">
                <img className="px-16" src="./Assets/Group.svg" alt="" />
                <p className="text-center">Data <br /> Analytics</p>
              </div>
            </div>

          </div>

          <p className="mt-5 mr-20 text-right">The best courses, the best offers you can find</p>

        </div>
      </section>
      {/* Fifth banner end */}


      {/* Sixth banner start */}
      <section className="mt-20">
        <div className="h-96 w-full bg-cover bg-center relative">

          <img className="w-full absolute" src="./Assets/explore-academic-courses-upscaled (1) 1.png" alt="" />

          <div className="relative text-white pt-28 px-32">
            <h1 className="text-5xl topic-headers">Enjoy our services</h1>
            <p className="font-bold text-xl">Just the way you need it</p>
          </div>
        </div>
      </section>
      {/* Sixth banner end */}


      {/* Seventh banner start */}
      <section className="mt-20">
        <div className="container w-2/3 p-20 bg-fuchsia-50 ms-auto me-auto shadow-2xl rounded-3xl">

          <div className="flex flex-col">
            <h1 className="text-4xl section-headers ms-20">Our Services</h1>
            <div className="mb-10 ms-20 mt-3 w-24 h-2 bg-fuchsia-500" />
          </div>

          <div className="flex">

            <div className="w-44 h-44 border border-black ms-auto me-5 mb-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16 mb-2" src="./Assets/Group 30.svg" alt="" />
                <p className="text-center">Software <br /> Development</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16 mb-2" src="./Assets/Vector (7).svg" alt="" />
                <p className="text-center">Software/ <br /> Programming <br /> Training</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16 mb-2" src="./Assets/Group 38.svg" alt="" />
                <p className="text-center">Manual <br /> Software <br /> QA Testing</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16 mb-2" src="./Assets/Group 39.svg" alt="" />
                <p className="text-center">Database <br /> Management</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-auto rounded-2xl">
              <div className="py-10">
                <img className="px-16 mb-2" src="./Assets/Group (3).svg" alt="" />
                <p className="text-center">Forex & Algo <br /> Training</p>
              </div>
            </div>

          </div>

          <div className="flex">

            <div className="w-44 h-44 border border-black ms-auto me-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16 mb-2" src="./Assets/Vector (1).svg" alt="" />
                <p className="text-center">Front end <br /> development</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black me-5 rounded-2xl">
              <div className="py-10">
                <img className="px-16 mb-2" src="./Assets/Vector (1).svg" alt="" />
                <p className="text-center">Back end <br /> development</p>
              </div>
            </div>

            <div className="w-44 h-44 border border-black rounded-2xl me-auto">
              <div className="py-10">
                <img className="px-16 mb-2" src="./Assets/Vector (1).svg" alt="" />
                <p className="text-center">Website creation <br /> & management</p>
              </div>
            </div>


          </div>

          <p className="mt-5 mr-20 text-right">The best services, the best way it can be done</p>

        </div>
      </section>
      {/* Seventh banner end */}


      {/* Eight banner start */}
      <section className="mt-32">

        <div className="ms-72 mb-10">
          <h1 className="text-5xl topic-headers">Projects+</h1>
          <p className="font-extrabold">See what we've done so far...</p>
          <div className="mb-10 mt-3 w-24 h-2 bg-fuchsia-700" />

        </div>


        <div className="flex justify-evenly">
          <div>
            <img className="shadow-2xl rounded-2xl" src="./Assets/figma 1.png" alt="" />
            <div className="ms-7 mt-5">
              <h1 className="text-2xl topic-headers">Scholarsniche</h1>
              <p>Education app for Nigerian students</p>
            </div>

          </div>

          <div>
            <img className="shadow-2xl rounded-2xl" src="./Assets/6867754db5d6763d186b42ab9a8d81be 1.png" alt="" />
            <div className="ms-7 mt-5">
              <h1 className="text-2xl topic-headers">Tecknon</h1>
              <p>NFTs ART & everything in-between</p>
            </div>

          </div>

          <div>
            <img className="shadow-2xl rounded-2xl" src="./Assets/fitnext_animated 1.png" alt="" />
            <div className="ms-7 mt-5">
              <h1 className="text-2xl topic-headers">Toughy</h1>
              <p>Fitness web app + extensions</p>
            </div>

          </div>
        </div>

      </section>
      {/* Eight banner end */}


    </main>
  );
}
