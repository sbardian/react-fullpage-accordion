export interface Item {
  title: string;
  itemId: number;
  top: string;
  middle: string;
  bottom: string;
  imageUrl: string;
  link: string;
}

export interface FullpageAccordionProps {
  items: Item[];
  height?: string;
  textStyle?: CSSProperties;
}

export interface PanelProps {
  children: any;
  height?: string;
  item: Item;
  activePanel: number;
  onClick: () => void;
}

export interface HandleClick {
  (id: number): void;
}
