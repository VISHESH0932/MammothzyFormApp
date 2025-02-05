export interface ActivityDetails {
    name: string;
    category: string;
    description: string;
    activityType: string[];
    locationType: string[];
    minMembers: string;
    maxMembers: string;
}

export interface LocationDetails {
    address: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    contactnumber: string;
    contactname: string;
}

export interface FormData {
    activity: ActivityDetails;
    location: LocationDetails;
}