export interface Plant {
  id: string;
  common_name: string;
  scientific_name: string;
  family: string;
  genus: string;
  description: string;
  default_image?: {
    thumbnail: string;
  };
  image_url?: string; // Añadir la propiedad image_url
}
