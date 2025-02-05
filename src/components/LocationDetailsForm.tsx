import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface LocationDetails {
  address: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  contactnumber: string;
  contactname: string;
}

interface LocationDetailsFormProps {
  onNext: (data: LocationDetails) => void;
  onPrev: () => void;
  formData: LocationDetails;
  updateFormData: (data: Partial<LocationDetails>) => void;
}

const LocationDetailsForm: React.FC<LocationDetailsFormProps> = ({
  onNext,
  onPrev,
  formData,
  updateFormData,
}) => {
  // Initialize the form state
  const [formState, setFormState] = useState<LocationDetails>(
    formData || {
      address: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      contactnumber: '',
      contactname: '',
    }
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Mapping from country names (normalized) to ISO country codes
  const countryCodeMapping: { [key: string]: string } = {
    usa: 'US',
    'united states': 'US',
    us: 'US',
    america: 'US',
    canada: 'CA',
    uk: 'GB',
    'united kingdom': 'GB',
    // Add more mappings as needed
  };


  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    updateFormData({ [name]: value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formState.address) newErrors.address = 'Address is required';
    if (!formState.zipCode) newErrors.zipCode = 'Zip Code is required';
    if (!formState.city) newErrors.city = 'City is required';
    if (!formState.state) newErrors.state = 'State is required';
    if (!formState.contactnumber)
      newErrors.contactnumber = 'Contact Number is required';
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

  // Example state options – update these options as needed.
  const stateOptions = [
    { value: '', label: 'Your State' },
    { value: 'California', label: 'California' },
    { value: 'Texas', label: 'Texas' },
    { value: 'New York', label: 'New York' },
    { value: 'Florida', label: 'Florida' },
  ];

  return (
    <div>
      <div style={{marginBottom:'1rem'}}>
      <h2>Location Details</h2>

      <label style={{color:'dimgray'}}>
        Please specify the address for where the activity takes place
      </label>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        {/* Location Details Section */}
        <div
          className="locationdetails"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{fontWeight: '500'}}>
            <label htmlFor="address">
              Address Line 1 <span style={{ color: 'red' }}>*</span>
            </label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="House number and street name"
              value={formState.address}
              onChange={onChange}
              style={{
                padding: '0.5rem',
                borderRadius: '32px',
                border: '1px solid #ccc',
                width: '650px',
                height: '30px',
              }}
            />
            {errors.address && (
              <span style={{ color: 'red' }}>{errors.address}</span>
            )}
          </div>

          <div style={{fontWeight: '500'}}>
            <label htmlFor="address2">Address Line 2</label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="address2"
              id="address2"
              placeholder="Other information, e.g., building name, landmark, etc."
              value={formState.address2}
              onChange={onChange}
              style={{
                padding: '0.5rem',
                borderRadius: '32px',
                border: '1px solid #ccc',
                width: '650px',
                height: '30px',
              }}
            />
          </div>

          <div style={{fontWeight: '500'}}>
            <label htmlFor="zipCode">
              ZIP Code <span style={{ color: 'red' }}>*</span>
            </label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="number"
              name="zipCode"
              id="zipCode"
              placeholder="eg: 123 467"
              value={formState.zipCode}
              onChange={onChange}
              style={{
                padding: '0.5rem',
                borderRadius: '32px',
                border: '1px solid #ccc',
                width: '650px',
                height: '30px',
              }}
            />
            {errors.zipCode && (
              <span style={{ color: 'red' }}>{errors.zipCode}</span>
            )}
          </div>

          {/* Country Input as Text */}
          {/* <div>
            <label htmlFor="country">
              Country <span style={{ color: 'red' }}>*</span>
            </label>
          </div> */}
          {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Your Country (e.g., USA, Canada)"
              value={formState.country}
              onChange={onChange}
              style={{
                padding: '0.5rem',
                borderRadius: '32px',
                border: '1px solid #ccc',
                width: '650px',
                height: '30px',
              }}
            />
            {errors.country && (
              <span style={{ color: 'red' }}>{errors.country}</span>
            )}
          </div> */}

          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <div>
              <div style={{marginBottom:'1rem' , fontWeight: '500'}}>
                <label htmlFor="city">
                  City <span style={{ color: 'red' }}>*</span>
                </label>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Your City"
                  value={formState.city}
                  onChange={onChange}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '32px',
                    border: '1px solid #ccc',
                    width: '318px',
                    height: '30px',
                  }}
                />
                {errors.city && (
                  <span style={{ color: 'red' }}>{errors.city}</span>
                )}
              </div>
            </div>

            <div>
              <div  style={{marginBottom:'1rem', fontWeight: '500'}}>
                <label htmlFor="state">
                  State <span style={{ color: 'red' }}>*</span>
                </label>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <select
                  name="state"
                  id="state"
                  value={formState.state}
                  onChange={onChange}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '32px',
                    border: '1px solid #ccc',
                    width: '318px',
                    height: '48px',
                    color: ' rgba(107, 107, 107, 1)',

                  }}
                >
                  {stateOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <span style={{ color: 'red' }}>{errors.state}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <div
          className="contactdetails"
          style={{
            marginTop: '2rem',
            borderTop: '1px solid #ccc',
            paddingTop: '2rem',
          }}
        >
          <h2>Contact Details</h2>
          <div style={{ marginBottom: '1.5rem' ,color:'dimgrey' }}>
            <label>
              Please provide contact information for this activity
            </label>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingBottom: '1rem',
              gap: '1rem',
            }}
          >
            {/* Contact Number with Country Flag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
           
              <div>
               <PhoneInput
               country={'us'}
               value={formState.contactnumber}
               onChange={phone => setFormState({ ...formState, contactnumber: phone })}
               
               inputProps={{
                placeholder: 'Enter Contact Number',
              }}
            
               inputStyle={{
                // padding: '0.25rem',
                borderRadius: '32px',
                borderLeft:'32px',
                border: '1px solid #ccc',
                width: '318px',
                height: '45px',
                textAlign:'revert'
              }}
             />
                {errors.contactnumber && (
                <span style={{ color: 'red' }}>{errors.contactnumber}</span>
              )}
             </div>        
              
              {/* <input
                type="text"
                name="contactnumber"
                id="contactnumber"
                placeholder="Contact Number"
                value={formState.contactnumber}
                onChange={onChange}
                style={{
                  padding: '0.5rem',
                  borderRadius: '32px',
                  border: '1px solid #ccc',
                  width: '310px',
                  height: '30px',
                }}
              /> */}
            </div>
            {errors.contactnumber && (
              <span style={{ color: 'red' }}>{errors.contactnumber}</span>
            )}

            <div>
              <input
                type="text"
                name="contactname"
                id="contactname"
                placeholder="Contact Name"
                value={formState.contactname}
                onChange={onChange}
                style={{
                  padding: '0.5rem',
                  borderRadius: '32px',
                  border: '1px solid #ccc',
                  width: '318px',
                  height: '30px',
                }}
              />
              {errors.contactname && (
                <span style={{ color: 'red' }}>{errors.contactname}</span>
              )}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
              <button
                type="button"
                onClick={onPrev}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '32px',
                  border: '1px solid #ccc',
                  width: '98px',
                  height: '46px',
                }}
              >
                Previous
              </button>

              <button
                type="submit"
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '32px',
                  border: 'none',
                  backgroundColor: 'black',
                  color: '#fff',
                  width: '98px',
                  height: '46px',
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LocationDetailsForm;
