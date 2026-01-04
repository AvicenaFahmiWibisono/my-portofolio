
export type Language = 'id' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    downloadCV: string;
    contactMe: string;
  };
  about: {
    sectionTitle: string;
    education: string;
    skills: string;
    educationDesc: string;
    skillsDesc: string;
    hardSkills: string;
    softSkills: string;
  };
  experience: {
    sectionTitle: string;
    workExperience: string;
    education: string;
  };
  certifications: {
    sectionTitle: string;
    credentials: string;
    viewCertificate: string;
  };
  projects: {
    sectionTitle: string;
    portfolio: string;
    viewDetails: string;
    liveDemo: string;
    viewCode: string;
    duration: string;
    role: string;
    techStack: string;
    overview: string;
    keyFeatures: string;
    technologies: string;
    challenges: string;
    outcome: string;
  };
  contact: {
    sectionTitle: string;
    letsConnect: string;
    description: string;
    name: string;
    email: string;
    message: string;
    sendMessage: string;
    location: string;
    followMe: string;
  };
  footer: {
    rights: string;
    craftedWith: string;
    madeWithPassion: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Avicena Fahmi',
      title: 'IT Enthusiast',
      description: 'IT Staff at PT Megalopolis | Information Systems Student at President University | Passionate about networking, web development, and cloud computing',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me'
    },
    about: {
      sectionTitle: 'About Me',
      education: 'Education',
      skills: 'Skills',
      educationDesc: 'Graduated from Mitra Industri MM2100 Vocational High School majoring in Industrial Electronics with expertise in IoT systems using Arduino. Currently pursuing Information Systems degree at President University, Faculty of Computing (5th semester).',
      skillsDesc: 'Experienced in IT support, hardware troubleshooting (CCTV, routers), software maintenance, and anti-virus configuration. Skilled in web development (PHP, HTML, CSS, MySQL), Arduino IoT systems, and cloud computing.',
      hardSkills: 'HARD SKILLS',
      softSkills: 'SOFT SKILLS'
    },
    experience: {
      sectionTitle: 'Experience & Education',
      workExperience: 'Work Experience',
      education: 'Education'
    },
    certifications: {
      sectionTitle: 'Certifications',
      credentials: 'Credentials',
      viewCertificate: 'View Certificate'
    },
    projects: {
      sectionTitle: 'Projects & Achievements',
      portfolio: 'Portfolio',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo',
      viewCode: 'View Code',
      duration: 'Duration',
      role: 'Role',
      techStack: 'Tech Stack',
      overview: 'Overview',
      keyFeatures: 'Key Features',
      technologies: 'Technologies Used',
      challenges: 'Challenges',
      outcome: 'Outcome'
    },
    contact: {
      sectionTitle: 'Get in Touch',
      letsConnect: 'Let\'s Connect',
      description: 'Have a project in mind or just want to chat? I\'d love to hear from you.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      sendMessage: 'Send Message',
      location: 'Location',
      followMe: 'Follow Me'
    },
    footer: {
      rights: 'Avicena Fahmi.',
      craftedWith: 'Crafted with ❤️ and Next.js',
      madeWithPassion: 'Made with passion'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      experience: 'Pengalaman',
      projects: 'Proyek',
      contact: 'Kontak'
    },
    hero: {
      greeting: 'Hai, Saya',
      name: 'Avicena Fahmi',
      title: 'IT Enthusiast',
      description: 'Staff IT di PT Megalopolis | Mahasiswa Sistem Informasi di President University | Bersemangat tentang networking, web development, dan cloud computing',
      downloadCV: 'Unduh CV',
      contactMe: 'Hubungi Saya'
    },
    about: {
      sectionTitle: 'Tentang Saya',
      education: 'Pendidikan',
      skills: 'Keahlian',
      educationDesc: 'Lulus dari SMK Mitra Industri MM2100 jurusan Elektronika Industri dengan keahlian dalam sistem IoT menggunakan Arduino. Saat ini sedang menempuh gelar Sistem Informasi di President University, Fakultas Ilmu Komputer (semester 5).',
      skillsDesc: 'Berpengalaman dalam dukungan IT, troubleshooting hardware (CCTV, router), maintenance software, dan konfigurasi anti-virus. Terampil dalam pengembangan web (PHP, HTML, CSS, MySQL), sistem IoT Arduino, dan cloud computing.',
      hardSkills: 'KEAHLIAN TEKNIS',
      softSkills: 'KEAHLIAN LUNAK'
    },
    experience: {
      sectionTitle: 'Pengalaman & Pendidikan',
      workExperience: 'Pengalaman Kerja',
      education: 'Pendidikan'
    },
    certifications: {
      sectionTitle: 'Sertifikasi',
      credentials: 'Kredensial',
      viewCertificate: 'Lihat Sertifikat'
    },
    projects: {
      sectionTitle: 'Proyek & Pencapaian',
      portfolio: 'Portofolio',
      viewDetails: 'Lihat Detail',
      liveDemo: 'Demo Langsung',
      viewCode: 'Lihat Kode',
      duration: 'Durasi',
      role: 'Peran',
      techStack: 'Stack Teknologi',
      overview: 'Ringkasan',
      keyFeatures: 'Fitur Utama',
      technologies: 'Teknologi yang Digunakan',
      challenges: 'Tantangan',
      outcome: 'Hasil'
    },
    contact: {
      sectionTitle: 'Mari Terhubung',
      letsConnect: 'Ayo Terhubung',
      description: 'Punya proyek atau ingin ngobrol? Saya ingin mendengar dari Anda.',
      name: 'Nama',
      email: 'Email',
      message: 'Pesan',
      sendMessage: 'Kirim Pesan',
      location: 'Lokasi',
      followMe: 'Ikuti Saya'
    },
    footer: {
      rights: 'Avicena Fahmi.',
      craftedWith: 'Dibuat dengan ❤️ dan Next.js',
      madeWithPassion: 'Dibuat dengan penuh semangat'
    }
  }
};

export interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  icon: string;
  fullDescription: string;
  features: string[];
  technologies: { name: string; category: string }[];
  challenges: string;
  outcome: string;
  duration: string;
  role: string;
  github: string;
  demo: string;
  images: string[];
}

export const getProjectsData = (lang: Language): Project[] => {
  const isID = lang === 'id';
  
  return [
    {
      id: 'cenahost-hosting-platform',
      title: 'CenaHost - Multi-Service Hosting Platform',
      desc: isID 
        ? 'Platform hosting lengkap menawarkan web hosting, server game Minecraft, dan hosting bot WhatsApp dengan WHM/cPanel dan WHMCS'
        : 'Complete hosting business offering web hosting, Minecraft game servers, and WhatsApp bot hosting with WHM/cPanel and WHMCS',
      tech: ['WHM/cPanel', 'WHMCS', 'Pterodactyl', 'VPS'],
      icon: '🌐',
      fullDescription: isID
        ? 'Membangun dan meluncurkan CenaHost (cenahost.id), bisnis hosting multi-layanan yang beroperasi penuh dari awal menggunakan infrastruktur VPS.\n\nPlatform ini menyediakan tiga layanan utama: Web Hosting dengan cPanel, Hosting Server Game Minecraft dengan panel Pterodactyl, dan Bot Hosting untuk WhatsApp, Discord, dan Telegram.\n\nProyek ini mencakup administrasi server lengkap dari pengaturan VPS awal hingga deployment produksi, mengimplementasikan alat manajemen hosting standar industri dengan billing otomatis melalui WHMCS.'
        : `🚀 Infrastructure & Cloud Engineering Journey
(Technical Storytelling with Practical Experience)

"In theory, there is no difference between theory and practice.
In practice, there is." — Yogi Berra

I didn’t begin this journey as a cloud engineer. I began as an IT professional with strong curiosity and zero real-world experience managing VPS and production servers.

My early assumption was simple: Linux is Linux. I initially deployed servers using Ubuntu, believing it would be sufficient for hosting workloads. That assumption quickly broke when I started working with cPanel-based environments and discovered the dependency on CloudLinux, which in turn required AlmaLinux. That early misstep became my first major lesson in infrastructure: technology choices are not interchangeable, and context matters.

From there, I deliberately experimented across the stack. I deployed and tested free control panels such as HestiaCP, explored both free and paid hosting configurations, and opened trial hosting services to observe real user behavior. While HestiaCP offered flexibility, I encountered frequent bugs, feature limitations, and stability challenges—especially for non-technical users.

These limitations led me to migrate to cPanel, where I faced a different category of problems. Despite being a commercial solution, it introduced its own operational challenges, including PHP runtime issues, unexpected service errors, and dependency-related bugs that required systematic debugging and configuration tuning. This phase taught me that enterprise tools reduce friction—but never eliminate complexity.

As the infrastructure matured, I shifted my focus from servers to systems integration. I implemented FOSSBilling as an open-source billing solution and studied how platforms like WHMCS handled automation and lifecycle management. Rather than stopping there, I designed and built a custom billing system, integrating it with Midtrans as a payment gateway. This exposed me to real-world challenges around API reliability, webhook handling, transaction states, and failure recovery.

During a trial hosting phase, I supported real users—primarily students—who struggled with basic hosting workflows such as uploading personal websites through control panels. One moment stood out: even users close to me lacked fundamental hosting knowledge. Teaching them patiently helped me realize something critical—engineering is not just about systems working correctly, but about systems being understandable.

Throughout this project, I handled:
• Server provisioning
• OS migration decisions
• Control panel evaluation
• PHP and runtime debugging
• Billing automation
• Payment gateway integration
• User support under real constraints

The project ultimately did not meet my business expectations. However, it succeeded as a self-designed training ground. I learned how systems fail in practice, how users behave unpredictably, and how to make rational decisions—including the decision to stop—based on data rather than emotion.

"Experience is the name everyone gives to their mistakes." — Oscar Wilde

This journey shaped my engineering mindset. I now approach infrastructure with realism, empathy, and operational awareness—understanding that stability, clarity, and sustainability matter more than ambition alone.

🧠 Technical Stack Summary

Infrastructure & OS
• Linux (Ubuntu, AlmaLinux)
• CloudLinux
• VPS provisioning & management

Hosting & Control Panels
• cPanel
• HestiaCP
• Trial hosting environments

Web & Runtime
• PHP debugging & configuration
• Node.js (deployment awareness)
• Web server management

Billing & Automation
• FOSSBilling
• Custom billing system (self-built)
• API integration
• Payment gateway: Midtrans
• Webhooks & transaction flow handling

Operational Skills
• Troubleshooting & debugging
• Migration planning
• User support & documentation
• System decision-making under constraints`,
      features: isID ? [
        'Pengaturan dan pengerasan server VPS lengkap dari instalasi Linux kosong',
        'Instalasi dan konfigurasi WHM/cPanel untuk manajemen web hosting',
        'Deployment panel Pterodactyl untuk hosting server Minecraft',
        'Integrasi WHMCS untuk billing otomatis dan manajemen klien',
        'Lingkungan hosting multi-layanan: Web, Game Server, dan Bot Hosting',
        'Web Hosting: Storage SSD NVMe, Sertifikat SSL Gratis, akses cPanel',
        'Minecraft Hosting: Perlindungan DDoS, setup instan, dukungan plugin',
        'Bot Hosting: WhatsApp Bot, Discord Bot, Telegram Bot dengan uptime andal',
        'Provisioning akun otomatis di semua platform',
        'Konfigurasi email server dengan perlindungan spam',
        'Otomasi sertifikat SSL/TLS dengan Let\'s Encrypt',
        'Backup otomatis harian untuk semua layanan',
        'Panel kontrol kustom untuk manajemen layanan'
      ] : [
        'Complete VPS server setup and hardening from bare Linux installation',
        'WHM/cPanel installation and configuration for web hosting management',
        'Pterodactyl panel deployment for Minecraft server hosting',
        'WHMCS integration for automated billing and client management',
        'Multi-service hosting environment: Web, Game Server, and Bot Hosting',
        'Web Hosting: SSD NVMe storage, Free SSL certificates, cPanel access',
        'Minecraft Hosting: DDoS protection, instant setup, plugin support',
        'Bot Hosting: WhatsApp Bot, Discord Bot, Telegram Bot with reliable uptime',
        'Automated account provisioning across all platforms',
        'Email server configuration with spam protection',
        'SSL/TLS certificate automation with Let\'s Encrypt',
        'Daily automated backups for all services',
        'Custom control panel for service management'
      ],
      technologies: [
        { name: 'WHM/cPanel', category: 'Hosting' },
        { name: 'WHMCS', category: 'Billing' },
        { name: 'Pterodactyl', category: 'Game Panel' },
        { name: 'Linux', category: 'OS' },
        { name: 'Docker', category: 'Container' },
        { name: 'NGINX', category: 'Web Server' },
        { name: 'MySQL', category: 'Database' }
      ],
      challenges: isID
        ? 'Mengkonfigurasi tiga platform hosting berbeda (WHM, Pterodactyl, WHMCS) untuk bekerja sama dengan mulus sambil menjaga keamanan dan performa.\n\nMengatur isolasi resource untuk mencegah satu layanan mempengaruhi yang lain, dan mengimplementasikan sistem billing otomatis yang terintegrasi dengan semua platform.'
        : 'Configuring three different hosting platforms (WHM, Pterodactyl, WHMCS) to work together seamlessly while maintaining security and performance.\n\nSetting up resource isolation to prevent one service from affecting others, and implementing automated billing system that integrates with all platforms.',
      outcome: isID
        ? 'Berhasil meluncurkan dan mengoperasikan bisnis hosting yang menguntungkan dengan beberapa klien berbayar di semua kategori layanan.\n\nMencapai jaminan uptime 99.9% dengan dukungan 24/7. Platform berjalan stabil melayani web hosting, 10+ server Minecraft, dan hosting bot untuk berbagai klien.'
        : 'Successfully launched and operated a profitable hosting business with multiple paying clients across all service categories.\n\nAchieved 99.9% uptime guarantee with 24/7 support. Platform running stably serving web hosting, 10+ Minecraft servers, and bot hosting for various clients.',
      duration: isID ? 'Jan 2024' : 'Jan 2024',
      role: isID ? 'System Administrator & Founder' : 'System Administrator & Founder',
      github: '#',
      demo: '#',
      images: [
        '/assets/image/portocenahost/13.png',
        '/assets/image/portocenahost/14.png',
        '/assets/image/portocenahost/15.png',
        '/assets/image/portocenahost/16.png'
      ]
    },
    // Network Infrastructure Project
    {
      id: 'network-infrastructure',
      title: isID ? 'Infrastruktur Jaringan Perusahaan' : 'Network Infrastructure',
      desc: isID 
        ? 'Pemetaan jaringan Fiber Optic, instalasi sistem CCTV, dan implementasi monitoring jaringan untuk kawasan industri'
        : 'Fiber Optic network mapping, CCTV system installation, and network monitoring implementation for industrial area',
      tech: ['Network Mapping', 'CCTV', 'Monitoring', 'Fiber Optic'],
      icon: '🔌',
      fullDescription: isID
        ? 'Merancang dan mengimplementasikan infrastruktur jaringan untuk kawasan industri dengan fokus pada pemetaan jaringan Fiber Optic (FO), instalasi sistem CCTV multi-kamera untuk keamanan area, dan deployment sistem monitoring jaringan untuk tracking performa infrastruktur.\n\nProyek mencakup pembuatan dokumentasi topologi jaringan FO, instalasi dan konfigurasi kamera CCTV di berbagai titik strategis, serta setup monitoring system untuk real-time visibility network performance.'
        : 'Designed and implemented network infrastructure for industrial area with focus on Fiber Optic (FO) network mapping, multi-camera CCTV system installation for area security, and network monitoring system deployment for infrastructure performance tracking.\n\nProject includes creating FO network topology documentation, CCTV camera installation and configuration at strategic points, and monitoring system setup for real-time network performance visibility.',
      features: isID ? [
        'Pemetaan dan dokumentasi jaringan Fiber Optic (FO)',
        'Instalasi sistem CCTV multi-kamera di area industri',
        'Setup sistem monitoring jaringan untuk tracking performa',
        'Dokumentasi topologi jaringan lengkap',
        'Konfigurasi dan testing kamera CCTV',
        'Dashboard monitoring real-time',
        'Maintenance preventif sistem CCTV',
        'Network performance tracking',
        'Troubleshooting infrastruktur jaringan'
      ] : [
        'Fiber Optic (FO) network mapping and documentation',
        'Multi-camera CCTV system installation in industrial area',
        'Network monitoring system setup for performance tracking',
        'Complete network topology documentation',
        'CCTV camera configuration and testing',
        'Real-time monitoring dashboard',
        'CCTV system preventive maintenance',
        'Network performance tracking',
        'Network infrastructure troubleshooting'
      ],
      technologies: [
        { name: 'Fiber Optic', category: 'Network' },
        { name: 'CCTV Systems', category: 'Security' },
        { name: 'Network Monitoring', category: 'Tools' },
        { name: 'Network Mapping', category: 'Documentation' },
        { name: 'Troubleshooting', category: 'Support' }
      ],
      challenges: isID
        ? 'Memetakan infrastruktur jaringan FO yang kompleks di kawasan industri yang luas.\n\nMenentukan titik-titik strategis untuk penempatan kamera CCTV untuk coverage optimal, dan mengintegrasikan sistem monitoring untuk memberikan visibility yang comprehensive terhadap performa jaringan.'
        : 'Mapping complex FO network infrastructure across large industrial area.\n\nDetermining strategic points for CCTV camera placement for optimal coverage, and integrating monitoring system to provide comprehensive visibility of network performance.',
      outcome: isID
        ? 'Berhasil membuat dokumentasi lengkap pemetaan jaringan FO untuk kawasan industri.\n\nMenginstall dan mengkonfigurasi sistem CCTV yang mencakup seluruh area kritikal, dan meng-deploy sistem monitoring yang memberikan real-time insight terhadap kondisi jaringan, meningkatkan response time untuk troubleshooting masalah infrastruktur.'
        : 'Successfully created complete FO network mapping documentation for industrial area.\n\nInstalled and configured CCTV system covering all critical areas, and deployed monitoring system providing real-time insights into network conditions, improving response time for infrastructure troubleshooting.',
      duration: isID ? 'Mar 2023 - Sekarang' : 'Mar 2023 - Present',
      role: isID ? 'Network Infrastructure Specialist' : 'Network Infrastructure Specialist',
      github: '#',
      demo: '#',
      images: [
        '/assets/image/portonetworkinfra/15.png',
        '/assets/image/portonetworkinfra/16.png',
        '/assets/image/portonetworkinfra/17.png',
        '/assets/image/portonetworkinfra/18.png'
      ]
    },
    // Minecraft Server Project
    {
      id: 'minecraft-server',
      title: isID ? 'Server Minecraft dengan Pterodactyl' : 'Minecraft Server with Pterodactyl',
      desc: isID
        ? 'Deployment dan manajemen server game Minecraft menggunakan Pterodactyl panel dengan Docker untuk performa optimal'
        : 'Deployment and management of Minecraft game servers using Pterodactyl panel with Docker for optimal performance',
      tech: ['Pterodactyl', 'Docker', 'Linux', 'Minecraft'],
      icon: '🎮',
      fullDescription: isID
        ? 'Membangun infrastruktur server game profesional menggunakan Pterodactyl panel untuk manajemen server Minecraft.\n\nImplementasi mencakup containerization dengan Docker untuk isolasi resource, automated deployment, dan centralized management multiple servers.\n\nSetup monitoring untuk track performa, automated backup system, dan optimization untuk handle 20+ pemain concurrent per server.'
        : 'Built professional game server infrastructure using Pterodactyl panel for Minecraft server management.\n\nImplementation includes containerization with Docker for resource isolation, automated deployment, and centralized management of multiple servers.\n\nSetup monitoring to track performance, automated backup system, and optimization to handle 20+ concurrent players per server.',
      features: isID ? [
        'Pterodactyl panel untuk manajemen terpusat',
        'Docker containerization untuk isolasi resource',
        'Deployment otomatis server baru',
        'Backup otomatis jadwal',
        'Monitoring resource real-time',
        'Support plugin dan modpacks',
        'DDoS protection',
        'Multi-server management',
        'Web-based control panel'
      ] : [
        'Pterodactyl panel for centralized management',
        'Docker containerization for resource isolation',
        'Automated new server deployment',
        'Scheduled automatic backups',
        'Real-time resource monitoring',
        'Plugin and modpacks support',
        'DDoS protection',
        'Multi-server management',
        'Web-based control panel'
      ],
      technologies: [
        { name: 'Pterodactyl', category: 'Game Panel' },
        { name: 'Docker', category: 'Containerization' },
        { name: 'NGINX', category: 'Web Server' },
        { name: 'MySQL/MariaDB', category: 'Database' },
        { name: 'Redis', category: 'Cache' },
        { name: 'Linux CLI', category: 'System Admin' },
        { name: 'Minecraft Server', category: 'Game Server' }
      ],
      challenges: isID
        ? 'Mengoptimalkan performa server untuk handle 20+ pemain concurrent.\n\nImplementing proper resource limits untuk mencegah satu server mempengaruhi yang lain, dan mengatur automated backup system yang tidak impact gameplay performance.'
        : 'Optimizing server performance to handle 20+ concurrent players.\n\nImplementing proper resource limits to prevent one server from affecting others, and setting up automated backup system that doesn\'t impact gameplay performance.',
      outcome: isID
        ? 'Berhasil deploy infrastruktur server game production-ready dengan uptime 99%+, mendukung multiple instance server Minecraft dengan manajemen terpusat dan automated backups.'
        : 'Successfully deployed production-ready game server infrastructure with 99%+ uptime, supporting multiple Minecraft server instances with centralized management and automated backups.',
      duration: isID ? 'Jan 2024' : 'Jan 2024',
      role: isID ? 'System Administrator & DevOps' : 'System Administrator & DevOps',
      github: '#',
      demo: '#',
      images: [
        '/assets/image/portomc/35.png',
        '/assets/image/portomc/36.png',
        '/assets/image/portomc/37.png',
        '/assets/image/portomc/38.png',
        '/assets/image/portomc/39.png',
        '/assets/image/portomc/portomc1.png',
        '/assets/image/portomc/portomc2.png',
        '/assets/image/portomc/portomc3.png'
      ]
    },
    // Web Development Project
    {
      id: 'web-development',
      title: 'Web Development & WordPress',
      desc: isID
        ? 'Pengembangan website termasuk sistem monitoring, homepage bisnis, dan platform komunitas'
        : 'Website development including monitoring systems, business homepages, and community platforms',
      tech: ['PHP', 'MySQL', 'WordPress', 'HTML/CSS'],
      icon: '💻',
      fullDescription: isID
        ? 'Mengembangkan berbagai jenis website termasuk sistem monitoring jaringan untuk infrastruktur perusahaan, landing page bisnis untuk layanan salon kecantikan (nail art), website profil sekolah, dan platform komunitas gaming.\n\nProyek fokus pada desain yang bersih, antarmuka user-friendly, dan solusi fungsional yang disesuaikan dengan kebutuhan klien.'
        : 'Developed various types of websites including a network monitoring system for company infrastructure, business landing pages for beauty salon services (nail art), school profile website, and gaming community platform.\n\nProjects focus on clean design, user-friendly interfaces, and functional solutions tailored to client needs.',
      features: isID ? [
        'Dashboard monitoring jaringan dengan visualisasi data real-time',
        'Landing page bisnis dengan showcase layanan',
        'Website profil sekolah dengan manajemen informasi',
        'Platform komunitas gaming dengan fitur member',
        'Desain responsive untuk semua ukuran device',
        'Manajemen konten berbasis database',
        'Kustomisasi tema WordPress',
        'Antarmuka admin yang user-friendly',
        'Struktur SEO-friendly',
        'Form kontak dan sistem inquiry',
        'Galeri gambar dan portfolio',
        'Sistem autentikasi dasar'
      ] : [
        'Network monitoring dashboard with real-time data visualization',
        'Business landing pages with service showcase',
        'School profile website with information management',
        'Gaming community platform with member features',
        'Responsive design for all device sizes',
        'Database-driven content management',
        'WordPress theme customization',
        'User-friendly admin interfaces',
        'SEO-friendly structure',
        'Contact forms and inquiry systems',
        'Image galleries and portfolios',
        'Basic authentication systems'
      ],
      technologies: [
        { name: 'PHP', category: 'Backend' },
        { name: 'MySQL', category: 'Database' },
        { name: 'WordPress', category: 'CMS' },
        { name: 'HTML5/CSS3', category: 'Frontend' },
        { name: 'JavaScript', category: 'Frontend' },
        { name: 'Bootstrap', category: 'Framework' },
        { name: 'jQuery', category: 'Library' }
      ],
      challenges: isID
        ? 'Membuat fitur monitoring jaringan custom dengan update real-time.\n\nMendesain layout yang menarik dan profesional untuk website bisnis, memastikan desain responsive bekerja mulus di semua device, dan mengelola berbagai jenis konten untuk berbagai tujuan website (korporat, pendidikan, komunitas).'
        : 'Creating custom network monitoring features with real-time updates.\n\nDesigning attractive and professional layouts for business websites, ensuring responsive design works seamlessly across devices, and managing different content types for various website purposes (corporate, educational, community).',
      outcome: isID
        ? 'Berhasil mendeliver multiple website produksi termasuk sistem monitoring jaringan fungsional untuk manajemen kawasan industri, website bisnis profesional untuk layanan kecantikan, profil sekolah komprehensif dengan sistem informasi, dan platform komunitas gaming yang engaging.\n\nSemua proyek menampilkan desain yang bersih, UX yang smooth, dan memenuhi kebutuhan klien.'
        : 'Successfully delivered multiple production websites including a functional network monitoring system for industrial area management, professional business websites for beauty services, comprehensive school profile with information system, and engaging gaming community platform.\n\nAll projects feature clean design, smooth user experience, and meet client requirements.',
      duration: isID ? 'Multiple proyek' : 'Multiple projects',
      role: isID ? 'Full Stack Developer & WordPress Developer' : 'Full Stack Developer & WordPress Developer',
      github: '#',
      demo: '#',
      images: [
        '/assets/image/portowebdev/1.png',
        '/assets/image/portowebdev/2.png',
        '/assets/image/portowebdev/3.png',
        '/assets/image/portowebdev/4.png',
        '/assets/image/portowebdev/5.png',
        '/assets/image/portowebdev/6.png'
      ]
    },
    // IT Documentation Project
    {
      id: 'it-documentation',
      title: isID ? 'Dokumentasi IT' : 'IT Documentation',
      desc: isID
        ? 'Dokumentasi IT komprehensif dan prosedur maintenance sistem'
        : 'Comprehensive IT documentation and system maintenance procedures',
      tech: ['Documentation', 'Process Management'],
      icon: '📚',
      fullDescription: isID
        ? 'Mengembangkan sistem dokumentasi IT komprehensif termasuk prosedur operasional standar, panduan troubleshooting, dan protokol maintenance sistem.'
        : 'Developed comprehensive IT documentation system including standard operating procedures, troubleshooting guides, and system maintenance protocols.',
      features: isID ? [
        'Prosedur Operasional Standar (SOP)',
        'Panduan troubleshooting',
        'Dokumentasi arsitektur sistem',
        'Jadwal maintenance',
        'Pembuatan knowledge base'
      ] : [
        'Standard Operating Procedures (SOPs)',
        'Troubleshooting guides',
        'System architecture documentation',
        'Maintenance schedules',
        'Knowledge base creation'
      ],
      technologies: [
        { name: 'Documentation Tools', category: 'Tools' },
        { name: 'Markdown', category: 'Format' },
        { name: 'Diagrams', category: 'Visualization' },
        { name: 'Version Control', category: 'Management' },
        { name: 'Collaboration', category: 'Workflow' }
      ],
      challenges: isID
        ? 'Membuat dokumentasi yang komprehensif namun mudah dipahami untuk berbagai tingkat teknis.'
        : 'Creating documentation that is comprehensive yet easy to understand for different technical levels.',
      outcome: isID
        ? 'Membangun sistem dokumentasi terpusat yang meningkatkan efisiensi tim dan mengurangi waktu resolusi.'
        : 'Established centralized documentation system improving team efficiency and reducing resolution time.',
      duration: isID ? 'Berkelanjutan' : 'Ongoing',
      role: isID ? 'IT Documentation Specialist' : 'IT Documentation Specialist',
      github: '#',
      demo: '#',
      images: [
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=500&fit=crop'
      ]
    },
    // AR E-Learning App Project
    {
      id: 'ar-elearning-app',
      title: isID ? 'Aplikasi E-Learning Augmented Reality' : 'AR E-Learning Application',
      desc: isID
        ? 'Aplikasi pembelajaran interaktif dengan fitur 3D objects dan Augmented Reality menggunakan Unity dan Vuforia Engine untuk kompetisi October Digital Creativity'
        : 'Interactive learning application with 3D objects and Augmented Reality features using Unity and Vuforia Engine for October Digital Creativity competition',
      tech: ['Unity', 'Vuforia Engine', 'AR', 'C#'],
      icon: '🎓',
      fullDescription: isID
        ? 'Mengembangkan aplikasi e-learning inovatif dengan integrasi Augmented Reality (AR) untuk kompetisi internal sekolah "October Digital Creativity".\n\nAplikasi ini menampilkan objek 3D interaktif yang dapat divisualisasikan dalam lingkungan nyata menggunakan teknologi AR, memberikan pengalaman belajar yang immersive dan engaging.\n\nDibangun menggunakan Unity game engine dan Vuforia Engine untuk AR tracking, project ini merupakan kolaborasi tim dengan Fadhil dan Arbi, menggabungkan pembelajaran tradisional dengan teknologi modern untuk meningkatkan engagement siswa.'
        : 'Developed innovative e-learning application with Augmented Reality (AR) integration for school internal competition "October Digital Creativity".\n\nThe application features interactive 3D objects that can be visualized in real-world environment using AR technology, providing immersive and engaging learning experience.\n\nBuilt using Unity game engine and Vuforia Engine for AR tracking, this project was a team collaboration with Fadhil and Arbi, combining traditional learning with modern technology to enhance student engagement.',
      features: isID ? [
        'Integrasi Augmented Reality untuk visualisasi 3D',
        'Objek 3D interaktif untuk materi pembelajaran',
        'AR marker-based tracking dengan Vuforia Engine',
        'Interface pembelajaran yang user-friendly',
        'Konten edukatif interaktif',
        'Real-time 3D object rendering',
        'Multi-platform support (Android/iOS)',
        'Gesture controls untuk manipulasi objek 3D',
        'Educational content integration'
      ] : [
        'Augmented Reality integration for 3D visualization',
        'Interactive 3D objects for learning materials',
        'AR marker-based tracking with Vuforia Engine',
        'User-friendly learning interface',
        'Interactive educational content',
        'Real-time 3D object rendering',
        'Multi-platform support (Android/iOS)',
        'Gesture controls for 3D object manipulation',
        'Educational content integration'
      ],
      technologies: [
        { name: 'Unity', category: 'Game Engine' },
        { name: 'Vuforia Engine', category: 'AR SDK' },
        { name: 'C#', category: 'Programming' },
        { name: 'AR Foundation', category: 'Framework' },
        { name: '3D Modeling', category: 'Graphics' },
        { name: 'Mobile Development', category: 'Platform' }
      ],
      challenges: isID
        ? 'Mengintegrasikan teknologi AR dengan konten pembelajaran yang efektif, mengoptimasi performa 3D rendering untuk device mobile, memastikan AR tracking yang stabil dan akurat, serta mendesain user experience yang intuitif untuk aplikasi edukasi. Kolaborasi tim juga membutuhkan koordinasi yang baik dalam pembagian tugas development.'
        : 'Integrating AR technology with effective learning content, optimizing 3D rendering performance for mobile devices, ensuring stable and accurate AR tracking, and designing intuitive user experience for educational application. Team collaboration also required good coordination in development task distribution.',
      outcome: isID
        ? 'Berhasil mengembangkan aplikasi e-learning AR yang fungsional untuk kompetisi October Digital Creativity. Aplikasi menampilkan objek 3D interaktif dengan AR tracking yang smooth, memberikan pengalaman pembelajaran yang immersive. Project ini mendemonstrasikan kemampuan dalam mobile app development, AR implementation, dan kolaborasi tim yang efektif.'
        : 'Successfully developed functional AR e-learning application for October Digital Creativity competition. The application features interactive 3D objects with smooth AR tracking, providing immersive learning experience. This project demonstrated capabilities in mobile app development, AR implementation, and effective team collaboration.',
      duration: isID ? 'Kompetisi Sekolah' : 'School Competition',
      role: isID ? 'Unity Developer (Tim: Fadhil, Arbi)' : 'Unity Developer (Team: Fadhil, Arbi)',
      github: '#',
      demo: '#',
      images: [
        '/assets/image/portoarelearning/4.png',
        '/assets/image/portoarelearning/5.png',
        '/assets/image/portoarelearning/6.png'
      ]
    }
  ];
};
