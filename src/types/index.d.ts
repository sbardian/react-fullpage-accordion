export interface FullpageAccordionProps {
  height?: string;
  children: React.ReactNode;
}

export interface PanelProps {
  children: React.ReactNode;
  background?: string;
  itemId: string;
}

export type PanelClickFn = (itemId: string) => null;

export interface PanelContextProps {
  activePanel: string;
  panelClick: PanelClickFn;
}

export interface PanelProviderProps {
  children: React.ReactNode;
}

declare const FullpageAccordion: React.FC<FullpageAccordionProps>;
declare const Panel: React.FC<PanelProps>;
export { FullpageAccordion, Panel };
