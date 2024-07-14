import Responsibility from './Responsibility';

export default interface Experience {
    company?: string;
    location?: string;
    title?: string;
    responsibilities?: Responsibility[];
};