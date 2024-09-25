import { ShieldQuestion } from 'lucide-react';
import { FC } from 'react';

import { Logo } from '@/components/shared/Logo';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { DefaultQueriesProps } from '@/types';

export const DefaultQueries: FC<DefaultQueriesProps> = ({ setQuery, mode }) => {
  const defaultRagQueries = [
    {
      query: 'What does PPP mean?',
      icon: <ShieldQuestion className="h-6 w-6 text-purple-400" />,
    },
    {
      query: 'Explain SC-5',
      icon: <ShieldQuestion className="h-6 w-6 text-purple-400" />,
    },
    {
      query: 'What security controls are generally applicable to space?',
      icon: <ShieldQuestion className="h-6 w-6 text-purple-400" />,
    },
    {
      query: 'Compare jamming attacks and firmware attacks',
      icon: <ShieldQuestion className="h-6 w-6 text-purple-400" />,
    },
  ];

  const defaultAgentQueries = [
    {
      query: 'What does PPP mean?',
      icon: <ShieldQuestion className="h-6 w-6 text-purple-400" />,
    },
    {
      query: 'Explain SC-5',
      icon: <ShieldQuestion className="h-6 w-6 text-purple-400" />,
    },
    {
      query: 'What security controls are generally applicable to space?',
      icon: <ShieldQuestion className="h-6 w-6 text-purple-400" />,
    },
    {
      query: 'Compare jamming attacks and firmware attacks',
      icon: <ShieldQuestion className="h-6 w-6 text-purple-400" />,
    },
  ];

  const getQueriesBasedOnMode = (mode: 'rag' | 'rag_agent') => {
    if (mode === 'rag') {
      return defaultRagQueries;
    } else if (mode === 'rag_agent') {
      return defaultAgentQueries;
    } else {
      throw new Error('Invalid mode');
    }
  };

  const defaultQueries = getQueriesBasedOnMode(mode);

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      <Logo width={150} height={150} disableLink={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl px-4">
        {defaultQueries.map(({ query, icon }, index) => (
          <Alert
            key={index}
            className="cursor-pointer hover:bg-zinc-700 flex flex-col items-start p-3 h-[100px]"
            onClick={() => setQuery(query)}
          >
            <div className="mb-2">{icon}</div>
            <AlertDescription className="text-sm text-left">
              {query}
            </AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  );
};
