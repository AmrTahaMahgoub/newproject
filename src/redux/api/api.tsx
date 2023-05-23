import { ImageSourcePropType } from 'react-native';
import { images } from '../../assets/imgs';

export interface AdverListImagesType {
  id: string;
  source: ImageSourcePropType;
}
export const AdverListImages: AdverListImagesType[] = [
  { id: '1', source: images.football100 },
  { id: '2', source: images.football100 },
  { id: '3', source: images.football100 },
  { id: '4', source: images.football100 },
];
/*************** */
export interface AdverListImagesWithDateType {
  id: string;
  source: any;
  date: string;
  location: string;
  title: string;
}
export const AdverListImagesWithDate: AdverListImagesWithDateType[] = [
  { id: '1', source: images.football100, date: "Mon, 12 Nov 2022 / 7:30 pm", location: "New Cairo, Cairo, Egypt", title: "Agreement between Boubyan Bank and Hisbah" },
  { id: '2', source: images.jaredd, date: "Mon, 12 Nov 2022 / 7:30 pm", location: "New Cairo, Cairo, Egypt", title: "Agreement between Boubyan Bank and Hisbah" },
  { id: '3', source: images.owned, date: "Mon, 12 Nov 2022 / 7:30 pm", location: "New Cairo, Cairo, Egypt", title: "Agreement between Boubyan Bank and Hisbah" },
  { id: '4', source: images.football100, date: "Mon, 12 Nov 2022 / 7:30 pm", location: "New Cairo, Cairo, Egypt", title: "Agreement between Boubyan Bank and Hisbah" },
];
/************ */
export type Section = {
  image: ImageSourcePropType;
  id: string;
  text: string;
};

export const DATA: Section[] = [
  { id: '1', image: images.jaredd, text: 'Graduation' },
  { id: '2', image: images.pexels, text: 'E-learning' },
  { id: '3', image: images.jaredd, text: 'Best Books' },
  { id: '4', image: images.owned, text: 'Corona' },
  { id: '5', image: images.jaredd, text: 'Dr.Robot' },
  { id: '6', image: images.owned, text: 'Graduation' },
];
/************ */
export type FeaturesAndAnalysisType = {
  id: string;
  image: any;
  title: string,
  name: string
}
export const FeaturesAndAnalysisData: FeaturesAndAnalysisType[] = [
  { id: '1', image: images.swimming, title: "Russia warns Lithuania over rail transit blockade", name: " by Ahmed Khaled" },
  { id: '2', image: images.motorbike, title: "Russia warns Lithuania over rail transit blockade", name: " by Ahmed Taha" },
  { id: '3', image: images.swimming, title: "Russia warns Lithuania over rail transit blockade", name: " by Amr Taha" },
  { id: '4', image: images.swimming, title: "Russia warns Lithuania over rail transit blockade", name: " by Ahmed Khaled" },
  { id: '5', image: images.motorbike, title: "Russia warns Lithuania over rail transit blockade", name: " by Ahmed Taha" },
  { id: '6', image: images.swimming, title: "Russia warns Lithuania over rail transit blockade", name: " by Amr Taha" },

];