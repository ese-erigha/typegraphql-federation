import { z } from 'zod';

const envToBoolean = z.ostring().transform(val => val === 'true');

const commaSeparatedStrings = z.string().transform<Array<string>>(val => val.split(',').map(s => s.trim()));

const number = z.preprocess(v => Number.parseInt(v as string, 10), z.number());

const numberWithDefault = (def: number) => z.preprocess(v => Number.parseInt(v as string, 10), z.number().default(def));

export const ZodHelpers = {
  envToBoolean,
  commaSeparatedStrings,
  number,
  numberWithDefault,
};
