import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>

      <h1 className="text-6xl font-extrabold"> 
        Hi, ich bin {""}

        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> 
          Franz
        </span>
        !
      </h1>

      <p className="mt-3 text-gray-600">
        Das ist der zentrale Hub für meine Projekte und Socials
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        Meine Projekte
      </h2>



      <div className="mt-2.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (

              <Link 
                key={project._id} 
                href={`/projects/${project.slug}`}
                target="_blank"
                className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 transition-all duration-200"
              >
                
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={750}
                    height={300}
                    className="object-cover rounded-lg border border-gray-500"
                  />
                )}

                <div className="mt-1 font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> 
                  
                  {project.name} 
                  
                </div>
              
              </Link>
            ))}
      </div>



    </div>
  );
}

