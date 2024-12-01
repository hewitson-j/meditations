import { createContext, ReactNode, useContext, useState } from "react";

interface EntriesProviderProps {
  children: ReactNode;
}

const EntriesContext = createContext({});
const EntriesStateContext = createContext({});

export default function EntriesProvider({ children }: EntriesProviderProps) {
  const [loading, setLoading] = useState(true);

  return (
    <EntriesStateContext.Provider value={{ setLoading }}>
      <EntriesContext.Provider value={{ loading }}>
        {children}
      </EntriesContext.Provider>
    </EntriesStateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useEntriesContext = () => useContext(EntriesContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useEntriesStateContext = () => useContext(EntriesStateContext);
