/** Types for Experience */

export interface Responsibility {
    responsibility: string;
}

export interface Location {
    city?: string;
    state?: string;
}

export interface Experience {
    company?: string;
    location?: Location;
    title?: string;
    responsibilities?: Responsibility[];
};