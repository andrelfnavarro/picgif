export interface IGif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
  rating: 'g' | 'pg' | 'pg-13' | 'r';
  bitly_url: string;
}
