import { z } from 'zod';

export const envToBoolean = z.ostring().transform(val => val === 'true');

export const commaSeparatedStrings = z.string().transform<Array<string>>(val => val.split(',').map(s => s.trim()));

export const number = z.preprocess(v => Number.parseInt(v as string, 10), z.number());

export const numberWithDefault = (def: number) =>
  z.preprocess(v => Number.parseInt(v as string, 10), z.number().default(def));
