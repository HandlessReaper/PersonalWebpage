import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Project({ params }: { params: Promise<{ project: string }> }) {

    const { project: slug } = await params;

    const project = await getProject(slug);
    
    return (
        <div>
            <header 
                className="flex items-center justify-between"
            >
                <h1 
                    className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow-2xl font-extrabold"
                >
                    {project.name}
                </h1> 

                <a 
                    href={project.url} 
                    title="View Project" 
                    rel="noopener noreferrer" target="_blank" 
                    className="bg-gray-100 text-gray-500 px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap hover:bg-pink-500 hover:text-pink 100 transition-all duration-200"
                >
                    View Project
                </a>
            </header>

            {/* Content */}
            <div className="text-lg text-gray-700 mt-5">   
                <PortableText value={project.content} />
            </div>

            {/* Image */}
            <Image
                src={project.image}
                alt={project.name}
                width={1920}
                height={1080}
                className="mt-10 border-2 border-gray-700 rounded-xl object-cover "
            />
        </div>
    );

}

