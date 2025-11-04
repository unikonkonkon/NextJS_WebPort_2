'use client';

import { motion } from 'framer-motion';
import { useState, memo, useMemo, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import WorkProjectCard from './WorkProjectCard';

function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('personal');

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  // Memoize personal projects data to prevent recalculation
  // Sample data only - replace with your actual projects
  const personalProjects = useMemo(() => [
    {
      title: '📱 Sample Project 1',
      role: 'Full Stack Developer',
      description: 'This is a sample project description. Replace this with your actual project description.',
      image: 'https://picsum.photos/400/300',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Sample Tech'],
      githubUrl: 'https://github.com/example/sample-project',
      demoUrl: 'https://sample-project.vercel.app/',
      featured: true,
      colorScheme: 'orange' as const,
    },
    {
      title: '🎨 Sample Project 2',
      role: 'Front-End Developer',
      description: 'This is a sample project description. Replace this with your actual project description.',
      image: 'https://picsum.photos/400/300',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      githubUrl: 'https://github.com/example/sample-project-2',
      demoUrl: 'https://sample-project-2.vercel.app/',
      featured: true,
      colorScheme: 'blue' as const,
    },
    {
      title: '🚀 Sample Project 3',
      role: 'Full Stack Developer',
      description: 'This is a sample project description. Replace this with your actual project description.',
      image: 'https://picsum.photos/400/300',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/example/sample-project-3',
      demoUrl: 'https://sample-project-3.vercel.app/',
      colorScheme: 'yellow' as const,
    },
    {
      title: '💻 Sample Project 4',
      role: 'Front-End Developer',
      description: 'This is a sample project description. Replace this with your actual project description.',
      image: 'https://picsum.photos/400/300',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
      githubUrl: 'https://github.com/example/sample-project-4',
      demoUrl: 'https://sample-project-4.vercel.app/',
      colorScheme: 'red' as const,
    },
    {
      title: '📊 Sample Project 5',
      role: 'Front-End Developer',
      description: 'This is a sample project description. Replace this with your actual project description.',
      image: 'https://picsum.photos/400/300',
      technologies: ['React', 'TypeScript', 'Chart.js'],
      githubUrl: 'https://github.com/example/sample-project-5',
      demoUrl: 'https://sample-project-5.vercel.app/',
      colorScheme: 'green' as const,
    },
  ], []);

  // Memoize work projects data to prevent recalculation
  // Sample data only - replace with your actual work projects
  const workProjects = useMemo(() => [
    {
      title: 'Sample Work Project 1',
      role: 'Full Stack Developer',
      description: 'This is a sample work project description. Replace this with your actual work project description.',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
      features: [
        'Sample feature 1: Description of what was implemented',
        'Sample feature 2: Description of what was implemented',
        'Sample feature 3: Description of what was implemented',
        'Sample feature 4: Description of what was implemented',
      ],
      icon: '📊',
      colorScheme: 'yellow' as const,
    },
    {
      title: 'Sample Work Project 2',
      role: 'Backend Developer',
      description: 'This is a sample work project description. Replace this with your actual work project description.',
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'Docker'],
      features: [
        'Sample feature 1: Description of what was implemented',
        'Sample feature 2: Description of what was implemented',
        'Sample feature 3: Description of what was implemented',
      ],
      icon: '🚀',
      colorScheme: 'purple' as const,
      demoUrl: 'https://sample-work-project.vercel.app/',
    },
    {
      title: 'Sample Work Project 3',
      role: 'Full Stack Developer',
      description: 'This is a sample work project description. Replace this with your actual work project description.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Express', 'TailwindCSS'],
      features: [
        'Sample feature 1: Description of what was implemented',
        'Sample feature 2: Description of what was implemented',
      ],
      icon: '💬',
      colorScheme: 'green' as const,
    },
    {
      title: 'Sample Work Project 4',
      role: 'Front-End Developer',
      description: 'This is a sample work project description. Replace this with your actual work project description.',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Redux'],
      features: [
        'Sample feature 1: Description of what was implemented',
        'Sample feature 2: Description of what was implemented',
        'Sample feature 3: Description of what was implemented',
        'Sample feature 4: Description of what was implemented',
        'Sample feature 5: Description of what was implemented',
      ],
      icon: '🚁',
      colorScheme: 'blue' as const,
    },
  ], []);
  //
  return (
    <motion.section
      id='projects'
      className='py-24 bg-gradient-to-b'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.07 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='max-w-8xl mx-auto px-8'>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center' style={{ color: 'var(--text-primary)' }}>Projects</h2>

        {/* Tab Navigation - Modern Design */}
        <div className='flex justify-center mb-12'>
          <div className='flex bg-opacity-10 backdrop-blur-lg rounded-2xl px-3 py-2 border border-opacity-20 gap-2'
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <button
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${activeTab === 'personal'
                ? 'text-white shadow-lg transform scale-105'
                : 'text-gray-400 hover:text-gray-200'
              }`}
              style={{
                backgroundColor: activeTab === 'personal' ? 'var(--accent-color)' : 'transparent',
              }}
              onClick={() => handleTabChange('personal')}
            >
              Personal Projects
            </button>
            <button
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${activeTab === 'projects'
                ? 'text-white shadow-lg transform scale-105'
                : 'text-gray-400 hover:text-gray-200'
              }`}
              style={{
                backgroundColor: activeTab === 'projects' ? 'var(--accent-color)' : 'transparent',
              }}
              onClick={() => handleTabChange('projects')}
            >
              Work Projects
            </button>
          </div>
        </div>

        {/* Personal Projects Content - Grid Layout */}
        {activeTab === 'personal' && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                role={project.role}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                featured={project.featured}
                delay={index * 0.1}
                colorScheme={project.colorScheme}
              />
            ))}
          </div>
        )}

        {/* Work Projects Content - Grid Layout */}
        {activeTab === 'projects' && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {workProjects.map((project, index) => (
              <WorkProjectCard
                key={index}
                title={project.title}
                role={project.role}
                description={project.description}
                technologies={project.technologies}
                features={project.features}
                icon={project.icon}
                delay={index * 0.1}
                colorScheme={project.colorScheme}
                demoUrl={project.demoUrl}
              />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(ProjectsSection);