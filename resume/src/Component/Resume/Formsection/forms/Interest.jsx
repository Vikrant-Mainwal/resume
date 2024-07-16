import React, { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '../../../../Context/ResumeInfoContext';
import AddButton from '../../../Global/AddButton';

const Interest = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [interests, setInterests] = useState(resumeInfo?.interests || []);

    useEffect(() => {
        setInterests(resumeInfo?.interests || []);
    }, [resumeInfo]);

    const handleInputChange = (index, event) => {
        const updatedInterests = [...interests];
        updatedInterests[index] = event.target.value;
        setInterests(updatedInterests);
        setResumeInfo(prev => ({ ...prev, interests: updatedInterests }));
    };

    const handleAddInterest = () => {
        const updatedInterests = [...interests, ''];
        setInterests(updatedInterests);
        setResumeInfo(prev => ({ ...prev, interests: updatedInterests }));
    };

    return (
        <div>
            {interests.map((interest, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={interest}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                </div>
            ))}
            <AddButton onClick={handleAddInterest}>Add Interest</AddButton>
        </div>
    );
};

export default Interest;
