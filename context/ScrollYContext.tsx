import React, { createContext, useState, useEffect } from "react";

interface ScrollYContextProps {
  children: React.ReactNode;
}

const ScrollYContext = createContext({});

const ScrollYContextProvider: React.FC<ScrollYContextProps> = ({
  children,
}: ScrollYContextProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollY(window.scrollY);
    });
  }, [scrollY]);

  return (
    <ScrollYContext.Provider value={[scrollY]}>
      {children}
    </ScrollYContext.Provider>
  );
};

export { ScrollYContext, ScrollYContextProvider };
