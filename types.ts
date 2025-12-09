export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ProcessingStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed';
  data?: any;
  timestamp?: number;
}

export interface TransactionLog {
  id: string;
  requestPayload: any;
  responsePayload: any;
  rawPrompt: string;
  parsedOutput: string;
  steps: ProcessingStep[];
}

export enum ViewMode {
  CHAT = 'CHAT',
  SPLIT = 'SPLIT',
  DEBUG = 'DEBUG'
}