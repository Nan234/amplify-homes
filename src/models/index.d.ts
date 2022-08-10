import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MedicalInformationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MedicalInformation {
  readonly id: string;
  readonly Dev_ID?: string | null;
  readonly Med_Time?: string | null;
  readonly Med_Red?: string | null;
  readonly Med_Blue?: string | null;
  readonly Med_Yellow?: string | null;
  readonly Image_Name?: string | null;
  readonly Results?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MedicalInformation, MedicalInformationMetaData>);
  static copyOf(source: MedicalInformation, mutator: (draft: MutableModel<MedicalInformation, MedicalInformationMetaData>) => MutableModel<MedicalInformation, MedicalInformationMetaData> | void): MedicalInformation;
}

export declare class Home {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}