export interface Job {
    startDate: string;
    endDate: string | null;
    icon: string;
    iconName: string;
    title: string;
    description: string;
    achievements: string[];
}