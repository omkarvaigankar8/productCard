import React, { useState, useEffect } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { fetchData, submitData } from "../api";
import Form from "../components/Form";
import Dropdown from "../components/Form/Dropdown";
import TextInput from "../components/Form/TextInput";
import Header from "../components/UIKit/Header";
import Loader from "../components/UIKit/Loader";

export default function CreateProduct() {

  const methods = useForm();
  const { handleSubmit } = methods;
  // let navigate = useNavigate();

  const onSubmit = data => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    data.category = data.category.value;
    let formattedData = Object.assign({}, data, { developerEmail: process.env.REACT_APP_EMAIL })
    submitData((res) => {
    }, 'products', formattedData)
    setLoading(false)
    setSubmitted(true)
  };
  const [categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    fetchData((data) => {
      setCategories(data.data.categories)
    }, 'categories')
    setLoading(false)
  }, [])

  return (
    <div className="App">
      <Header />
      {submitted ? (
        <div className="popup">
          <h1>Product Added!!!</h1>
          <div className="buttons">
          <button className={"btn button"}  onClick={() => {
            setSubmitted(false)
            window.location.reload();
          }}><span className="span-btn">Create Another Product</span></button>
         
                    <Link to={'/'}><button className={"btn button"} onClick={() => {
            setSubmitted(false)
          }}><span className="span-btn">Go to Homepage</span></button></Link>
          </div>
        </div>
      ) : (
        <>
          {loading ? (
            <Loader loading={true} />
          ) : (
            <div className="container">
              <FormProvider {...methods} >
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <h2>Create Product</h2>
                  <TextInput name={'name'} placeholder={"Name"} type={"text"} validationRules={{ required: true }} />
                  <TextInput name={'description'} placeholder={"Description"} type={"textarea"} validationRules={{ required: true }} />
                  <Dropdown name="category" placeholder={"Select a Category"} data={categories} validationRules={{ required: true }} />
                  <TextInput name={'avatar'} placeholder={"Avatar"} type={"text"} validationRules={{ required: true }} />
                  <TextInput name={'price'} placeholder={"Price"} type={"number"} validationRules={{ required: true }} />
                  <button className={"btn button"} type="submit"><span className="span-btn">SUBMIT</span></ button>
                </Form>
              </FormProvider>
            </div>
          )}
        </>
      )}
    </div>
  );
}