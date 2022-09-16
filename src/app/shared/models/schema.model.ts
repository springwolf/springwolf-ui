import { Example } from './example.model';

export interface Schema {
    description?: string;
    type: string;
    properties?: Map<string, Schema>;
    example: Example;
    required?: string[];
}

