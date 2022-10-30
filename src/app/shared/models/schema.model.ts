import { Example } from './example.model';

export interface Schema {
  name?: string;
  description?: string;
  anchorIdentifier?: string;
  anchorUrl?: string;
  type?: string;
  format?: string;
  enum?: string[];
  properties?: Map<string, Schema>;
  example?: Example;
  required?: string[];
}
