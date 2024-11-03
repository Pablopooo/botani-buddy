export interface Plant {
  id: string;
  common_name: string;
  description: string;
  tipo: string;
  tips: string;
  image_url: string;
  scientific_name?: string; // Añadir opcional si ya no es obligatorio
  family?: string; // Añadir opcional si ya no es obligatorio
  genus?: string;
}
