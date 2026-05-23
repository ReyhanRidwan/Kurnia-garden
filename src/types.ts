export interface SlideItem {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  dimensions?: string;
  client?: string;
}

export interface USPItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  iconName: string;
}
