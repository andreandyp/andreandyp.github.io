export interface Job {
    startDate: string;
    endDate: string | null;
    icon: string;
    title: string;
    description: string;
    achievements: string[];
}