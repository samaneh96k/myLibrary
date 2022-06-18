import data from "./../../server/data";
import { Form, Input, InputNumber, Divider, Button, Select } from "antd";
import moment from "moment-jalaali";
import UploadComponent from "../upload";
import axios from "axios";
import { useRouter } from "next/router";
import styles from '../createBook/createBook.module.css'
const { Option } = Select;
const EditBook = ({Data}) => {

  const [form] = Form.useForm();
  return ( <div className={styles.form_div}>
    <h4>ویرایش خلاصه ی کتاب</h4>
    <Form form={form} layout="vertical"
      onFinish={(values) => {
    
        
        axios
          .put("http://localhost:3000/api/book/update", { values: { ...values, bookId: Data._id } })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
       
      }
      }
  
    onFinishFailed={(err) => {
      console.log(err);
          }}
          initialValues={{
            bookName: Data.bookName,
            text: Data.text,
            writer: Data.writer,
            madeYear: Data.madeYear,
            category: Data.category,
            Photo:Data.Photo._id,
            
          }}
      className="mb-3 rtl text-right">
        <Form.Item
          label="عنوان کتاب"
          name="bookName"
          rules={[{ required: true, message: "نام کتاب را وارد کنید!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label=" خلاصه کتاب"
          name="text"
          rules={[{ required: true, message: "خلاصه کتاب  را وارد کنید!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="نام نویسنده  "
          name="writer"
          rules={[{ required: true, message: " نام نویسنده را وارد کنید!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="سال انتشار"
          name="madeYear"
          rules={[{ required: true, message: "سال انتشار کتاب را وارد کنید!" }]}
        >
          <InputNumber
            className="w-100"
            min={1330}
            // max={parseInt(moment(new Date()).format("jYYYY")) + 1}
          max={2020}
          />
        </Form.Item>

        <Form.Item
          label="دسته بندی کتاب "
          name="category"
          rules={[{ required: true, message: "دسته بندی کتاب  را وارد کنید!" }]}
        >
       
         <Select
            defaultValue="انتخاب کنید"
            style={{
              width: "100%"
            }}
          >
            {data.cats.map((v, index) =>
              <Option
                style={{
                  width: "20%",
                
                }}
                value={v.value}
                key={index}
              >
                {v.text}
              </Option>
            )}
          </Select>
       
        </Form.Item>
        <Form.Item
          className="text-center"
          label="بارگذاری عکس جلد کتاب"
          name="Photo"
          rules={[
            { required: true, message: "عکس جلد کتاب را بارگذاری کنید!" }
          ]}
        >
            <UploadComponent img={true} key="Photo" afterUpload={ value=>form.setFieldsValue({Photo: value[0]._id})}/>
        </Form.Item>

        <Form.Item>
          <Button  htmlType="submit" size="large" >
            ویرایش کتاب
          </Button>
      
        </Form.Item>
      </Form>
    
</div>
  );
};

export default EditBook;
