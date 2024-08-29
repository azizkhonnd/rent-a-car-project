import React from 'react';
import { Button, Descriptions } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import axios from 'axios';

interface CheckInProps {
  current: number;
  handleNext: () => void;
  handleBack: () => void;
}

const CheckIn: React.FC<CheckInProps> = ({ handleNext, handleBack }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.checkIn);

  const handleFinish = async () => {
    try {
     
      const response = await axios.post('/api/submit-checkin', formData);
      console.log('Server response:', response.data);

      // You can dispatch an action if needed
      // dispatch(someAction(response.data));

      handleNext();
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="p-12">
      <Descriptions title="Review Information" bordered>
        <Descriptions.Item label="Car Company">
          {formData.name || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Car Model">
          {formData.model || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Car Category">
          {formData.category || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {formData.status || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Year">
          {formData.year || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Mileage">
          {formData.mileage || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Engine Type">
          {formData.engineType || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Transmission">
          {formData.transmission || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Car Price">
          {formData.carPrice || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Car Rent Price">
          {formData.carRentPrice || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Seats">
          {formData.seats || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Capacity">
          {formData.capacity || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Fuel (litres)">
          {formData.fuel || 'N/A'}
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
