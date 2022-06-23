import data from "./../../server/data";
import { Form, Input, InputNumber, Divider, Button, Select } from "antd";
import moment from "moment-jalaali";
import UploadComponent from "../upload";
import axios from "axios";
import styles from './createBook.module.css'
import { toast } from "react-toastify";
const { Option } = Select;
const CreateBook = () => {
  const [form] = Form.useForm();
  return (
  <div className={styles.form_div}>
     <h4>افزودن خلاصه ی جدید</h4>
    <Form form={form} layout="vertical"
    onFinish={(values) => {
      console.log(values);
      axios
       .post("http://localhost:3000/api/book/createBook", { values })
       .then((res) => {console.log(res)
      
          toast.success("کتاب مورد نظر با موفقیت بارگذاری شد!");
          
      })
       .catch((err) => console.log(err));
    }}
    onFinishFailed={(err) => {
      console.log(err);
    }}
      className="mb-3 rtl text-right">
        <Form.Item
          data-testid="bookName"
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
            max={parseInt(moment(new Date()).format("jYYYY")) + 1}
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
          label="بارگذاری عکس جلد کتاب(بهتر از حجم عکس پایین 100kbباشد)"
          name="Photo"
          rules={[
            { required: true, message: "عکس جلد کتاب را بارگذاری کنید!" }
          ]}
        >
            <UploadComponent img={true} key="Photo" afterUpload={ value=>form.setFieldsValue({Photo: value[0]._id})}/>
        </Form.Item>

        <Form.Item>
          <Button  htmlType="submit" size="large">
            ایجاد کتاب
          </Button>
        </Form.Item>
      </Form>
</div>
  );
};

export default CreateBook;
