export interface Image {
  path: string;
  name: string;
  format: string;
  height: number;
  width: number;
  parallax?: number[];
}

export interface Images {
  images: {
    path: string;
    name: string;
    format: string;
    height: number;
    width: number;
    parallax?: number[];
  }[];
}
