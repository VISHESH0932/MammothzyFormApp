import { useState } from 'react';
import ActivityDetailsForm from '../components/ActivityDetailsForm';
import LocationDetailsForm from '../components/LocationDetailsForm';
import SuccessModal from '../components/SuccessModal';
import Image from 'next/image';

interface ActivityDetails {
    name: string;
    category: string;
    description: string;
    activityType: string[];
    locationType: string[];
    minMembers: string;
    maxMembers: string;
}

interface LocationDetails {
    address: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    contactnumber: string;
    contactname: string;
}

interface FormData {
    activityDetails: ActivityDetails;
    locationDetails: LocationDetails;
}

const Home = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        activityDetails: {
            name: '', category: '', description: '', activityType: [], locationType: [], minMembers: '', maxMembers: ''
        },
        locationDetails: {
            address: '', address2: '', city: '', state: '', zipCode: '', contactnumber: '', contactname: ''
        }
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNextStep = (data: Partial<FormData>) => {
        setFormData((prev) => ({
            ...prev,
            activityDetails: { ...prev.activityDetails, ...data.activityDetails },
            locationDetails: { ...prev.locationDetails, ...data.locationDetails },
        }));

        if (step === 1) {
            setStep(2);
        } else {
            setTimeout(() => {
                console.log('Final Form Data:', formData);
                setIsModalOpen(true);
                resetForm();
            }, 0);
        }
    };

    const resetForm = () => {
        setFormData({
            activityDetails: { name: '', category: '', description: '', activityType: [], locationType: [], minMembers: '', maxMembers: '' },
            locationDetails: { address: '', address2: '', city: '', state: '', zipCode: '', contactnumber: '', contactname: '' },
        });
        setStep(1);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex justify-between items-center p-4 shadow-md bg-white">
                <Image src="/Company.png" alt="Mammothzy" width={195} height={76} className="company-logo" />
                <div className="profile-container">
                    <Image src="/Avatar.png" alt="Profile" width={36} height={36} />
                    <button className="headerbutton">Profile</button>
                </div>
            </header>

            <h2 className="text-2xl font-semibold text-center mt-4 title">Create new Activity</h2>

            <div className="flex-container p-4">
                <div className="sidebar">
                    <div className="p-3 cursor-pointer">
                        <button
                            className={`sidebarbutton ${step === 1 ? "highlighted" : ""}`}
                            onClick={() => setStep(1)}
                        >
                            <Image src="/ActivityImage.png" alt="Activity" width={24} height={24} />
                            <span> Activity Details</span>
                        </button>
                    </div>
                    <div className="p-3 cursor-pointer">
                        <button
                            className={`sidebarbutton ${step === 2 ? "highlighted" : ""}`}
                            onClick={() => setStep(2)}
                        >
                            <Image src="/LocationImage.png" alt="Location" width={24} height={24} />
                            <span> Location Details</span>
                        </button>
                    </div>
                </div>

                <div className="form-section">
                    {step === 1 && (
                        <ActivityDetailsForm
                            onNext={(data) => handleNextStep({ activityDetails: data })}
                            updateFormData={(data) => setFormData((prev) => ({ ...prev, activityDetails: { ...prev.activityDetails, ...data } }))}
                            formData={formData.activityDetails}
                        />
                    )}
                    {step === 2 && (
                        <LocationDetailsForm
                            onNext={(data) => handleNextStep({ locationDetails: data })}
                            onPrev={() => setStep(1)}
                            formData={formData.locationDetails}
                            updateFormData={(data) => setFormData((prev) => ({ ...prev, locationDetails: { ...prev.locationDetails, ...data } }))}
                        />
                    )}
                </div>
            </div>

            <footer className="flex flex-col items-center p-4 shadow-md bg-white">
                <div>
                    <Image src="/Company.png" alt="Mammothzy" width={195} height={76} />
                </div>
                <div>
                    <p>Marketplace for searching, filtering and instantly booking team activities</p>
                </div>
                <div className="footericons">
                    <Image src="/Facebook.png" alt="Facebook" width={24} height={24} />
                    <Image src="/Instagram.png" alt="Instagram" width={24} height={24} />
                    <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
                    <Image src="/icons.png" alt="Icons" width={24} height={24} />
                </div>
                <div>
                    <p>Copyright © 2024</p>
                </div>
            </footer>

            <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageUrl="/popup2.png" />
        </div>
    );
};

export default Home;
