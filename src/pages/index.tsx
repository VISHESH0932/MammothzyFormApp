import { useState } from 'react';
import ActivityDetailsForm from '../components/ActivityDetailsForm';
import LocationDetailsForm from '../components/LocationDetailsForm';
import SuccessModal from '../components/SuccessModal';

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
        activityDetails: { name: '', category: '', description: '', activityType: [], locationType: [], minMembers: '', maxMembers: '' },
        locationDetails: { address: '', address2:'', city: '', state: '', zipCode: '' , contactnumber: '', contactname: '' },
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
            locationDetails: { address: '', address2:'', city: '', state: '', zipCode: '', contactnumber: '', contactname: '' },
        });
        setStep(1);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex justify-between items-center p-4 shadow-md bg-white">
                <img src="/Company.png" alt="Mammothzy" className="w-24 company-logo" />
                <div className="profile-container">
                    <img src="/Avatar.png" alt="Profile" className="w-6 h-6" />
                    <button className="headerbutton">Profile</button>
                </div>
            </header>

            <h2 className="text-2xl font-semibold text-center mt-4 title">Create new Activity</h2>

            <div className="flex-container p-4">
                <div className="sidebar">
                    <div className="p-3 cursor-pointer">
                        <button className={`sidebarbutton ${step === 1 ? "highlighted" : ""}`} >
                            <img src="/ActivityImage.png" alt="Activity"/>
                          <span> Activity Details</span> 
                        </button>
                    </div>
                    <div className="p-3 cursor-pointer">
                       <button className={`sidebarbutton ${step === 2 ? "highlighted" : ""}`}>
                           <img src="/LocationImage.png" alt="Activity" />
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
                    <img src="/Company.png" alt="Mammothzy" className="w-24" />
                </div>
                <div>
                    <p>Marketplace for searching, filtering and instantly booking team activities</p>
                </div>
                <div className='footericons'>
                    <img src="/Facebook.png" alt="Facebook" className="w-6 h-6" />
                    <img src="/Instagram.png" alt="Instagram" className="w-6 h-6" />
                    <img src="/Linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                    <img src="/icons.png" alt="Icons" className="w-6 h-6" />
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
