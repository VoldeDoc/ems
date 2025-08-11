import { useState } from 'react';
import {  axiosAuth } from '../utils/axios';
import { useNavigate } from 'react-router-dom';

const PageManagement = () => {
  const [loading, setLoading] = useState(false);
  const router = useNavigate()
  // Register

  const getPrograms = async () => {
    try {
      setLoading(true);
      const res = await axiosAuth.get("/programs");
      console.log('Programs:', res);
      return res.data
    } catch (error) {
      const resError = error.response?.data;
      const errorMessage = resError?.message || resError?.data;
      console.error(error);
      return Promise.reject(errorMessage || "Error fetching Programs");
    } finally {
      setLoading(false);
    }
  }


  const createPrograms = async (data) => {
    try {
      setLoading(true);
      const res = await axiosAuth.post("/programs", data);
      console.log('Created Program:', res);
      return res.data;
    } catch (error) {
      const resError = error.response?.data;
      const errorMessage = resError?.message || resError?.data;
      console.error(error);
      return Promise.reject(errorMessage || "Error creating Program");
    } finally {
      setLoading(false);
    }
  }

  return {
   getPrograms,
  }

}


export default PageManagement

