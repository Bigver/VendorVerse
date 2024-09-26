import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [formData, setFormData]: any[] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/store/page/${params.nameStore}`); // URL ของ API ที่เราสร้างไว้

        const jsonObject = {
          ...response.data,
          image1: JSON.parse(response.data.image1),
          category: JSON.parse(response.data.category)
        };
        setCategory(jsonObject.category)
        setLogoImage(jsonObject.logo)
        setImages(jsonObject.image1)
        setImage2(jsonObject.image2)
        setFormData({
          id: jsonObject.id ,
          name_store: jsonObject.name_store,
          template: jsonObject.template,
          title1: jsonObject.title1,
          detail1: jsonObject.detail1,
          title2: jsonObject.title2,
          detail2: jsonObject.detail2,
          detail_footer: jsonObject.detail_footer,
          link_facebook: jsonObject.link_facebook,
          link_instragram: jsonObject.link_instragram,
          link_line: jsonObject.link_line
        })
        setLoading(false)
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;

    setFormData((prevState: any) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const [select, setSelect] = useState('');

  const [newCategory, setNewCategory] = useState('');
  const [categorys, setCategory] = useState<string[]>([]);
  const handleAddCategory = () => {
    if (newCategory && !categorys.includes(newCategory)) {
      setCategory([...categorys, newCategory]);
      setNewCategory('');
    }
  };
  // ฟังก์ชันลบสีออกจาก array
  const handleRemoveCategory = (color: string) => {
    setCategory(categorys.filter((c) => c !== color));
  };

  const [logoImage, setLogoImage] = useState('');

  const uploadFileLogoHandler = async (e: any) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      const { data } = await axios.post(`${requestMethod}/uploadFile`,
        bodyFormData,
      );
      setLogoImage(data.secure_url);
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Image uploaded fail');
    }
  };

  const [images, setImages] = useState<string[]>([]);

  const handleRemoveImage = (image: string) => {
    setImages(images.filter((c) => c !== image));
  };

  const uploadFileImageHandler = async (e: any) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      const { data } = await axios.post(`${requestMethod}/uploadFile`,
        bodyFormData,
      );
      setImages([...images, data.secure_url]);
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Image uploaded fail');
    }
  };

  const [image2, setImage2] = useState('');

  const uploadFileImage2Handler = async (e: any) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      const { data } = await axios.post(`${requestMethod}/uploadFile`,
        bodyFormData,
      );
      setImage2(data.secure_url);
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Image uploaded fail');
    }
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${requestMethod}/store/page/edit/${formData.id}`, {
        name_store: formData.name_store,
        logo : logoImage,
        template: Number(select),
        image1 : images,
        title1: formData.title1,
        detail1: formData.detail1,
        image2 : image2,
        category : categorys,
        title2: formData.title2,
        detail2: formData.detail2,
        detail_footer: formData.detail_footer,
        link_facebook: formData.link_facebook,
        link_instragram: formData.link_instragram,
        link_line: formData.link_line
      });
      toast.success('update page successfu');
    } catch (error) {
      toast.error('error');
    }
  };


  return (
    <div>
      {loading ? "LOADING" :
        <form  onSubmit={handleSubmit}>
          <div className="">
            <label>name_store</label>
            <input
              type='text'
              name='name_store'
              value={formData.name_store}
              onChange={handleChange}
            />
          </div>
          <div className='input'>
            <div>
              <label htmlFor="">template 1</label>
              <div>
                <input type="radio" name='web' value={1} onChange={(e) => setSelect(e.target.value)} required />
              </div>
            </div>
            <div>
              <label htmlFor="">template 2</label>
              <div>
                <input type="radio" name='web' value={2} onChange={(e) => setSelect(e.target.value)} required />
              </div>
            </div>
            <div>
              <label htmlFor="">template 3</label>
              <div>
                <input type="radio" name='web' value={3} onChange={(e) => setSelect(e.target.value)} required />
              </div>
            </div>
          </div>
          <div className="">
            <label>logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={uploadFileLogoHandler}
            />
          </div>
          <div className="">
            <label>title1</label>
            <input
              type='text'
              name='title1'
              value={formData.title1}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label>detail1</label>
            <input
              type='text'
              name='detail1'
              value={formData.detail1}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label>image1</label>
            <input
              type="file"
              accept="image/*"
              onChange={uploadFileImageHandler}
            />
            {images.map((image, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{image}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveImage(image)}
                  className="bg-red-500 text-white py-2 px-4 mt-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </div>
          <div className="">
            <label>title2</label>
            <input
              type='text'
              name='title2'
              value={formData.title2}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label>detail2</label>
            <input
              type='text'
              name='detail2'
              value={formData.detail2}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label>image2</label>
            <input
              type="file"
              accept="image/*"
              onChange={uploadFileImage2Handler}
            />
          </div>
          <div className="">
            <div>
              <label>category</label>
              <input
                type='text'
                name='category'
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button
                type="button"
                onClick={handleAddCategory}
              >Add</button>
            </div>
            <div className="show">
              {categorys.length > 0 && (
                <div className="mb-4 mt-1 p-2">
                  <ul className="list-disc list-inside">
                    {categorys.map((category, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span>{category}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveCategory(category)}
                          className="bg-red-500 text-white py-2 px-4 mt-2 rounded hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <label>detail_footer</label>
            <input
              type='text'
              name='detail_footer'
              value={formData.detail_footer}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label>link_facebook</label>
            <input
              type='text'
              name='link_facebook'
              value={formData.link_facebook}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label>link_instragram</label>
            <input
              type='text'
              name='link_instragram'
              value={formData.link_instragram}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label>link_line</label>
            <input
              type='text'
              name='link_line'
              value={formData.link_line}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      }
    </div>
  );
};

export default EditPage;
