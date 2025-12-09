import React from 'react';

interface JsonViewerProps {
  data: any;
  title?: string;
  className?: string;
}

const JsonViewer: React.FC<JsonViewerProps> = ({ data, title, className = '' }) => {
  const jsonString = JSON.stringify(data, null, 2);

  // Simple syntax highlighting via regex
  const highlight = (json: string) => {
    if (!json) return '';
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        let cls = 'text-purple-400'; // number
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'text-blue-400 font-semibold'; // key
          } else {
            cls = 'text-green-400'; // string
          }
        } else if (/true|false/.test(match)) {
          cls = 'text-orange-400'; // boolean
        } else if (/null/.test(match)) {
          cls = 'text-gray-400'; // null
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
  };

  return (
    <div className={`flex flex-col bg-gray-950 rounded-lg overflow-hidden border border-gray-800 shadow-lg ${className}`}>
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-xs font-mono text-gray-400 uppercase tracking-wider border-b border-gray-700 flex justify-between items-center">
          <span>{title}</span>
          <span className="text-gray-500">{new Blob([JSON.stringify(data)]).size} bytes</span>
        </div>
      )}
      <pre 
        className="p-4 text-xs md:text-sm font-mono overflow-auto custom-scrollbar flex-1"
        dangerouslySetInnerHTML={{ __html: highlight(jsonString) }}
      />
    </div>
  );
};

export default JsonViewer;