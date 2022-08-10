// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MedicalInformation, Home } = initSchema(schema);

export {
  MedicalInformation,
  Home
};