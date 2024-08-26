/* eslint-disable @typescript-eslint/no-explicit-any */
import { Steps } from 'antd';
import { useState } from 'react';
import BasicInfo from './basic-info/BasicInfo';
import VisualInfo from './visual-info/VisualInfo';
import TechnicalInfo from './technical-info/Technicalinfo';
import CheckIn from './check-in/CheckIn';

const Create = () => {
  const [current, setCurrent] = useState<number>(0);

  const [formData, setFormData] = useState({
    basicInfo: {},
    visualInfo: [],
    technicalInfo: {},
    checkIn: {}
  });

  const handleNext = () => {
    if (current < 3) {
      setCurrent((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const updateFormData = (step: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [step]: data,
    }));
  };

  const components = [
    {
      id: 0,
      content: (current: number, handleNext: () => void, handleBack: () => void) => (
        <BasicInfo
          current={current}
          handleNext={handleNext}
          handleBack={handleBack}
          updateFormData={(data: any) => updateFormData('basicInfo', data)}
        />
      ),
    },
    {
      id: 1,
      content: (current: number, handleNext: () => void, handleBack: () => void) => (
        <VisualInfo
          current={current}
          handleNext={handleNext}
          handleBack={handleBack}
          updateFormData={(data: any) => updateFormData('visualInfo', data)}
        />
      ),
    },
    {
      id: 2,
      content: (current: number, handleNext: () => void, handleBack: () => void) => (
        <TechnicalInfo
          current={current}
          handleNext={handleNext}
          handleBack={handleBack}
          updateFormData={(data: any) => updateFormData('technicalInfo', data)}
        />
      ),
    },
    {
      id: 3,
      content: (current: number, handleNext: () => void, handleBack: () => void) => (
        <CheckIn
          current={current}
          handleNext={handleNext}
          handleBack={handleBack}
          formData={formData}
        />
      ),
    },
  ];

  return (
    <div>
      <Steps
        size="small"
        current={current}
        className='capitalize'
        items={[
          { title: 'Basic Info' },
          { title: 'Visual Info' },
          { title: 'Technical Info' },
          { title: 'Check In' },
        ]}
      />
      <div className="h-[500px] flex py-10">
        {current < components.length && components[current].content(current, handleNext, handleBack)}
      </div>
    </div>
  );
};

export default Create;
