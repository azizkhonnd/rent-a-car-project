import { Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import type { FormProps } from 'antd';
import NextBack, { Props } from "../../../components/next-back/NextBack";
import { useGetCategoriesQuery } from "../../../redux/api/categories-api";
import { fillBasicInfo } from "../../../redux/slices/form-slice";
import { useDispatch } from "react-redux";
const { Item } = Form;
const { TextArea } = Input;

const BasicInfo = ({ current, handleNext, handleBack }: Props) => {
  const [form] = useForm()
  const dispatch = useDispatch()
  const { data: categories } = useGetCategoriesQuery()
  type FieldType = {
    name?: string;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(fillBasicInfo(values))
    handleNext();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <Form
      form={form}
      name="layout-multiple-horizontal"
      layout="horizontal"
      className="flex-1 flex flex-col justify-between"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="flex flex-col flex-1  justify-between gap-4 mb-20">
        <div className="flex gap-4">
          <Item
            layout="vertical"
            label="Car company"
            name="name"
            className="flex-1 "
            required
            rules={[{ required: true }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}

          >
            <Input className="capitalize" />
          </Item>
          <Item
            layout="vertical"
            label="Car model"
            name="model"
            className="flex-1"
            required
            rules={[{ required: true }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input className="capitalize" />
          </Item>
        </div>
        <div className="flex gap-4">
          {
            categories?.payload && categories?.payload?.length > 0 &&
            <Item
              layout="vertical"
              label="Car category"
              name="category"
              className="flex-1"
              required
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              {
                <Select
                  defaultValue={categories?.payload[0]._id}
                  style={{ width: "100%" }}
                  options={categories?.payload.map(category => ({ value: category._id, label: category.name }))}
                />
              }
            </Item>
          }

          <Item
            layout="vertical"
            label="Car status"
            name="status"
            className="flex-1"
            required

            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Select

              defaultValue="active"
              style={{ width: "100%" }}
              options={[
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
              ]}
            />
          </Item>
        </div>
        <div>
          <Item
            layout="vertical"
            label="Car description"
            name="description"
            className="flex-1 "
            required
            rules={[{ required: false }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <TextArea
              showCount
              maxLength={100}
              placeholder="disable resize"
              required
              style={{ resize: 'none', marginTop: '15px' }}
            />
          </Item>
        </div>
      </div>
      <NextBack
        current={current}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Form>
  );
};

export default BasicInfo;
