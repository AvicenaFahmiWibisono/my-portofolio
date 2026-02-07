'use client';

import { translations } from '../data';
import { Mail, MapPin, Linkedin, Github, Globe, Printer } from 'lucide-react';

export default function CV() {
  const t = translations.en;
  
  // Data manually synchronized with Experience.tsx
  const experiences = [
    {
      role: 'System Administrator & Founder',
      company: 'CenaHost',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      description: [
        'Built multi-service hosting business serving web, game server, and bot hosting',
        'Managed Linux VPS infrastructure, cPanel/WHM, and Pterodactyl panels',
        'Implemented automated billing system with WHMCS integration',
        'Provided 24/7 technical support for 235+ community members'
      ]
    },
    {
      role: 'IT Staff - IT SUPPORT',
      company: 'PT Megalopolis Manunggal Industrial Development',
      period: 'Mar 2023 - Present',
      location: 'Cikarang Barat, Bekasi',
      description: [
        'Developed web-based network monitoring system for industrial area management',
        'Managed fiber optic infrastructure and CCTV systems across 4 locations',
        'Implemented IP scanning and real-time device monitoring features',
        'Maintained 99.9% network uptime for critical infrastructure'
      ]
    },
    {
      role: 'IT Support Intern',
      company: 'Sugity Creatives',
      period: '2022',
      location: 'Cikarang, Indonesia',
      description: [
        'Provided technical support for hardware and software issues',
        'Assisted in network maintenance and troubleshooting',
        'Maintained IT asset inventory and documentation'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Information Systems',
      school: 'President University',
      period: '2024 - Present',
      location: 'Cikarang, Indonesia',
      description: 'Currently in 5th Semester. Active in Computing Faculty student activities. Focusing on Cloud Computing and Enterprise Systems.'
    },
    {
      degree: 'Industrial Electronics',
      school: 'SMK Mitra Industri MM2100',
      period: '2020 - 2023',
      location: 'Cikarang, Indonesia',
      description: 'Graduated with expertise in IoT systems, microcontroller programming (Arduino), and industrial automation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-zinc-900 font-sans flex justify-center print:bg-white print:h-auto print:block">
        {/* CV Container - A4 Width */}
        <div className="w-full md:max-w-[210mm] bg-white relative shadow-2xl md:my-10 print:shadow-none print:m-0 print:w-full print:max-w-none p-8 md:p-12 print:p-[20mm] print:text-black">
            
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 uppercase tracking-wide mb-3">AVICENA FAHMI</h1>
                
                <div className="flex flex-wrap justify-center items-center gap-x-3 text-[13px] text-zinc-700">
                    <span className="flex items-center">
                        Cikarang, Indonesia
                    </span>
                    <span className="text-zinc-400">|</span>
                    <a href="mailto:avicenafw@gmail.com" className="hover:text-blue-700 transition-colors">
                        avicenafw@gmail.com
                    </a>
                    <span className="text-zinc-400">|</span>
                    <a href="https://linkedin.com/in/avicena-fahmi-785679208" className="hover:text-blue-700 transition-colors">
                        linkedin.com/in/avicena-fahmi
                    </a>
                    <span className="text-zinc-400">|</span>
                    <a href="https://github.com/AvicenaFahmiWibisono" className="hover:text-blue-700 transition-colors">
                        github.com/AvicenaFahmiWibisono
                    </a>
                </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
                 <h2 className="text-sm font-bold text-blue-800 uppercase border-b border-zinc-300 mb-2 pb-1 tracking-wider">
                    PROFESSIONAL SUMMARY
                </h2>
                <p className="text-justify text-[13.5px] leading-relaxed text-zinc-800">
                    {t.hero.description}. {t.about.skillsDesc} Passionate about building scalable infrastructure and efficient web solutions. Proven track record in system administration, network management, and full-stack development.
                </p>
            </div>

            {/* Experience Section */}
            <section className="mb-6">
                <h2 className="text-sm font-bold text-blue-800 uppercase border-b border-zinc-300 mb-3 pb-1 tracking-wider">
                    WORK EXPERIENCE
                </h2>
                <div className="space-y-4">
                    {experiences.map((exp, index) => (
                        <div key={index} className="break-inside-avoid">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-zinc-900 text-[15px]">
                                    {exp.role}
                                </h3>
                                <span className="text-xs text-zinc-600 font-medium whitespace-nowrap">{exp.period}</span>
                            </div>
                            <div className="text-[13px] font-semibold text-zinc-700 mb-1">
                                {exp.company} <span className="font-normal text-zinc-500 italic">| {exp.location}</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="text-[13.5px] text-zinc-700 leading-snug pl-1 text-justify">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-6">
                <h2 className="text-sm font-bold text-blue-800 uppercase border-b border-zinc-300 mb-3 pb-1 tracking-wider">
                    EDUCATION
                </h2>
                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div key={index} className="break-inside-avoid">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-zinc-900 text-[15px]">
                                    {edu.school}
                                </h3>
                                <span className="text-xs text-zinc-600 font-medium whitespace-nowrap">{edu.period}</span>
                            </div>
                            <div className="text-[13px] text-zinc-700 mb-1">
                                {edu.degree} <span className="text-zinc-500 italic">| {edu.location}</span>
                            </div>
                            <p className="text-[13.5px] text-zinc-700 leading-snug text-justify">
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
                <h2 className="text-sm font-bold text-blue-800 uppercase border-b border-zinc-300 mb-3 pb-1 tracking-wider">
                    TECHNICAL SKILLS
                </h2>
                <div className="text-[13.5px] text-zinc-800 space-y-1">
                    <div>
                        <span className="font-bold text-zinc-900">Development:</span> PHP, HTML, CSS, JavaScript, TypeScript, Next.js, MySQL
                    </div>
                    <div>
                        <span className="font-bold text-zinc-900">Infrastructure:</span> Linux (Ubuntu/AlmaLinux/CloudLinux), Docker, VPS, NGINX
                    </div>
                    <div>
                        <span className="font-bold text-zinc-900">Tools & Platforms:</span> WHM/cPanel, WHMCS, Pterodactyl, Git, VS Code
                    </div>
                    <div>
                        <span className="font-bold text-zinc-900">Networking:</span> Fiber Optic, CCTV Configuration, Network Monitoring, Hardware Troubleshooting
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="mb-6">
                 <h2 className="text-sm font-bold text-blue-800 uppercase border-b border-zinc-300 mb-3 pb-1 tracking-wider">
                    KEY PROJECTS
                </h2>
                <div className="space-y-3">
                     <div className="break-inside-avoid">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-zinc-900 text-[14px]">CenaHost - Multi-Service Hosting Platform</h3>
                            <span className="text-xs text-zinc-600 font-medium">Jan 2024</span>
                        </div>
                        <p className="text-[13.5px] text-zinc-700 leading-snug text-justify">
                            Architected and deployed a multi-service hosting platform using Linux, WHM/cPanel, and WHMCS. Managed infrastructure for 235+ users.
                        </p>
                     </div>
                     <div className="break-inside-avoid">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-zinc-900 text-[14px]">Industrial Network Infrastructure</h3>
                            <span className="text-xs text-zinc-600 font-medium">2023</span>
                        </div>
                        <p className="text-[13.5px] text-zinc-700 leading-snug text-justify">
                            Designed Fiber Optic network mapping and installed multi-camera CCTV systems for industrial area security monitoring.
                        </p>
                     </div>
                </div>
            </section>

        </div>

        {/* Print Button */}
        <div className="print:hidden fixed bottom-8 right-8 z-50">
            <button 
                onClick={() => window.print()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 transition-all hover:-translate-y-1 active:scale-95"
            >
                <Printer size={18} />
                Save as PDF
            </button>
        </div>

        <style jsx global>{`
            @media print {
                @page {
                    margin: 0;
                    size: auto;
                }
                body {
                    background: white;
                    -webkit-print-color-adjust: exact;
                }
            }
        `}</style>
    </div>
  );
}
