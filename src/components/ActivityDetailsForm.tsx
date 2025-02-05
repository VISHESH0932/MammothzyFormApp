import React, { useState } from 'react';

interface ActivityDetails {
    name: string;
    category: string;
    description: string;
    activityType: string[];
    locationType: string[];
    minMembers: string;
    maxMembers: string;
}

interface Props {
    onNext: (data: ActivityDetails) => void;
    formData: ActivityDetails;
    updateFormData: (newData: Partial<ActivityDetails>) => void;
}

const ActivityDetailsForm: React.FC<Props> = ({ onNext, formData, updateFormData }) => {
    const [formState, setFormState] = useState<ActivityDetails>(formData || { name: '', category: '', description: '', activityType: [], locationType: [], minMembers: '', maxMembers: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
        updateFormData({ [name]: value });
    };

    const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        const updatedArray = checked
            ? [...formState[name as keyof ActivityDetails] as string[], value]
            : (formState[name as keyof ActivityDetails] as string[]).filter(item => item !== value);
        setFormState({ ...formState, [name]: updatedArray });
        updateFormData({ [name]: updatedArray });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formState.name) newErrors.name = 'Name is required';
        if (!formState.category) newErrors.category = 'Category is required';
        if (!formState.description) newErrors.description = 'Description is required';
        if (!formState.minMembers) newErrors.minMembers = 'Minimum members is required';
        if (!formState.maxMembers) newErrors.maxMembers = 'Maximum members is required';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            onNext(formState);
        }
    };

    return (
        <>
            <div>
                <h2>Activity Details</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div  style={{ fontWeight: '500' }}>
                    <label htmlFor="name">Activity Name <span style={{ color:'red'}}>*</span></label>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                     
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formState.name}
                            placeholder='Eg. Cooking class in Palo Alto'
                            onChange={onChange}
                            style={{ padding: '0.5rem', borderRadius: '32px', border: '1px solid #ccc', color: 'black',width:'650px' ,height:'30px'}} />
                        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </div>

                    <div  style={{ fontWeight: '500' }}>
                    <label htmlFor="category">Select the best category to describe your activity  <span style={{ color:'red'}}>*</span></label>
                    </div>

                    <div>
                        <ul className="no-bullets">
                            <li>
                                <input 
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="category"
                                    value="Adventure & Games"
                                    // checked={formState.category === "Adventure & Games"}
                                    onChange={onChange}
                                /> Adventure & Games</li>
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="category"
                                    value="Creative Expression"
                                    // checked={formState.category === "Creative Expression"}
                                    onChange={onChange}
                                /> Creative Expression</li>
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="category"
                                    value="Food & Drink"
                                    // checked={formState.category === "Food & Drink"}
                                    onChange={onChange}
                                /> Food & Drink</li>
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="category"
                                    value="Learning and Development"
                                    // checked={formState.category === "Learning and Development"}
                                    onChange={onChange}
                                /> Learning & Development</li>
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="category"
                                    value="Sports & Fitness"
                                    // checked={formState.category === "Sports & Fitness"}
                                    onChange={onChange}
                                /> Sports and Fitness</li>
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="category"
                                    value="Volunteering"
                                    // checked={formState.category === "Volunteering"}
                                    onChange={onChange}
                                /> Volunteering</li>
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="category"
                                    value="Other"
                                    // checked={formState.category === "Other"}
                                    onChange={onChange}
                                /> Other</li>
                        </ul>
                        {errors.category && <span style={{ color: 'red' }}>{errors.category}</span>}
                    </div>

                    <div>
                    <input
                            type="text"
                            name="name"
                            id="name"
                            value={formState.category}
                            placeholder='Specify the category'
                            onChange={onChange}
                            style={{ padding: '0.5rem', borderRadius: '32px', border: '1px solid #ccc', color: 'black',width:'650px',height:'30px' }} />  
                    </div>

                    <div  style={{ fontWeight: '500' }}>
                    <label htmlFor="description">About the Activity  <span style={{ color:'red'}}>*</span></label>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        
                        <textarea
                            name="description"
                            id="description"
                            placeholder='Activity Description'
                            value={formState.description}
                            onChange={onChange}
                            style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc',width:'650px',height:'150px' }} />
                        {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
                    </div>

                    <div  style={{ fontWeight: '500' }}>
                    <label htmlFor="activityType">Please select the activity type  <span style={{ color:'red'}}>*</span></label>
                    </div>

                    <div>
                        <ul className="no-bullets">
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="activityType"
                                    value="Indoor"
                                    checked={formState.activityType.includes("Indoor")}
                                    onChange={onCheckboxChange}
                                    style={{fontWeight:'100'}}
                                /> Indoor</li>
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="activityType"
                                    value="Outdoor"
                                    checked={formState.activityType.includes("Outdoor")}
                                    onChange={onCheckboxChange}
                                /> Outdoor</li>
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="activityType"
                                    value="Virtual"
                                    checked={formState.activityType.includes("Virtual")}
                                    onChange={onCheckboxChange}
                                /> Virtual</li>
                        </ul>
                    </div>

                    <div  style={{ fontWeight: '500' }}>
                    <label htmlFor="locationType">Please select the type of location  <span style={{ color:'red'}}>*</span></label>
                    </div>

                    <div>
                        <ul className="no-bullets">
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="locationType"
                                    value="Provider Location"
                                    checked={formState.locationType.includes("Provider Location")}
                                    onChange={onCheckboxChange}
                                /> Provider Location</li>
                            <li>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    name="locationType"
                                    value="User Location"
                                    checked={formState.locationType.includes("User Location")}
                                    onChange={onCheckboxChange}
                                /> User Location</li>
                        </ul>
                    </div>

                    <div style={{ fontWeight: '500' }}>
                    <label htmlFor="Members">How many members can take part in the activity?</label>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* <label htmlFor="minMembers">Minimum Members</label> */}
                        <input
                            type="number"
                            name="minMembers"
                            id="minMembers"
                            value={formState.minMembers}
                            placeholder='Minimum Members'
                            onChange={onChange}
                            style={{ padding: '0.5rem', borderRadius: '32px', border: '1px solid #ccc', color: 'black',marginRight:'1rem' ,width:'310px',height:'30px' }}
                        />
                        {errors.minMembers && <span style={{ color: 'red' }}>{errors.minMembers}</span>}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* <label htmlFor="maxMembers">Maximum Members</label> */}
                        <input
                            type="number"
                            name="maxMembers"
                            id="maxMembers"
                            value={formState.maxMembers}
                            placeholder='Maximum Members'
                            onChange={onChange}
                            style={{ padding: '0.5rem', borderRadius: '32px', border: '1px solid #ccc', color: 'black',width:'310px',height:'30px' }}
                        />
                        {errors.maxMembers && <span style={{ color: 'red' }}>{errors.maxMembers}</span>}
                    </div>
                    </div>


                    <div>
                        <button
                            type="submit"
                            style={{
                                padding: '1rem',
                                borderRadius: '32px',
                                border: 'none',
                                backgroundColor: 'black',
                                color: 'white',
                                cursor: 'pointer',
                                width:'169px',
                                height:'44px',
                            }}
                        >
                            Save and Continue
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ActivityDetailsForm;