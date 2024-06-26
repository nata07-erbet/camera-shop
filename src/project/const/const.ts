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


 export { NavMap, TypeMap, CategoryMap, LevelMap }
