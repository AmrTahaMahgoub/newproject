import {ImageSourcePropType} from 'react-native';
import {images} from '../../assets/imgs';

export interface AdverListImagesType {
  id: string;
  source: ImageSourcePropType;
}
export const AdverListImages: AdverListImagesType[] = [
  {id: '1', source: images.football100},
  {id: '2', source: images.football100},
  {id: '3', source: images.football100},
  {id: '4', source: images.football100},
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
  {
    id: '1',
    source: images.football100,
    date: 'Mon, 12 Nov 2022 / 7:30 pm',
    location: 'New Cairo, Cairo, Egypt',
    title: 'Agreement between Boubyan Bank and Hisbah',
  },
  {
    id: '2',
    source: images.jaredd,
    date: 'Mon, 12 Nov 2022 / 7:30 pm',
    location: 'New Cairo, Cairo, Egypt',
    title: 'Agreement between Boubyan Bank and Hisbah',
  },
  {
    id: '3',
    source: images.owned,
    date: 'Mon, 12 Nov 2022 / 7:30 pm',
    location: 'New Cairo, Cairo, Egypt',
    title: 'Agreement between Boubyan Bank and Hisbah',
  },
  {
    id: '4',
    source: images.football100,
    date: 'Mon, 12 Nov 2022 / 7:30 pm',
    location: 'New Cairo, Cairo, Egypt',
    title: 'Agreement between Boubyan Bank and Hisbah',
  },
];
/************ */
export type Section = {
  image: ImageSourcePropType;
  id: string;
  text: string;
};

export const DATA: Section[] = [
  {id: '1', image: images.jaredd, text: 'Graduation'},
  {id: '2', image: images.pexels, text: 'E-learning'},
  {id: '3', image: images.jaredd, text: 'Best Books'},
  {id: '4', image: images.owned, text: 'Corona'},
  {id: '5', image: images.jaredd, text: 'Dr.Robot'},
  {id: '6', image: images.owned, text: 'Graduation'},
];
/************ */
export type FeaturesAndAnalysisType = {
  id: string;
  image: any;
  title: string;
  name: string;
};
export const FeaturesAndAnalysisData: FeaturesAndAnalysisType[] = [
  {
    id: '1',
    image: images.motorbike,
    title: 'Russia warns Lithuania over rail transit blockade',
    name: 'by Ahmed Khaled',
  },
  {
    id: '2',
    image: images.motorbike,
    title: 'Mining giant Glencore admits to bribery in Africa',
    name: 'by Ahmed Taha',
  },
  {
    id: '3',
    image: images.swimming,
    title: 'Russia warns Lithuania over rail transit blockade',
    name: 'by Amr Taha',
  },
  {
    id: '4',
    image: images.swimming,
    title: 'Russia warns Lithuania over rail transit blockade',
    name: 'by Ahmed Khaled',
  },
  {
    id: '5',
    image: images.motorbike,
    title: 'Russia warns Lithuania over rail transit blockade',
    name: 'by Ahmed Taha',
  },
  {
    id: '6',
    image: images.swimming,
    title: 'Russia warns Lithuania over rail transit blockade',
    name: 'by Amr Taha',
  },
];
/********* */
export type CategoriesDataType = {
  id: string;
  image: any;

  title: string;
};
export const CategoriesData: CategoriesDataType[] = [
  {id: '1', image: images.motorbike, title: 'Funny'},
  {id: '2', image: images.motorbike, title: 'Economic'},
  {id: '3', image: images.motorbike, title: 'sports'},
  {id: '4', image: images.motorbike, title: 'Funny'},
];
/****** */
export type WorldsDataType = {
  id: string;
  image: any;

  title: string;
};
export const WorldsData:WorldsDataType[] = [
  {id: '1', image: images.tedex, title: 'Yunni has arrived in Saudi Arabia'},
  {id: '2', image: images.racing, title: 'Yunni has arrived in Saudi Arabia'},
  {id: '3', image: images.tedex, title: 'Yunni has arrived in Saudi Arabia'},
  {id: '4', image: images.racing, title: 'Yunni has arrived in Saudi Arabia'},
];
/********** */
export type SponsersDataType = {
  id: string;
  image: any;

  name: string;
};
export const SponsersData: SponsersDataType[] = [
  {id: '1', image: images.person1, name: 'Nabil Farouk'},
  {id: '2', image: images.person2, name: 'Ahmed Morad'},
  {id: '3', image: images.person3, name: 'Ahmed Khaled'},
  {id: '4', image: images.person1, name: 'Nabil Farouk'},
];
/***** */
export type UsersDataType = {
  id: string;
  image: any;

  name: string;
};
export const UsersData: UsersDataType[] = [
  {id: '1', image: images.person1, name: 'Nabil Farouk'},
];
/***** */
export type CategoriesTemp3DataType = {
  id: string;
  image: any;

  title: string;
};
export const CategoriesTemp3Data: CategoriesTemp3DataType[] = [
  {id: '1', image: images.luggage, title: 'Funny'},
  {id: '2', image: images.chatbubbles, title: 'Economic'},
  {id: '3', image: images.sports, title: 'sports'},
  {id: '4', image: images.chatbubbles, title: 'Funny'},
  {id: '5', image: images.luggage, title: 'Funny'},
  {id: '6', image: images.chatbubbles, title: 'Economic'},
  {id: '7', image: images.sports, title: 'sports'},
  {id: '8', image: images.chatbubbles, title: 'Funny'},
];

/*** */
export type PopularTemp3DataType = {
  id: string;
  image: any;
  comments: string;
  likes: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  duration:string
};
export const PopularTemp3Data: PopularTemp3DataType[] = [
  {
    id: '1',
    image: images.motorbike,
    title: 'Heavy fighting as Russi...9999999999999999999',
    subtitle:
      'Lorem ipsum dolor sit amet\n consetetur sadipscing elitr, sed diam nonumy..',
    comments: "5 comments",
    likes: "3 likes",
    date: 'Mon, 12 Nov 2022 / 7:30 pm',
    location: 'New Cairo, Cairo, Egypt',
    duration:"6 days ago"
  },
  {
    id: '2',
    image: images.owned,
    title: 'Heavy fighting as Russi...9999999999999999999',
    subtitle:
      'Lorem ipsum dolor sit amet,\n consetetur sadipscing elitr, sed diam nonumy..',
      comments: "5 comments",
      likes: "3 likes",
    date: 'Mon, 12 Nov 2022 / 7:30 pm',
    location: 'New Cairo, Cairo, Egypt',
    duration:"6 days ago"
  },
  {
    id: '3',
    image: images.motorbike,
    title: 'Heavy fighting as Russi...9999999999999999999',
    subtitle:
    'Lorem ipsum dolor sit amet,\n consetetur sadipscing elitr, sed diam nonumy..',
    comments: "5 comments",
    likes: "3 likes",
    date: 'Mon, 12 Nov 2022 / 7:30 pm',
    location: 'New Cairo, Cairo, Egypt',
    duration:"6 days ago"
  },
  {
    id: '4',
    image: images.motorbike,
    title: 'Heavy fighting as Russi...9999999999999999999',
    subtitle:
    'Lorem ipsum dolor sit amet,\n consetetur sadipscing elitr, sed diam nonumy..',
    comments: "5 comments",
    likes: "3 likes",
    date: 'Mon, 12 Nov 2022 / 7:30 pm',
    location: 'New Cairo, Cairo, Egypt',
    duration:"6 days ago"
  },
];
