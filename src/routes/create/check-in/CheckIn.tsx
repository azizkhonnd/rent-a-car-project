import React from 'react';
import { Button, Table } from 'antd';
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

  // Define columns for the table
  const columns = [
    {
      title: 'Field',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  // Prepare data for the table
  const data = [
    { key: '1', field: 'Car Company', value: formData.name || 'N/A' },
    { key: '2', field: 'Car Model', value: formData.model || 'N/A' },
    { key: '3', field: 'Car Category', value: formData.category || 'N/A' },
    { key: '4', field: 'Status', value: formData.status || 'N/A' },
    { key: '5', field: 'Year', value: formData.year || 'N/A' },
    { key: '6', field: 'Mileage', value: formData.mileage || 'N/A' },
    { key: '7', field: 'Engine Type', value: formData.engineType || 'N/A' },
    { key: '8', field: 'Transmission', value: formData.transmission || 'N/A' },
    { key: '9', field: 'Car Price', value: formData.carPrice || 'N/A' },
    { key: '10', field: 'Car Rent Price', value: formData.carRentPrice || 'N/A' },
    { key: '11', field: 'Seats', value: formData.seats || 'N/A' },
    { key: '12', field: 'Capacity', value: formData.capacity || 'N/A' },
    { key: '13', field: 'Fuel (litres)', value: formData.fuel || 'N/A' },
  ];

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
    <div className="p-12 w-full">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        scroll={{ y: 300 }}  
      />

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
