/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Upload, FormProps } from "antd";
import { useEffect, useState } from "react";
import NextBack, { Props } from "../../../components/next-back/NextBack";
import { useUploadMultipleFilesMutation, useUploadSingleFileMutation } from "../../../redux/api/upload-api";
import type { UploadFile } from 'antd/es/upload/interface';

type FieldType = {
  name?: string;
};

const VisualInfo = ({ current, handleNext, handleBack }: Props) => {
  const [uploadMultipleFiles, { data: multipleFiles }] = useUploadMultipleFilesMutation();
  const [uploadSingleFile, { data: singleFile }] = useUploadSingleFileMutation();

  const [imageUrls, setImageUrls] = useState<UploadFile[]>([]);
  const [thumbnailUrl, setThumbnailUrl] = useState<UploadFile[]>([]);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    handleNext();
    console.log(values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUploadFiles = ({ fileList }: { fileList: UploadFile[] }) => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files", file.originFileObj as File);
    });

    uploadMultipleFiles(formData);
  };

  const handleUploadFile = ({ file }: { file: UploadFile }) => {
    const formData = new FormData();
    formData.append("file", file.originFileObj as File);

    uploadSingleFile(formData);
  };

  useEffect(() => {
    if (multipleFiles?.payload && multipleFiles?.payload.length > 0) {
      const formattedImages = multipleFiles.payload.map((url: string, index: number) => ({
        uid: String(index),
        name: `image-${index}`,
        status: "done",
        url,
      }));
      setImageUrls(formattedImages); 
    }
  }, [multipleFiles]);

  useEffect(() => {
    if (singleFile?.payload) {
      setThumbnailUrl([
        {
          uid: "1", 
          name: "thumbnail",
          status: "done",
          url: singleFile.payload,
        },
      ]); 
    }
  }, [singleFile]);

  return (
    <Form
      name="layout-multiple-horizontal"
      layout="horizontal"
      className="flex-1 flex flex-col justify-between"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Images"
        className="flex-1"
        required
        rules={[{ required: true }]}
      >
        <Upload
          multiple
          listType="picture-card"
          fileList={imageUrls} 
          onChange={handleUploadFiles}
        >
          {imageUrls.length >= 8 ? null : "Upload"}
        </Upload>
      </Form.Item>

      <Form.Item
        label="Thumbnail"
        className="flex-1"
        required
        rules={[{ required: true }]}
      >
        <Upload
          listType="picture-card"
          fileList={thumbnailUrl} 
          onChange={handleUploadFile}
        >
          {thumbnailUrl.length >= 1 ? null : "Upload"}
        </Upload>
      </Form.Item>

      <NextBack current={current} handleNext={handleNext} handleBack={handleBack} />
    </Form>
  );
};

export default VisualInfo;
