import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROMPT_PLAYGROUND_TEMPLATES } from '../data';
import { Bot, Cpu, GitBranch, Lightbulb, Play, Send, Sparkles, Terminal, Check } from 'lucide-react';

export default function AIExpertise() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const template = PROMPT_PLAYGROUND_TEMPLATES[selectedIdx];

  // Store active variables
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [compiledPrompt, setCompiledPrompt] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Initialize variables when template changes
  useEffect(() => {
    const initialVars: Record<string, string> = {};
    template.variables.forEach((v) => {
      initialVars[v.name] = v.defaultValue;
    });
    setVariables(initialVars);
    setShowOutput(false);
  }, [selectedIdx]);

  // Compile final prompt string
  useEffect(() => {
    let result = template.userPromptTemplate;
    Object.keys(variables).forEach((key) => {
      const val = variables[key];
      result = result.split(`{{${key}}}`).join(val || `[${key}]`);
    });
    setCompiledPrompt(result);
  }, [variables, template]);

  const handleVariableChange = (name: string, val: string) => {
    setVariables((prev) => ({ ...prev, [name]: val }));
  };

  const handleCompileAndRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 1100);
  };

  const handleCopyPrompt = () => {
    const copyText = `SYSTEM INSTRUCTION:\n${template.systemPrompt}\n\nUSER PROMPT:\n${compiledPrompt}`;
    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Agentic Workflow state tracking
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number | null>(null);

  const workflowSteps = [
    {
      id: 1,
      title: "User Injection & Guardrails",
      desc: "User query is received, sanitized to prevent prompt injections, and filtered through defensive instruction filters.",
      icon: "ShieldAlert",
      color: "border-primary-blue text-primary-blue bg-primary-blue/10"
    },
    {
      id: 2,
      title: "Dynamic Context & RAG Fetch",
      desc: "Related vectors references are looked up inside pgvector store & embedded to prompt block as short-term episodic memory.",
      icon: "Database",
      color: "border-primary-blue text-primary-blue bg-primary-blue/10"
    },
    {
      id: 3,
      title: "Structured Prompt Orchestrator",
      desc: "The core prompt is compiled, embedding role rules, zero-shot system restraints, and required schema variables.",
      icon: "Lightbulb",
      color: "border-primary-blue text-primary-blue bg-primary-blue/10"
    },
    {
      id: 4,
      title: "Model Inference (Gemini SDK)",
      desc: "High-temperature or structured JSON inference is fired using the server-side Gemini multi-agent pipeline model.",
      icon: "Cpu",
      color: "border-primary-blue text-primary-blue bg-primary-blue/10"
    },
    {
      id: 5,
      title: "Schema validation check",
      desc: "The output code blocks or raw JSON is parsed against Zod structures, with automatic retries on syntax mismatch.",
      icon: "CheckCircle2",
      color: "border-emerald-600/30 text-emerald-700 bg-emerald-600/10"
    }
  ];

  return (
    <section
      id="ai-playground"
      className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden border-t border-stone-200 text-left"
    >
      {/* Heading Group */}
      <div className="flex flex-col items-start gap-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card/80 border border-stone-200">
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-primary-blue">
            06 // PROMPT ENGINEERING & AGENTS
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight leading-tight">
          Showcasing Prompts Engineering &
          <br />
          <span className="text-primary-blue font-extrabold">
            Autonomous Agent Loops
          </span>
        </h2>
        <p className="text-sm sm:text-base text-text-secondary max-w-2xl">
          I don't just prompt: I engineer predictive instructions and strict validation scaffolds. Interact with my sandbox templates or explore standard LLM multi-step workflows below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
        {/* Left Hand: Playground Board (lg:col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-6" id="playground-board">
          {/* Template segment selector */}
          <div className="flex flex-col sm:flex-row gap-2 bg-surface-card border border-stone-200 p-1.5 rounded-xl backdrop-blur-sm">
            {PROMPT_PLAYGROUND_TEMPLATES.map((tmpl, idx) => (
              <button
                key={tmpl.name}
                id={`playground-tmpl-${idx}`}
                onClick={() => setSelectedIdx(idx)}
                className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-tight font-sans transition-all duration-200 cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-bg-primary font-bold border border-stone-200 text-primary-blue'
                    : 'text-text-secondary hover:text-text-white hover:bg-stone-100'
                }`}
              >
                {tmpl.name}
              </button>
            ))}
          </div>

          {/* Core Interactive Board Console */}
          <div className="rounded-2xl bg-surface-card border border-stone-200 p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-text-secondary font-mono tracking-wider uppercase">
              <Terminal size={14} className="text-primary-blue animate-pulse" />
              Interactive Template Compiler
            </div>

            {/* Editable Variable Inputs box */}
            <div className="p-5 rounded-xl bg-bg-primary border border-stone-200 flex flex-col gap-4">
              <span className="text-xs text-text-secondary font-display font-semibold">
                Adjust Variables (Simulate Client Use-case)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {template.variables.map((variable) => (
                  <div key={variable.name} className="flex flex-col items-start gap-1" id={`playground-var-${variable.name}`}>
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">
                      {variable.name.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <input
                      id={`input-var-${variable.name}`}
                      type="text"
                      className="w-full bg-surface-card border border-stone-200 focus:border-primary-blue/50 rounded-lg p-2.5 text-xs text-text-secondary font-sans focus:outline-none focus:ring-1 focus:ring-primary-blue/10 placeholder-stone-400 transition-all duration-200"
                      placeholder={variable.placeholder}
                      value={variables[variable.name] || ''}
                      onChange={(e) => handleVariableChange(variable.name, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt View Board */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-display font-bold text-text-secondary">
                <span>Compiled Prompt Core</span>
                <button
                  id="playground-copy-btn"
                  onClick={handleCopyPrompt}
                  className="px-2.5 py-1 text-[11px] rounded bg-surface-card border border-stone-200 hover:border-stone-300 text-text-secondary hover:text-text-white font-sans flex items-center gap-1.5 cursor-pointer"
                >
                  {isCopied ? <Check size={12} className="text-emerald-700" /> : <Lightbulb size={12} />}
                  {isCopied ? 'Copied' : 'Copy Full Template'}
                </button>
              </div>

              {/* Dynamic Read-Only Output Prompt block */}
              <div className="p-4 rounded-xl bg-bg-primary border border-stone-200 font-mono text-[11px] sm:text-xs text-text-secondary leading-relaxed max-h-[160px] overflow-y-auto select-all text-left">
                <span className="text-primary-blue font-bold block mb-1">{"/* System Instruction */"}</span>
                <p className="mb-3 text-text-secondary">{template.systemPrompt}</p>

                <span className="text-primary-blue font-bold block mb-1">{"/* Dynamic User Prompt Input */"}</span>
                <p className="text-text-white italic">"{compiledPrompt}"</p>
              </div>
            </div>

            {/* Trigger Compile Loop button */}
            <button
              id="playground-execute"
              onClick={handleCompileAndRun}
              disabled={isRunning}
              className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isRunning
                  ? 'bg-stone-100 border border-stone-200 text-stone-600 cursor-wait'
                  : 'bg-[#0f3d3e] text-white hover:opacity-90'
              }`}
            >
              {isRunning ? (
                <>
                  <Bot size={16} className="animate-spin text-primary-blue" />
                  Generating Pipeline Execution Tokens...
                </>
              ) : (
                <>
                  <Play size={15} />
                  Compute Prompt Pipeline Output
                </>
              )}
            </button>

            {/* Terminal Response Block */}
            <AnimatePresence>
              {showOutput && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-stone-200 bg-bg-primary overflow-hidden flex flex-col text-left"
                >
                  <div className="flex items-center justify-between px-4 py-2 border-b border-stone-200 bg-bg-primary font-mono text-[9px] text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
                      COMPILER_RESPONSE OK
                    </span>
                    <span>LATENCY: 1.1s • TEMP: 0.2</span>
                  </div>

                  <div className="p-5 font-mono text-[11px] sm:text-xs text-text-white overflow-x-auto whitespace-pre-wrap select-all leading-relaxed bg-bg-primary max-h-[300px] overflow-y-auto custom-scrollbar">
                    {template.outputResponse}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Hand: Interactive Agentic Workflow (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-6" id="agentic-pipeline">
          <div className="p-6 rounded-2xl bg-surface-card border border-stone-200 backdrop-blur-md flex flex-col gap-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-text-secondary font-mono tracking-wider uppercase">
              <GitBranch size={14} className="text-primary-blue" />
              Agentic Pipeline Loop
            </div>

            <p className="text-xs text-text-secondary leading-relaxed font-sans mt-1">
              How a production client request travels through a strict, multi-agent validation loop designed by an executive software engineer. Hover over each layer to view instructions:
            </p>

            {/* Vertical Flow Steps */}
            <div className="flex flex-col gap-4 mt-2">
              {workflowSteps.map((step, sIdx) => {
                const isActive = activeWorkflowStep === step.id;

                return (
                  <div
                    key={step.id}
                    id={`workflow-step-${step.id}`}
                    onMouseEnter={() => setActiveWorkflowStep(step.id)}
                    onMouseLeave={() => setActiveWorkflowStep(null)}
                    className={`relative p-3.5 rounded-xl border transition-all duration-300 font-sans cursor-pointer ${
                      isActive
                        ? `${step.color} border-stone-300 scale-[1.02] shadow-md`
                        : 'bg-bg-primary border-stone-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-surface-card flex items-center justify-center font-mono font-bold text-[10px] text-stone-600 border border-stone-200">
                        {step.id}
                      </div>

                      <span className="font-semibold text-xs sm:text-sm text-text-white">
                        {step.title}
                      </span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-[11px] text-stone-600 mt-2.5 leading-relaxed pl-9 border-l border-stone-300"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
