/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button, Descriptions } from 'antd';

interface CheckInProps {
  current: number;
  handleNext: () => void;
  handleBack: () => void;
  formData: {
    basicInfo: {
      name: string;
      model: string;
      category: string;
      status: string;
    };
    technicalInfo: {
      year: string;
      mileage: string;
      engineType: string;
      transmission: string;
      carPrice: string;
      carRentPrice: string;
      carDiscount: string;
      capacity: string;
      fuel: string;
    };
    visualInfo: any; 
  };
}

const CheckIn: React.FC<CheckInProps> = ({ handleNext, handleBack, formData }) => {

  console.log(formData); 
  const handleFinish = () => {
    console.log('Final data: ', formData);
    handleNext();
  };

  return (
    <div className="p-12">
      <Descriptions title="Review Information" bordered>
        <Descriptions.Item label="Car Company">
          {formData?.basicInfo?.name || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Car Model">
          {formData?.basicInfo?.model || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Car Category">
          {formData?.basicInfo?.category || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {formData?.basicInfo?.status || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Year">
          {formData?.technicalInfo?.year || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Mileage">
          {formData?.technicalInfo?.mileage || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Engine Type">
          {formData?.technicalInfo?.engineType || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Transmission">
          {formData?.technicalInfo?.transmission || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Car Price">
          {formData?.technicalInfo?.carPrice || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Car Rent Price">
          {formData?.technicalInfo?.carRentPrice || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Seats">
          {formData?.technicalInfo?.carDiscount || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Capacity">
          {formData?.technicalInfo?.capacity || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Fuel (litres)">
          {formData?.technicalInfo?.fuel || 'N/A'}
        </Descriptions.Item>
      </Descriptions>

      <div className="mt-8 flex justify-between">
        <Button
          type="default"
          onClick={handleBack}
          className="bg-blue-500 text-white hover:bg-secondary"
        >
          Back
        </Button>
        <Button
          type="primary"
          onClick={handleFinish}
          className="bg-primary text-white hover:bg-secondary"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CheckIn;
