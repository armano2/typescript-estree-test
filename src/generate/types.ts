export interface PropOptions {
  isOptional: boolean;
  isNullable: boolean;
  isBoolean: boolean;
  isString: boolean;
  stringValues: Set<string>;
  isNumber: boolean;
  containTypes: Set<string>;
  objectTypes: Map<string, PropOptions>;
  containArrayOfTypes: Set<string>;
}
