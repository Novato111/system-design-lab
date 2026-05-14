 import { 
  Menu, Share, Download, Play, Plus, Minus, Maximize,
  Layers, Globe, Shield, Database, Zap, HardDrive, Network, 
  MonitorSmartphone, Activity, Box, Lock, ChevronDown, CheckCircle2,
  Server, Smartphone, BoxSelect, AlertCircle, TrendingUp
} from "lucide-react";



   

export default function DashboardCard() {
  return (
   <div className="w-full overflow-hidden">
  {/* The container is forced to be 1200px wide, but scaled down to fit */}
  <div className="relative h-[760px] w-[1200px] origin-top-left transform scale-[0.3] sm:scale-[0.5] md:scale-[0.7] lg:scale-100">  
      {/* --- HEADER --- */}
      <header className="flex h-14 items-center justify-between border-b border-white/5 bg-[#101014] px-4">
        <div className="flex items-center gap-4">
          <button className="grid size-8 place-items-center rounded-md bg-white/5 text-zinc-400 hover:text-white transition-colors">
            <Menu className="size-4" />
          </button>
          <div className="flex items-center gap-2 border-l border-white/10 pl-4">
            <div className="grid size-6 place-items-center rounded bg-white/10">
              <BoxSelect className="size-3 text-zinc-300" />
            </div>
            <span className="text-sm font-semibold text-white flex items-center gap-1 cursor-pointer">
              Design Uber <ChevronDown className="size-3 text-zinc-500" />
            </span>
          </div>
          <div className="flex items-center gap-1.5 ml-4">
            <div className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-xs text-zinc-500">Auto-saved</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/5">
            <Share className="size-3.5" /> Share
          </button>
          <button className="flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/5">
            <Download className="size-3.5" /> Export
          </button>
          <button className="flex items-center gap-2 rounded-md bg-[#252530] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#30303e]">
            <Play className="size-3.5" /> Run Evaluation
          </button>
        </div>
      </header>

      {/* --- MAIN BODY --- */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT SIDEBAR: Components */}
        <aside className="w-[240px] border-r border-white/5 bg-[#101014] flex flex-col p-4">
          <h3 className="mb-4 text-xs font-semibold text-zinc-400">Components</h3>
          <div className="flex-1 space-y-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
            {[
              { name: "Load Balancer", icon: Network },
              { name: "API Gateway", icon: Shield },
              { name: "Web Server", icon: Server },
              { name: "Application Server", icon: Layers },
              { name: "Database", icon: Database },
              { name: "Cache", icon: Zap, active: true },
              { name: "Message Queue", icon: Box },
              { name: "Object Storage", icon: HardDrive },
              { name: "CDN", icon: Globe },
              { name: "DNS", icon: Globe },
              { name: "Monitoring", icon: Activity },
              { name: "Auth Service", icon: Lock },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] transition-colors cursor-grab ${
                  item.active ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                }`}
              >
                {item.active ? <CheckCircle2 className="size-4" /> : <item.icon className="size-4" />}
                {item.name}
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-lg border border-white/10 bg-white/5 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors">
            More Components
          </button>
        </aside>

        {/* CENTER: Canvas */}
        <main className="relative flex-1 bg-[#0a0a0c] overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Canvas Controls */}
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-md border border-white/10 bg-[#15151a] p-1 z-10">
            <button className="grid size-7 place-items-center rounded hover:bg-white/10"><BoxSelect className="size-4 text-zinc-400" /></button>
            <button className="grid size-7 place-items-center rounded hover:bg-white/10"><Menu className="size-4 text-zinc-400" /></button>
            <div className="h-4 w-px bg-white/10 mx-1" />
            <button className="grid size-7 place-items-center rounded hover:bg-white/10"><Activity className="size-4 text-zinc-400" /></button>
          </div>
          
          <div className="absolute right-4 top-4 flex items-center gap-2 z-10">
            <div className="flex items-center rounded-md border border-white/10 bg-[#15151a] p-1 text-xs text-zinc-400">
              <button className="grid size-7 place-items-center rounded hover:bg-white/10 hover:text-white"><Minus className="size-3" /></button>
              <span className="w-10 text-center">100%</span>
              <button className="grid size-7 place-items-center rounded hover:bg-white/10 hover:text-white"><Plus className="size-3" /></button>
            </div>
            <button className="grid size-9 place-items-center rounded-md border border-white/10 bg-[#15151a] text-zinc-400 hover:bg-white/10 hover:text-white">
              <Maximize className="size-4" />
            </button>
          </div>

          {/* Canvas Nodes (Absolute positioned for scale) */}
          <div className="absolute inset-0">
            {/* Connection Lines (CSS borders representing SVG paths) */}
            <div className="absolute left-[12%] top-[40%] w-[12%] h-px bg-white/20" /> {/* Client to DNS */}
            <div className="absolute left-[28%] top-[40%] w-[8%] h-px bg-white/20" /> {/* DNS to ALB */}
            
            {/* ALB branches */}
            <div className="absolute left-[41%] top-[25%] w-[8%] h-[15%] border-l border-t border-sky-500/40 rounded-tl-lg" />
            <div className="absolute left-[41%] top-[40%] w-[8%] h-[15%] border-l border-b border-sky-500/40 rounded-bl-lg" />
            
            {/* Gateway branches to Web Server & App Server */}
            <div className="absolute left-[54%] top-[20%] w-[3%] h-[5%] border-l border-t border-sky-500/40 rounded-tl-lg" />
            <div className="absolute left-[57%] top-[20%] w-[4%] h-px bg-emerald-500/40" />
            <div className="absolute left-[54%] top-[25%] w-[8%] h-[15%] border-l border-b border-sky-500/40 rounded-bl-lg" />
            <div className="absolute left-[54%] top-[40%] w-[8%] h-px bg-sky-500/40" />
            <div className="absolute left-[54%] top-[40%] w-[8%] h-[15%] border-l border-b border-sky-500/40 rounded-bl-lg" />

            {/* App Server branches to DBs and Cache */}
            <div className="absolute left-[67%] top-[15%] w-[8%] h-[25%] border-l border-t border-dashed border-red-500/40 rounded-tl-lg" />
            <div className="absolute left-[67%] top-[30%] w-[8%] h-[10%] border-l border-t border-indigo-500/40 rounded-tl-lg" />
            <div className="absolute left-[67%] top-[40%] w-[8%] h-px bg-amber-500/40" />
            <div className="absolute left-[67%] top-[40%] w-[8%] h-[12%] border-l border-b border-orange-500/40 rounded-bl-lg" />
            <div className="absolute left-[67%] top-[40%] w-[8%] h-[25%] border-l border-b border-dashed border-emerald-500/40 rounded-bl-lg" />
            
            {/* Bottom Monitoring branch */}
            <div className="absolute left-[12%] top-[40%] w-[2%] h-[25%] border-l border-b border-white/20 rounded-bl-lg" />
            <div className="absolute left-[14%] top-[65%] w-[33%] h-px bg-white/20" />


            {/* Nodes */}
            <Node type="gray" top="40%" left="12%" icon={MonitorSmartphone} label="Client" sub="Mobile / Web" />
            <Node type="gray" top="40%" left="28%" icon={Globe} label="DNS" sub="Route 53" />
            <Node type="blue" top="40%" left="41%" icon={Network} label="Load Balancer" sub="ALB" />
            
            <Node type="blue" top="25%" left="54%" icon={Shield} label="API Gateway" sub="Kong" />
            <Node type="blue" top="55%" left="54%" icon={Shield} label="API Gateway" sub="Kong" />
            
            <Node type="green" top="15%" left="61%" icon={Server} label="Web Server" sub="Nginx" />
            <Node type="blue" top="40%" left="67%" icon={Layers} label="Application Server" sub="Uber Service" />
            
            <Node type="red" top="15%" left="78%" icon={Zap} label="Cache" sub="Redis" />
            <Node type="indigo" top="30%" left="78%" icon={Database} label="User DB" sub="PostgreSQL" />
            <Node type="yellow" top="43%" left="78%" icon={Database} label="NoSQL DB" sub="DynamoDB" />
            <Node type="orange" top="55%" left="78%" icon={Box} label="Message Queue" sub="Kafka" />
            <Node type="green" top="68%" left="78%" icon={HardDrive} label="Object Storage" sub="S3" />
            
            <Node type="green" top="65%" left="49%" icon={Activity} label="Monitoring" sub="Prometheus" />
          </div>
        </main>

        {/* RIGHT SIDEBAR: Evaluation */}
        <aside className="w-[300px] border-l border-white/5 bg-[#101014] p-5 flex flex-col overflow-y-auto">
          <h3 className="mb-6 text-sm font-semibold text-white">Evaluation</h3>
          
          <div className="flex items-center gap-5 mb-8">
            <div className="relative grid size-[88px] place-items-center">
              {/* Score SVG Ring */}
              <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="264" strokeDashoffset="47.5" strokeLinecap="round" />
              </svg>
              <div className="text-center z-10">
                <div className="text-3xl font-bold text-white tracking-tighter">82</div>
                <div className="text-[10px] font-medium text-zinc-500">/100</div>
              </div>
            </div>
            <div className="flex-1 space-y-2 text-xs">
              {[
                { label: "Availability", score: "82/100", tone: "text-amber-400" },
                { label: "Scalability", score: "78/100", tone: "text-amber-400" },
                { label: "Security", score: "80/100", tone: "text-amber-400" },
                { label: "Performance", score: "82/100", tone: "text-amber-400" },
                { label: "Best Practices", score: "82/100", tone: "text-amber-400" },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between items-center">
                  <span className="text-zinc-400">{stat.label}</span>
                  <span className={`font-semibold ${stat.tone}`}>{stat.score}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-white">
            Good Start <span className="text-orange-500">🔥</span>
          </div>

          <h3 className="mb-4 text-xs font-semibold text-zinc-400">Top Issues</h3>
          <div className="space-y-4 mb-8">
            <IssueCard 
              icon={Network} 
              tone="red" 
              title="Single point of failure" 
              sub="Load Balancer" 
              severity="High" 
            />
            <IssueCard 
              icon={Zap} 
              tone="orange" 
              title="Missing Cache Layer" 
              sub="Add cache for DB" 
              severity="Medium" 
            />
            <IssueCard 
              icon={TrendingUp} 
              tone="blue" 
              title="No Auto Scaling" 
              sub="Add auto scaling group" 
              severity="Low" 
            />
          </div>

          <button className="mt-auto w-full rounded-lg border border-white/10 bg-white/[0.03] py-3 text-xs font-semibold text-white transition-colors hover:bg-white/[0.08]">
            View Full Report →
          </button>
        </aside>
      </div>

      {/* --- BOTTOM BAR --- */}
      <footer className="grid grid-cols-4 gap-4 border-t border-white/5 bg-[#101014] p-5">
        
        {/* Stat Cards */}
        <div className="col-span-2 grid grid-cols-4 gap-4">
          <StatBlock icon={BoxSelect} value="50,000+" label="Designs Created" tone="text-purple-400" />
          <StatBlock icon={CheckCircle2} value="98.7%" label="Satisfaction Rate" tone="text-blue-400" />
          <StatBlock icon={Activity} value="25K+" label="Engineers Learning" tone="text-zinc-300" />
          <StatBlock icon={Network} value="4.9/5" label="From 2,000+ Reviews" tone="text-orange-400" />
        </div>

        {/* AI Tutor */}
        <div className="col-span-1 flex flex-col justify-center rounded-xl border border-white/5 bg-[#15151a] p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="grid size-5 place-items-center rounded bg-zinc-800 text-xs font-bold text-white">A</div>
            <span className="text-sm font-semibold text-white">AI Tutor</span>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold text-zinc-400">Beta</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-zinc-400">3 suggestions available</span>
            <button className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-colors">
              Open Tutor →
            </button>
          </div>
        </div>

        {/* Simulation */}
        <div className="col-span-1 flex flex-col justify-center rounded-xl border border-white/5 bg-[#15151a] p-4 relative">
          <button className="absolute right-3 top-3 text-zinc-500 hover:text-white"><Plus className="size-3 rotate-45" /></button>
          <div className="flex items-center gap-2 mb-2">
            <Activity className="size-4 text-blue-400" />
            <span className="text-sm font-semibold text-white">Simulation</span>
          </div>
          <p className="text-[11px] text-zinc-500 mb-2">Last run 2 min ago</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-[11px] text-zinc-400">2 issues detected</span>
            <button className="text-xs font-medium text-white hover:text-zinc-300 transition-colors">
              View Timeline →
            </button>
          </div>
        </div>

      </footer>
    </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function Node({ 
  type, top, left, icon: Icon, label, sub 
}: { 
  type: "blue" | "green" | "red" | "indigo" | "yellow" | "orange" | "gray";
  top: string; 
  left: string; 
  icon: any; 
  label: string; 
  sub: string;
}) {
  // Define highly polished color palettes for each node type
  const styles = {
    blue: { 
      bg: "bg-sky-500/10", border: "border-sky-500/20", icon: "text-sky-400", 
      glow: "shadow-[0_0_20px_rgba(14,165,233,0.08)]" 
    },
    green: { 
      bg: "bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-400", 
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.08)]" 
    },
    red: { 
      bg: "bg-red-500/10", border: "border-red-500/20", icon: "text-red-400", 
      glow: "shadow-[0_0_20px_rgba(239,68,68,0.08)]" 
    },
    indigo: { 
      bg: "bg-indigo-500/10", border: "border-indigo-500/20", icon: "text-indigo-400", 
      glow: "shadow-[0_0_20px_rgba(99,102,241,0.08)]" 
    },
    yellow: { 
      bg: "bg-amber-500/10", border: "border-amber-500/20", icon: "text-amber-400", 
      glow: "shadow-[0_0_20px_rgba(245,158,11,0.08)]" 
    },
    orange: { 
      bg: "bg-orange-500/10", border: "border-orange-500/20", icon: "text-orange-400", 
      glow: "shadow-[0_0_20px_rgba(249,115,22,0.08)]" 
    },
    gray: { 
      bg: "bg-zinc-500/10", border: "border-zinc-500/20", icon: "text-zinc-400", 
      glow: "shadow-[0_0_20px_rgba(161,161,170,0.05)]" 
    },
  }[type];

  return (
    <div 
      className={`absolute group flex cursor-pointer flex-col gap-2 rounded-[12px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(24,24,27,0.8),rgba(14,14,17,0.9))] p-2.5 backdrop-blur-md transform -translate-x-1/2 -translate-y-1/2 w-[140px] z-20 transition-all duration-300 hover:scale-105 hover:bg-[linear-gradient(180deg,rgba(30,30,35,0.9),rgba(20,20,24,0.95))] hover:border-white/[0.15] hover:z-30 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.6)] ${styles.glow}`}
      style={{ top, left }}
    >
      <div className="flex items-start gap-3">
        {/* The Icon Box - colored and glowing based on type */}
        <div className={`grid size-8 shrink-0 place-items-center rounded-[8px] border transition-colors ${styles.border} ${styles.bg} ${styles.icon} group-hover:bg-white/10`}>
          <Icon className="size-4" />
        </div>
        
        {/* The Text - perfectly aligned and colored */}
        <div className="flex flex-col pt-0.5">
          <span className="text-[11px] font-semibold tracking-wide text-zinc-200 leading-tight transition-colors group-hover:text-white">
            {label}
          </span>
         
        </div>
      </div>
    </div>
  );
}

function IssueCard({ icon: Icon, tone, title, sub, severity }: any) {
  const tones: any = {
    red: "text-red-500 bg-red-500/10 border-red-500/20",
    orange: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    blue: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  };
  
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded border ${tones[tone]}`}>
        <Icon className="size-3" />
      </div>
      <div className="flex-1">
        <div className="text-xs font-semibold text-zinc-200">{title}</div>

      </div>
      <span className={`text-[10px] font-medium ${tones[tone].split(' ')[0]}`}>{severity}</span>
    </div>
  );
}

function StatBlock({ icon: Icon, value, label, tone }: any) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon className={`size-4 ${tone}`} />
        <span className="text-base font-bold text-white">{value}</span>
      </div>
      <span className="text-[10px] font-medium text-zinc-500 pl-5">{label}</span>
    </div>
  );
}

