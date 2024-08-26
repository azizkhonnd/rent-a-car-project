import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';

const { Option } = Select;

interface StepProps {
    handleNext: () => void;
    handleBack: () => void;
}

const TechnicalInfo: React.FC<StepProps> = ({ handleNext, handleBack }) => {
    const [form] = useForm();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        console.log(values);
        handleNext();
    };

    const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString());
    const transmissions = ['Automatic', 'Manual'];

    return (
        <div className="p-12">

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-2"
            >
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <Form.Item
                        label="Model"
                        name="model"
                        rules={[{ required: true, message: 'Please input the model!' }]}
                        className="col-span-2"
        
                    >
                        <Input className="border-primary capitalize rounded-md shadow-sm w-full" />
                    </Form.Item>
                    <Form.Item
                        label="Year"
                        name="year"
                        rules={[{ required: true, message: 'Please select the year!' }]}
                        className="col-span-1"
                    >
                        <Select className="border-primary rounded-md shadow-sm w-full">
                            {years.map(year => (
                                <Option key={year} value={year}>
                                    {year}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-2">
                    <Form.Item
                        label="Mileage"
                        name="mileage"
                        rules={[{ required: true, message: 'Please input the mileage!' }]}
                        className="col-span-1"
                    >
                        <Input type='number' className="border-primary rounded-md shadow-sm w-full" />
                    </Form.Item>
                    <Form.Item
                        label="Engine Type"
                        name="engineType"
                        rules={[{ required: true, message: 'Please select the engine type!' }]}
                        className="col-span-1"
                    >
                        <Select className="border-primary rounded-md shadow-sm w-full">
                            <Option value="gasoline">Gasoline</Option>
                            <Option value="electric">Electric</Option>
                            <Option value="gas-cylinder">Hybrid</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Transmission"
                        name="transmission"
                        rules={[{ required: true, message: 'Please select the transmission type!' }]}
                        className="col-span-1"
                    >
                        <Select className="border-primary rounded-md shadow-sm w-full">
                            {transmissions.map(transmission => (
                                <Option key={transmission} value={transmission}>
                                    {transmission}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <Form.Item
                        label="Car Price"
                        name="carPrice"
                        rules={[{ required: true, message: 'Please input the car price!($)' }]}
                        className="col-span-1"
                    >
                        <Input type='number' className="border-primary rounded-md shadow-sm w-full" />
                    </Form.Item>
                    <Form.Item
                        label="Car Rent Price"
                        name="carRentPrice"
                        rules={[{ required: true, message: 'Please input the car rent price!' }]}
                        className="col-span-1"
                    >
                        <Input type='number' className="border-primary rounded-md shadow-sm w-full" />
                    </Form.Item>
                    <Form.Item
                        label="Seats"
                        name="carDiscount"
                        rules={[{ required: true, message: 'Please input the car seats' }]}
                        className="col-span-1"
                    >
                        <Input type='number' className="border-primary rounded-md shadow-sm w-full" />
                    </Form.Item>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <Form.Item
                        label="Capacity"
                        name="capacity"
                        rules={[{ required: true, message: 'Please input the capacity!' }]}
                        className="col-span-1"
                    >
                        <Input type='number' className="border-primary rounded-md shadow-sm w-full" />
                    </Form.Item>
                    <Form.Item
                        label="Fuel (in litres)"
                        name="fuel"
                        rules={[{ required: true, message: 'Please input the fuel in litres!' }]}
                        className="col-span-2"
                    >
                        <Input type='number' className="border-primary rounded-md shadow-sm w-full" />
                    </Form.Item>
                </div>
                <Form.Item>
                    <div className="flex justify-between">
                        <Button
                            type="default"
                            onClick={handleBack}
                            className="bg-blue-500 text-white hover:bg-secondary"
                        >
                            Back
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-primary text-white hover:bg-secondary"
                        >
                            Next
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default TechnicalInfo;
