import React from 'react';
import { Link } from 'react-router';

const ProjectsCard = ({project}) => {
    console.log(project);
    return (
        <div>
            <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-stone-950 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,163,89,0.15)] border border-stone-800/60">
      
      {/* Image Container with Zoom Effect */}
      <div className="relative h-72 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/40 z-10" />
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Dynamic Premium Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <span className="backdrop-blur-md bg-stone-900/60 text-amber-400 border border-amber-500/30 text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-md shadow-lg">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
            {project.tag}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 relative z-20">
        
        {/* Location & Title */}
        <div className="mb-4">
          <div className="flex items-center gap-1 text-xs text-stone-400 font-medium tracking-wide mb-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-amber-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {project.location}
          </div>
          <h3 className="text-xl font-serif text-stone-100 tracking-wide font-medium group-hover:text-amber-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        {/* Property Features Grid */}
        <div className="grid grid-cols-3 gap-2 py-3.5 my-4 border-y border-stone-800/80 text-stone-400 text-xs font-light">
          <div className="flex flex-col items-center justify-center border-r border-stone-800/60 py-1">
            <span className="text-stone-200 font-medium text-sm mb-0.5">{project.beds}</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">Beds</span>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-stone-800/60 py-1">
            <span className="text-stone-200 font-medium text-sm mb-0.5">{project.baths}</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">Baths</span>
          </div>
          <div className="flex flex-col items-center justify-center py-1">
            <span className="text-stone-200 font-medium text-sm mb-0.5">
              {project.sqft ? project.sqft.split(' ')[0] : ''}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">Sq Ft</span>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.15em] text-stone-500 font-semibold">Investment</span>
            <span className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-amber-200 to-amber-400">
              {project.price}
            </span>
          </div>
          
          {/* Elegant Circular Arrow Button */}
          <Link to={`projects/${project.id}`}  className="relative flex items-center justify-center w-12 h-12 rounded-full border border-amber-500/30 bg-stone-900 text-amber-400 overflow-hidden transition-all duration-300 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:border-amber-500 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link >
        </div>

      </div>
    </div>
        </div>
    );
};

export default ProjectsCard;