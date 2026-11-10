export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Subtle modern ambient background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-blue/5 rounded-full blur-[128px]" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-slate-700/5 rounded-full blur-[128px]" />
    </div>
  );
}
