import { ActivityDetails, LocationDetails } from '../types/index';

export const validateActivityDetails = (data: ActivityDetails) => {
    const errors: { [key in keyof ActivityDetails]?: string } = {};

    if (!data.name) {
        errors.name = "Activity name is required.";
    }

    if (!data.category) {
        errors.category = "Category is required.";
    }

    if (!data.description) {
        errors.description = "Description is required.";
    }

    if (data.activityType.length === 0) {
        errors.activityType = "At least one activity type is required.";
    }

    if (data.locationType.length === 0) {
        errors.locationType = "At least one location type is required.";
    }

    if (!data.minMembers) {
        errors.minMembers = "Minimum members is required.";
    }

    if (!data.maxMembers) {
        errors.maxMembers = "Maximum members is required.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const validateLocationDetails = (data: LocationDetails) => {
    const errors: { [key in keyof LocationDetails]?: string } = {};

    if (!data.address) {
        errors.address = "Address is required.";
    }

    if (!data.city) {
        errors.city = "City is required.";
    }

    if (!data.state) {
        errors.state = "State is required.";
    }

    if (!data.zipCode) {
        errors.zipCode = "Zip code is required.";
    }

    if (!data.country) {
        errors.country = "Country is required.";
    }

    if (!data.contactnumber) {
        errors.contactnumber = "Contact number is required.";
    }

    if (!data.contactname) {
        errors.contactname = "Contact name is required.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};