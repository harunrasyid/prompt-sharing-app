"use client";

import { useEffect, useState } from "react";
import { getProviders, useSession } from "next-auth/react";

export default function useProviders() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const initializeProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    initializeProviders();
  }, []);

  return {
    providers,
    session,
  };
}
