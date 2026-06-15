import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = '', size = 20 }: DynamicIconProps) {
  // Resolve component dynamically
  const IconComponent = (Icons as Record<string, any>)[name];

  if (!IconComponent) {
    // Return a default fallback icon (HelpCircle) to avoid crashing
    const Fallback = Icons.HelpCircle;
    return <Fallback className={className} size={size} id={`fallback-icon-${name}`} />;
  }

  return <IconComponent className={className} size={size} id={`dynamic-icon-${name}`} />;
}
