export type NodaValue = number | string;

export type Noda<T extends NodaValue> = {
  left?: Noda<T>,
  right?: Noda<T>,
  val: T
};
