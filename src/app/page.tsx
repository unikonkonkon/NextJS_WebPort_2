'use client';

import { useEffect, useRef, useState, useCallback, memo } from 'react';
import './css/cardSkills.css';
import './css/backgroud.css';
import './css/switchTheme.css';
import './css/contact.css';
import './css/ContactSection.css';
import './css/buttonResume.css';

// Import components
import Navigation from '@/components/Navigation';
import Background from '@/components/Background';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectSection/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ImgWorkSection from '@/components/ImgWorkSection';

function Home() {
  const [theme, setTheme] = useState('dark');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Memoized mouse move handler to prevent unnecessary re-renders
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Memoized theme toggle function
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  // Memoized smooth scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <div 
      className='min-h-screen' 
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
      ref={sectionRef}
    >
      {/* Navigation Bar */}
      <Navigation
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />

      {/* Background */}
      <Background />

      {/* Hero Section */}
      <HeroSection theme={theme} scrollToSection={scrollToSection} />

      {/* Skills & Technologies Section */}
      <SkillsSection theme={theme} />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section with Tabs */}
      <ProjectsSection />

      {/* Img Work Section */}
      <ImgWorkSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Interactive Cursor Effect */}
      <div
        className='cursor-glow'
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Home);
