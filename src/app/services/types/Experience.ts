import Responsibility from './Responsibility';
import Location from './Location';

export default interface Experience {
    company?: string;
    location?: Location;
    title?: string;
    responsibilities?: Responsibility[];
};