export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  story: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'chefmedia',
    title: 'ChefMedia - AI Social Media for Restaurants',
    subtitle: 'LAUNCHED ON iOS & ANDROID.',
    description: 'AI-powered social media automation platform helping restaurants generate engaging posts with smart captions, hashtags, and multi-platform scheduling.',
    story: 'Restaurant owners struggle to maintain consistent social media presence while managing their daily operations. They need engaging content but lack the time and expertise to create compelling posts regularly. ChefMedia was born to solve this exact problem—transforming a simple food photo into professional social media content in seconds using AI vision technology.',
    challenge: 'The main challenge was building a system that could accurately understand food images and generate contextually relevant, engaging captions and hashtags. The platform needed to integrate with both Facebook and Instagram APIs, handle multi-account management, support scheduling across time zones, and work seamlessly as both a web app and native mobile application. Additionally, ensuring AI-generated content felt authentic and matched each restaurant\'s unique voice was crucial.',
    solution: 'Built a comprehensive Next.js web application with Firebase for real-time data and authentication. Integrated OpenAI Vision and Claude AI for intelligent image analysis and content generation, creating a dual-AI system that ensures high-quality, contextual posts. Implemented Meta API for seamless publishing to Facebook and Instagram, with support for multiple account management. Added Stripe for subscription payments and created an admin panel for user management. Used Capacitor to wrap the web app into native iOS and Android applications, adding push notifications for scheduled post reminders and leveraging native device capabilities for better photo uploads.',
    impact: 'ChefMedia successfully launched on both iOS and Android app stores, serving restaurants across multiple countries. The platform generates thousands of AI-powered posts monthly, saving restaurant owners countless hours while maintaining consistent social media engagement. The dual-AI approach (OpenAI + Claude) ensures high-quality, creative content that resonates with audiences. Users report significant time savings and improved social media consistency, allowing them to focus on what they do best—running their restaurants.',
    technologies: ['Next.js', 'Firebase', 'Tailwind', 'OpenAI', 'Claude AI', 'Stripe', 'Meta API', 'Capacitor'],
    screenshots: [
      '/C-chefmedia1.png',
      '/C-chefmedia2.png',
      '/C-chefmedia3.png',
      '/C-chefmedia4.png'
    ],
    liveUrl: 'https://chefmedia.ai',
    featured: true
  },
  {
    id: '2',
    slug: '9esmi-marketplace',
    title: '9esmi Marketplace - Online Learning Platform',
    subtitle: 'CO-FOUNDER & TECH LEAD OF TUNISIAN STARTUP.',
    description: 'A comprehensive online course marketplace built for the Tunisian market, empowering educators to create, publish, and monetize their courses with an intuitive course builder.',
    story: 'As a co-founder of this Tunisian startup, I identified a gap in the local e-learning market—there was no accessible platform where Tunisian educators could easily create and sell courses to local learners. The vision was to democratize online education in Tunisia by providing creators with professional tools and learners with quality content in their local context. 9esmi Marketplace was built to bridge this gap, creating opportunities for knowledge sharing and monetization in the Tunisian educational ecosystem.',
    challenge: 'The main challenge was building a platform that balanced simplicity for course creators with powerful features for professional course production. We needed an intuitive course builder that could handle complex course structures (chapters, quizzes, multimedia content) while maintaining quality through a verification and approval system. Additionally, integrating with Konnect, Tunisia\'s local payment gateway, required careful implementation to ensure secure transactions. The platform also needed to support both dark and light modes for optimal user experience across different preferences.',
    solution: 'Built a full-stack Next.js application with Firebase as the backend, deployed on Vercel for optimal performance and scalability. Designed and implemented a comprehensive course builder allowing instructors to create structured courses with multiple chapters, integrated quizzes, custom thumbnails, and flexible pricing options. Developed a quality verification system with admin approval workflows to maintain platform standards. Integrated Konnect payment gateway API to enable secure local payments tailored to the Tunisian market. Implemented a modern, responsive UI with Tailwind CSS featuring both dark and light themes for enhanced user experience.',
    impact: '9esmi Marketplace recently launched and is already serving over 100 active users with more than 10 published courses. The platform is empowering Tunisian educators to monetize their expertise while providing learners with accessible, quality education. The course builder has streamlined the content creation process, reducing the time to publish a course from weeks to just days. The quality verification system ensures all published courses meet our standards, building trust with learners. As a co-founder, I\'m proud to see this startup contributing to Tunisia\'s growing digital education landscape.',
    technologies: ['Next.js', 'Firebase', 'Tailwind', 'Vercel', 'Konnect'],
    screenshots: [
      '/C-marketplace1.png',
      '/C-marketplace2.png',
      '/C-marketplace3.png',
      '/C-marketplace4.png',
      '/C-marketplace5.png',
      '/C-marketplace6.png',
      '/C-marketplace7.png'
    ],
    liveUrl: 'https://marketplace.9esmi.tn',
    featured: true
  },
  {
    id: '3',
    slug: 'salesmark',
    title: 'Salesmark - Sales Evidence Verification Platform',
    subtitle: 'LAUNCHING EARLY 2026 FOR US MARKET.',
    description: 'Enterprise sales verification platform with dynamic certificate generation, multi-role authentication system, and automated evidence validation for sales professionals.',
    story: 'In the competitive US sales market, professionals struggle to verify and showcase their achievements in a credible, standardized way. Sales teams needed a trusted platform where they could submit evidence of their accomplishments, have it verified by reviewers, and receive professional certificates to boost their credibility. Salesmark was created to solve this problem—providing a comprehensive verification ecosystem that brings trust and transparency to sales achievements.',
    challenge: 'Building a robust multi-role system (users, reviewers, admins) with distinct permissions and workflows was complex. Each role needed specific capabilities: users submit evidence, reviewers validate submissions, and admins manage the entire platform. The platform required secure document handling, automated certificate generation with dynamic data, professional email notifications at each step, and payment processing for verification services. Additionally, ensuring the verification process was both thorough and efficient while maintaining a smooth user experience presented significant architectural challenges.',
    solution: 'Developed a full-stack Next.js application with Supabase as the backend database and authentication system, providing real-time updates and secure data management. Implemented a sophisticated role-based access control (RBAC) system managing three distinct user roles with granular permissions. Integrated Templated.io API for dynamic certificate generation, automatically populating certificates with verified user data and achievement details. Connected Resend email API for professional, automated email notifications throughout the verification workflow. Added Stripe for secure payment processing of verification fees. Built with Tailwind CSS for a modern, responsive interface optimized for all user roles.',
    impact: 'Salesmark is currently in active development with a planned launch in early 2026. The platform is being built with enterprise-grade security and scalability from day one. The streamlined verification workflow will reduce processing time from weeks to just days, while the automated certificate generation will provide instant credibility to verified sales professionals. The multi-role system ensures quality control while maintaining efficiency. Upon launch, Salesmark will serve the US sales market, providing much-needed standardization and trust in sales achievement verification.',
    technologies: ['Next.js', 'Supabase', 'Tailwind', 'Templated.io', 'Resend', 'Stripe'],
    screenshots: [
      '/C-Salesmark1.png',
      '/C-Salesmark2.png',
      '/C-Salesmark3.png',
      '/C-Salesmark4.png',
      '/C-Salesmark5.png'
    ],
    liveUrl: 'https://salesmark.us',
    featured: true
  },
  {
    id: '4',
    slug: 'playpadel',
    title: 'PlayPadel - Padel Tournament & ELO Platform',
    subtitle: 'TUNISIA\'S PREMIER PADEL COMMUNITY PLATFORM.',
    description: 'Mobile-first Progressive Web App for padel players featuring an advanced ELO ranking system, tournament organization, live scoring, and social networking for Tunisia\'s growing padel community.',
    story: 'Padel is rapidly growing in Tunisia, but players lacked a dedicated platform to track their progress, organize tournaments, and connect with the community. Players needed a way to measure their skill level objectively, find matches with players of similar abilities, and organize competitive tournaments. PlayPadel was created to bring structure and community to Tunisia\'s padel scene—providing players with professional tools for ranking, tournament management, and social connection.',
    challenge: 'The main challenge was designing and implementing a sophisticated ELO rating algorithm that accurately reflects player skill levels in padel\'s unique doubles format. Unlike chess, padel involves partner dynamics and opponent pairings that both affect outcomes. The algorithm needed to account for match results, partner skill levels, and opponent skill levels to calculate fair, accurate ratings. Additionally, building a real-time tournament system with live scoring that works seamlessly on mobile devices required careful optimization. The platform also needed robust social features (messaging, interactions, likes) while maintaining excellent performance as a PWA.',
    solution: 'Developed a mobile-first Progressive Web App using Next.js for optimal performance and offline capabilities. Designed and implemented a custom ELO algorithm specifically adapted for padel doubles, factoring in victory outcomes, partner ratings, and opponent ratings to compute precise skill levels. Built with Firebase for real-time database capabilities, enabling live tournament scoring and instant match updates. Deployed on Vercel for global performance and reliability. Created a comprehensive tournament management system allowing players to organize and participate in high-level competitions with live score tracking. Integrated social features including player interactions, messaging system, match likes, and community engagement tools. Optimized the entire experience for mobile devices with PWA capabilities for app-like performance.',
    impact: 'PlayPadel is revolutionizing the padel scene in Tunisia by providing the first comprehensive platform for skill tracking and tournament organization. The ELO ranking system brings credibility and fairness to competitive play, helping players find appropriately matched opponents and track their improvement over time. The tournament features enable the community to organize professional-level competitions with real-time scoring, increasing engagement and competitive opportunities. The social aspects foster a strong, connected community of padel enthusiasts. As Tunisia\'s padel community continues to grow, PlayPadel serves as the central hub for competitive and social padel activities.',
    technologies: ['Next.js', 'Firebase', 'Vercel', 'Tailwind'],
    screenshots: [
      '/C-Playpadel1.png',
      '/C-Playpadel2.png',
      '/C-Playpadel3.png',
      '/C-Playpadel4.png',
      '/C-Playpadel5.png',
      '/C-Playpadel6.png',
      '/C-Playpadel7.png',
      '/C-Playpadel8.png'
    ],
    liveUrl: 'https://playpadel-navy.vercel.app',
    featured: true
  },
  {
    id: '5',
    slug: 'izigos',
    title: 'Izigos - Social Network for Truckers',
    subtitle: 'LIVE ON iOS & ANDROID IN US MARKET.',
    description: 'Comprehensive mobile app combining social networking, delivery tracking, and performance analytics for truck drivers and carriers across the United States.',
    story: 'The trucking industry in the US is massive, yet truck drivers and carriers lacked a dedicated platform to connect, track their work, and benchmark their performance. Drivers spend countless hours on the road, often isolated, while carriers struggle to measure and improve operational efficiency. Izigos was created to revolutionize the trucking industry—providing drivers with a social community and professional tools while giving carriers powerful analytics to optimize their operations and recognize top performers.',
    challenge: 'Building a comprehensive platform that serves multiple user types (drivers, carriers, facilities) with distinct needs was complex. The app needed real-time delivery tracking that works reliably across the entire US, even in areas with poor connectivity. Implementing a fair and meaningful KPI-based leaderboard system required careful consideration of various performance metrics across different types of hauling operations. The social features needed to foster genuine community while the time tracking had to be precise for compliance and payroll purposes. Additionally, ensuring the app performed smoothly on both iOS and Android while handling real-time updates for messaging, feeds, and live tracking presented significant technical challenges.',
    solution: 'Developed a cross-platform mobile application using React Native for consistent performance on both iOS and Android. Built with Expo for streamlined development and deployment, enabling faster iterations and updates. Leveraged Firebase for real-time database capabilities, powering the live delivery tracking, instant messaging system, and real-time feed updates. Implemented a sophisticated time tracking system that logs driver hours, delivery times, and route information with high precision. Created an engaging social feed with likes, comments, and driver interactions to build community. Developed a comprehensive leaderboard system tracking multiple KPIs for both carriers and facilities, including on-time delivery rates, efficiency metrics, and safety records. Integrated push notifications to keep drivers informed of important updates, new messages, and milestone achievements.',
    impact: 'Izigos is successfully serving the US trucking market on both iOS and Android platforms, connecting thousands of truck drivers and carriers nationwide. The social features have created a vibrant community where drivers share experiences, tips, and support each other on the road, reducing the isolation that comes with long-haul trucking. The delivery tracking system provides real-time visibility for both drivers and dispatchers, improving coordination and reducing delays. The KPI-based leaderboards have introduced healthy competition and recognition, motivating drivers to improve performance while helping carriers identify and reward their top performers. The time tracking features ensure accurate record-keeping for compliance and payroll. Carriers using Izigos report improved operational efficiency, better driver retention, and enhanced ability to benchmark performance across their fleet.',
    technologies: ['React Native', 'Firebase', 'Expo'],
    screenshots: [
      '/C-Izigos1.png',
      '/C-Izigos2.png',
      '/C-Izigos3.png',
      '/C-Izigos4.png',
      '/C-Izigos5.png',
      '/C-Izigos6.png',
      '/C-Izigos7.png'
    ],
    featured: true
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}
