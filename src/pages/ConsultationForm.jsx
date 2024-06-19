import React, { useState } from 'react';
import { Input, Textarea } from "@nextui-org/input";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import axios from "axios";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    contactMethod: '',
    comments: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://prescom-api.onrender.com/api/v1/admin/submit', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Data sent successfully:', response.data);
      setIsSuccess(true);
      setModalMessage("Your request was submitted successfully!");
    } catch (error) {
      console.error('Error sending data:', error.message);
      setIsSuccess(false);
      setModalMessage("There was an error submitting your request. Please try again.");
    }

    onOpen(); // Open the modal

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectDescription: '',
      contactMethod: '',
      comments: ''
    });
  };

  const options = [
    { id: 1, choice: 'Phone' },
    { id: 2, choice: 'Whatsapp' },
    { id: 3, choice: 'Email' }
  ];

  return (
    <div>
      <form onSubmit={handleSubmit} className='px-10 py-5 w-full bg-slate-300'>
        <div className='flex flex-wrap gap-4 md:flex-row flex-col'>
          <div className='md:w-[45%]'>
            <Input type="text" id="name" label='Name' placeholder='John Doe' name="name" isRequired value={formData.name} onChange={handleChange} />
          </div>
          <div className='md:w-[45%]'>
            <Input type="email" label='Email' isRequired placeholder='kim@gmail.com' id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className='md:w-[45%]'>
            <Input type="tel" id="phone" name="phone" label='Phone' isRequired placeholder='254-700-000-000' value={formData.phone} onChange={handleChange} />
          </div>
          <div className='md:w-[45%]'>
            <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} label='Company (Optional)' />
          </div>
        </div>
        <div className='flex justify-between py-4 md:flex-row flex-col'>
          <div className='md:w-[45%]'>
            <Select 
              id="contactMethod" 
              name="contactMethod"
              label='Preferred Contact Method' 
              value={formData.contactMethod} 
              onChange={handleChange}
            >
              {options.map((option) => (
                <SelectItem key={option.id} value={option.choice}>
                  {option.choice}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className='py-5 md:w-[45%]'>
          <Textarea 
            id="projectDescription" 
            name="projectDescription" 
            label="Project Description"
            isRequired
            placeholder="Enter your description"
            value={formData.projectDescription} 
            onChange={handleChange} 
          />
        </div>
        <div className='py-5 md:w-1/4'>
          <Textarea 
            id="comments" 
            name="comments" 
            label='Additional Comments/Questions'
            value={formData.comments} 
            onChange={handleChange} 
          />
        </div>
        <div className='flex justify-center'>
          <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-9 py-3" type='submit'>
            Get Quote
          </Button>
        </div>
      </form>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className={`flex flex-col gap-1 ${isSuccess ? 'text-green-500' : 'text-danger'}`}>
          {isSuccess ? 'Success' : 'Error'}
        </ModalHeader>
        <ModalBody>
          <p className={isSuccess ? 'text-green-500' : 'text-danger'}>
            {modalMessage}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>

    </div>
  );
};

export default ConsultationForm;