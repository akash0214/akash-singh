import React from 'react';
import lancet from '../assets/lancet.webp';

function Projects() {
    return (
        <div className='max-w-[100vw] h-[100vh]'>
            <div className='py-8'>
                <h2 className='uppercase text-3xl font-semibold text-center'>The Projects</h2>
            </div>
            <div className='h-3/4 w-3/4 rounded-3xl mx-auto flex bg-black hover:scale-105 hover:shadow-xl transition-all duration-300'>
                <div className='w-1/2 text-white flex items-center justify-center'>
                    <div>
                        <p className='uppercase font-medium text-center text-2xl animate-pulse'>lancet architects</p>
                        <p className='uppercase animate-bounce text-sm text-center'>front end project</p>
                        <p className='text-center mt-5'>
                            This was a front end freelance project for an architect firm. In this project we used
                            NextJs, Tailwind CSS, Javascript and AOS animation.
                        </p>
                    </div>
                </div>
                <div className='w-1/2 h-full px-5 flex items-center'>
                    <a href="https://lancetarchitects.com/" target='_blank' className='animate-pulse'>
                        <img src={lancet} alt="Lancet Architects" />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Projects