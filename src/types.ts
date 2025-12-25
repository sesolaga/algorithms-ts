export type NodaValue = Number | String;

export type Noda<T extends NodaValue> = {
  left?: Noda<T>,
  right?: Noda<T>,
  val: T
};
