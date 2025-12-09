import React from 'react';
import { ChevronDown, CheckCircle2, Circle, Loader2, ArrowRight } from 'lucide-react';
import JsonViewer from './JsonViewer';

interface WorkflowStepProps {
  stepNumber: number;
  title: string;
  description: string;
  status: 'idle' | 'active' | 'completed';
  data?: any;
  icon?: React.ReactNode;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ stepNumber, title, description, status, data, icon }) => {
  const isCompleted = status === 'completed';
  const isActive = status === 'active';
  
  return (
    <div className={`relative pl-8 pb-12 last:pb-0 border-l-2 transition-colors duration-500 ${isCompleted ? 'border-blue-500' : 'border-gray-700'}`}>
      {/* Connector Dot */}
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-all duration-500 bg-gray-900 flex items-center justify-center
        ${isCompleted ? 'border-blue-500 bg-blue-500' : isActive ? 'border-blue-400 animate-pulse' : 'border-gray-600'}
      `}>
        {isCompleted && <CheckCircle2 className="w-3 h-3 text-white" />}
        {isActive && <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
           <span className={`text-xs font-mono px-2 py-0.5 rounded border ${
             isActive || isCompleted ? 'bg-blue-900/30 text-blue-300 border-blue-800' : 'bg-gray-800 text-gray-500 border-gray-700'
           }`}>
             ADIM {stepNumber}
           </span>
           <h3 className={`font-semibold text-lg transition-colors ${isActive || isCompleted ? 'text-white' : 'text-gray-500'}`}>
             {title}
           </h3>
        </div>
        
        <p className="text-sm text-gray-400 max-w-xl">
          {description}
        </p>

        {/* Data Visualization Area */}
        {data && (
           <div className={`mt-2 transition-all duration-700 transform origin-top
             ${isActive || isCompleted ? 'opacity-100 scale-100 translate-y-0' : 'opacity-50 scale-95 translate-y-2 grayscale'}
           `}>
             <JsonViewer data={data} title="Veri İçeriği (Payload)" className="max-h-64" />
           </div>
        )}
      </div>
    </div>
  );
};

export default WorkflowStep;