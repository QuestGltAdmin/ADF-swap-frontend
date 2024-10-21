import React, { createContext, useEffect, useState } from 'react'

export const WalletContext = createContext(null);


export function WalletContextProvider({ children, wallet }) {
  const [value, setValue] = useState(wallet);

  useEffect(() => {
    setValue(wallet);
  }, [wallet]);

  return (
    <WalletContext.Provider value={[value, setValue]} >
      {children}
    </WalletContext.Provider>
  )
}
