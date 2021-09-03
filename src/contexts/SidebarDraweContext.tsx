import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";

interface SidebarDrawerProdiverProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProdiver({
  children,
}: SidebarDrawerProdiverProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSideBarDrawer = () => useContext(SidebarDrawerContext);
