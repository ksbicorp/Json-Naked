import React, { useState, useEffect, useRef } from 'react';
import { Send, Cpu, MessageSquare, Layout, Info, PlayCircle, Terminal } from 'lucide-react';
import { ChatMessage, TransactionLog } from './types';
import { sendMessageToGemini } from './services/gemini';
import JsonViewer from './components/JsonViewer';
import WorkflowStep from './components/WorkflowStep';

// Default mock state for the educational view before any interaction
const INITIAL_TRANSACTION: TransactionLog = {
  id: 'init',
  requestPayload: null,
  responsePayload: null,
  rawPrompt: '',
  parsedOutput: '',
  steps: []
};

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState<TransactionLog>(INITIAL_TRANSACTION);
  const [workflowStage, setWorkflowStage] = useState<0 | 1 | 2 | 3 | 4>(0); // 0: Idle, 1: Input, 2: Request, 3: Response, 4: Render
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSend = async () => {
    if (!prompt.trim() || isLoading) return;

    // Reset workflow visualization
    setWorkflowStage(1);
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: prompt,
      timestamp: Date.now()
    };

    setHistory(prev => [...prev, newMessage]);
    setPrompt('');
    setIsLoading(true);

    // Initial Transaction State for Visualization
    setCurrentTransaction({
      id: newMessage.id,
      requestPayload: null, // Will be populated in next stage
      responsePayload: null,
      rawPrompt: newMessage.text,
      parsedOutput: '',
      steps: []
    });

    // Simulate delay for educational purposes to show "Step 1: Input Analysis"
    await new Promise(r => setTimeout(r, 600));

    // Call API
    setWorkflowStage(2); // Show Request Construction
    const apiKey = process.env.API_KEY || ''; // Injected by framework
    
    // We actually make the call now, but the UI shows "Constructing JSON..."
    const result = await sendMessageToGemini(apiKey, newMessage.text, history);
    
    // Update Transaction with Request Data immediately so user sees what went out
    setCurrentTransaction(prev => ({
      ...prev,
      requestPayload: result.requestPayload
    }));

    // Artificial delay to let the user read the "Request JSON" before showing response
    await new Promise(r => setTimeout(r, 1200));

    if (result.success) {
      setWorkflowStage(3); // Show Response
      
      setCurrentTransaction(prev => ({
        ...prev,
        responsePayload: result.responsePayload,
        parsedOutput: result.text || ''
      }));

      // Another short delay for visual pacing
      await new Promise(r => setTimeout(r, 800));

      setWorkflowStage(4); // Show Final Render
      
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: result.text || "Metin döndürülmedi",
        timestamp: Date.now()
      };
      
      setHistory(prev => [...prev, responseMessage]);
    } else {
      // Handle Error State in visualization
       setCurrentTransaction(prev => ({
        ...prev,
        responsePayload: result.responsePayload,
        parsedOutput: "Hata oluştu"
      }));
      setWorkflowStage(3);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-900 text-gray-100">
      
      {/* LEFT PANEL: Chat Interface */}
      <div className="flex flex-col w-full lg:w-1/3 border-r border-gray-800 h-[50vh] lg:h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 bg-gray-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-bold text-lg tracking-tight">Gemini Sohbet</h1>
          </div>
          <span className="text-xs font-mono bg-blue-900/30 text-blue-400 px-2 py-1 rounded border border-blue-800">
            gemini-3-pro-preview
          </span>
        </div>

        {/* Messages Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-gray-900/50">
          {history.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-60">
              <Cpu className="w-12 h-12 mb-2" />
              <p className="text-sm">Nasıl çalıştığını görmek için bir sohbet başlatın.</p>
            </div>
          )}
          
          {history.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-800 text-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start animate-pulse">
               <div className="bg-gray-800 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                 <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                 <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                 <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
               </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-gray-900 border-t border-gray-800">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Bir şey sorun (ör. 'Kuantum fiziğini açıkla')..."
              className="w-full bg-gray-800 text-white rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-14 custom-scrollbar"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !prompt.trim()}
              className="absolute right-2 top-2 p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">
            Algoritmayı görselleştirmek için bir mesaj yazın.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL: Algorithm Visualization */}
      <div className="flex flex-col w-full lg:w-2/3 bg-black h-[50vh] lg:h-full border-t lg:border-t-0 lg:border-l border-gray-800">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-800 bg-gray-950 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-green-500" />
            <h2 className="font-bold text-lg text-gray-200">Çalışma Döngüsü</h2>
          </div>
          <div className="flex gap-4 text-xs text-gray-500 font-mono">
            <div className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}></div>
              {isLoading ? 'İŞLENİYOR' : 'BOŞTA'}
            </div>
          </div>
        </div>

        {/* Visualization Canvas */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar relative">
            
            {/* Introductory State */}
            {workflowStage === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
                <Layout className="w-16 h-16 opacity-20" />
                <h3 className="text-xl font-medium text-gray-400">Girdi Bekleniyor...</h3>
                <p className="max-w-md text-center text-sm">
                  Doğal dilin JSON'a nasıl dönüştürüldüğünü, LLM tarafından nasıl işlendiğini ve size nasıl geri sunulduğunu görmek için sohbete bir mesaj gönderin.
                </p>
              </div>
            )}

            {/* Workflow Steps */}
            {workflowStage > 0 && (
              <div className="max-w-4xl mx-auto pt-4">
                
                {/* STEP 1: NATURAL LANGUAGE INPUT */}
                <WorkflowStep 
                  stepNumber={1}
                  title="Doğal Dil Girdisi"
                  description="Kullanıcının ham metni giriş alanından alınır. Bu, yapılandırılmamış insan dilidir."
                  status={workflowStage === 1 ? 'active' : 'completed'}
                  data={{
                    input: currentTransaction.rawPrompt,
                    timestamp: new Date().toISOString(),
                    user: "öğrenci"
                  }}
                />

                {/* STEP 2: JSON SERIALIZATION (REQUEST) */}
                {(workflowStage >= 2) && (
                  <WorkflowStep 
                    stepNumber={2}
                    title="JSON Serileştirme ve API İsteği"
                    description="Uygulama, doğal dili Gemini API'sinin gerektirdiği yapılandırılmış bir JSON nesnesine sarar. 'contents' dizi yapısına ve 'role' atamasına dikkat edin."
                    status={workflowStage === 2 ? 'active' : workflowStage > 2 ? 'completed' : 'idle'}
                    data={currentTransaction.requestPayload}
                  />
                )}

                {/* STEP 3: API RESPONSE (RAW JSON) */}
                {(workflowStage >= 3) && (
                  <WorkflowStep 
                    stepNumber={3}
                    title="Sunucu Yanıtı (Ham JSON)"
                    description="Gemini sunucusu jetonları (token) işler ve karmaşık bir JSON nesnesi döndürür. Bu, güvenlik derecelendirmelerini, aday yanıtları ve kullanım meta verilerini içerir."
                    status={workflowStage === 3 ? 'active' : workflowStage > 3 ? 'completed' : 'idle'}
                    data={currentTransaction.responsePayload}
                  />
                )}

                {/* STEP 4: EXTRACTION & RENDER */}
                {(workflowStage >= 4) && (
                  <WorkflowStep 
                    stepNumber={4}
                    title="Ayrıştırma ve Doğal Dil Çıktısı"
                    description="Uygulama JSON'u ayrıştırır, `candidates[0].content.parts[0].text` kısmını çıkarır ve kullanıcıya doğal dil olarak geri sunar."
                    status={workflowStage === 4 ? 'completed' : 'idle'}
                    data={{
                      extracted_text: currentTransaction.parsedOutput,
                      render_target: "SohbetPenceresi.DOM"
                    }}
                  />
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default App;