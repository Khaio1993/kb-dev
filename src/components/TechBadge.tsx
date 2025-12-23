import { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiOpenai,
  SiStripe,
  SiNodedotjs,
  SiPython,
  SiSupabase,
  SiAnthropic,
  SiMeta,
  SiCapacitor,
  SiVercel
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const techIconMap: Record<string, IconType> = {
  'Next.js': SiNextdotjs,
  'Firebase': SiFirebase,
  'Tailwind': SiTailwindcss,
  'OpenAI': SiOpenai,
  'Claude AI': SiAnthropic,
  'Stripe': SiStripe,
  'Meta API': SiMeta,
  'Capacitor': SiCapacitor,
  'Vercel': SiVercel,
  'Resend': MdEmail,
  'Node.js': SiNodedotjs,
  'Python': SiPython,
  'Supabase': SiSupabase,
  // Konnect and Templated.io don't have icons in simple-icons, will display text only
};

interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  const Icon = techIconMap[tech];

  return (
    <span className="px-3 py-1 rounded-full bg-orange-accent/5 border border-orange-accent/20 text-sm text-orange-accent inline-flex items-center gap-2">
      {Icon && <Icon className="w-4 h-4" />}
      {tech}
    </span>
  );
}
