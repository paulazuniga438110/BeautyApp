export type Service = {
  id: string;
  icon: string;
  title: string;
  short: string;
  detail: string;
  price: string;
  audience: string;
};

export const SERVICES: Service[] = [
  {
    id: 'unas',
    icon: '💅',
    title: 'Uñas',
    short: 'Diseños y estilos para manos y pies.',
    detail: 'Manicure, pedicure y diseños personalizados.',
    price: 'Desde $30.000',
    audience: 'Hombres y mujeres',
  },
  {
    id: 'cabello',
    icon: '💇‍♀️',
    title: 'Cabello',
    short: 'Tintes, cortes e hidrataciones.',
    detail: 'Cortes, tintes y distintos estilos según lo que busques.',
    price: 'Desde $25.000',
    audience: 'Hombres y mujeres',
  },
  {
    id: 'keratinas',
    icon: '✨',
    title: 'Keratinas',
    short: 'Tratamientos para el cuidado del cabello.',
    detail: 'Alisado y control del frizz para un cabello suave y manejable.',
    price: 'Desde $120.000',
    audience: 'Hombres y mujeres',
  },
  {
    id: 'hidratacion',
    icon: '💧',
    title: 'Hidratación',
    short: 'Para mantener tu cabello saludable.',
    detail: 'Tratamiento para cabello seco, opaco o dañado.',
    price: 'Desde $50.000',
    audience: 'Hombres y mujeres',
  },
];

// Cambia por tu número real, con código de país (Colombia = 57)
export const WHATSAPP_URL =
  'https://wa.me/qr/25IJ2PFPNDXXJ1';