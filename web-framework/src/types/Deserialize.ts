// Type that represents the structure of a method to deserialise json to a designated type
export type Deserialize<T, K> = (json: K) => T;
