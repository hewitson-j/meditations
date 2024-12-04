import { createContext, ReactNode, useContext, useState } from "react";

interface EntriesProviderProps {
  children: ReactNode;
}

interface EntriesContextProps {
  loading: boolean;
  count: number;
  offset: number;
}

interface EntriesStateContextProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const EntriesContext = createContext<EntriesContextProps | undefined>(
  undefined
);
const EntriesStateContext = createContext<EntriesStateContextProps | undefined>(
  undefined
);

export default function EntriesProvider({ children }: EntriesProviderProps) {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(5);
  const [offset, setOffset] = useState(0);

  return (
    <EntriesStateContext.Provider value={{ setLoading, setCount, setOffset }}>
      <EntriesContext.Provider value={{ loading, count, offset }}>
        {children}
      </EntriesContext.Provider>
    </EntriesStateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useEntriesContext = () => {
  const context = useContext(EntriesContext);
  if (!context) {
    throw new Error("useEntriesContext must be used within an EntriesProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEntriesStateContext = () => {
  const context = useContext(EntriesStateContext);
  if (!context) {
    throw new Error("useEntriesContext must be used within an EntriesProvider");
  }
  return context;
};
