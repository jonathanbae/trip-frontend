import { IPlace } from './location';

export interface ITrip {
  id: number;
  name: string;
  place: IPlace[];
  // images
  // thumbnailIconUrl: string;
  //   imageFolderUrl: string;
  // details
  //   itinerary: string; // TODO make this another object; linked list?
  //   notes: string;
  //   questions: string; // TODO let users ask questions and to add answers
  // startDate: Date;
  // endDate: Date;
}
