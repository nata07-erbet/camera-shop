import { TypeMap, CategoryMap, LevelMap } from '../const/const';

type TypeEnum = typeof TypeMap[keyof typeof TypeMap];
type CategoryEnum = typeof CategoryMap[keyof typeof CategoryMap];

type TCamera = {
  id: number;
  name: string;
  vendorCode: string;
  type: TypeEnum;
  category: CategoryEnum;
  description: string;
  level: typeof LevelMap[keyof typeof LevelMap];
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
};

type TReview = {
  id: string
  createAt: string
  cameraId: number
  userName: string
  advantage: string
  disadvantage: string
  review: string
  rating: number
}

export type { TCamera, TReview};
