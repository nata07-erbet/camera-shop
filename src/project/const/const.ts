const NavMap = {
  Catalog: 'Каталог',
  Guarantee: 'Гарантии',
  Delivery: 'Доставка',
  About: 'О компании'
};

const TypeMap = {
  collection:  'Коллекционная',
  moment: 'Моментальная',
  digital: 'Цифровая',
  film: 'Плёночная'
} as const;

const CategoryMap = {
  video: 'Видеокамера',
  photo: 'Фотоаппарат',
} as const;

const LevelMap = {
  zero: 'Нулевой',
  amateur: 'Любительский',
  professional: 'Профессиональный'
} as const;

const BASE_URL = 'https://camera-shop.accelerator.htmlacademy.pro/'

const ReqRoutes = {
  Cameras: '/cameras',
  CameraId: '2',
  Similar: 'similar',
  Reviews: 'reviews'
} as const;

const ALL_STARS = 5;

const TIME_OUT  = 5000;

export { NavMap, TypeMap, CategoryMap, LevelMap, ALL_STARS, BASE_URL, TIME_OUT, ReqRoutes };
