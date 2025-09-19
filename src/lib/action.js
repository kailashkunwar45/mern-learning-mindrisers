'use server';

import axios from "axios";
import { revalidatePath } from "next/cache";



export async function addEmployee(val) {

  try {
    await axios.post('https://6878a22f63f24f1fdc9ec3af.mockapi.io/employees', val);
    revalidatePath('/');

    return { success: true, message: 'Employee added successfully' }

  } catch (err) {

    return { success: false, message: err.message }

  }

}


export async function updateEmployee(id, val) {

  try {
    await axios.put(`https://6878a22f63f24f1fdc9ec3af.mockapi.io/employees/${id}`, val);
    revalidatePath('/');

    return { success: true, message: 'Employee updated successfully' }

  } catch (err) {

    return { success: false, message: err.message }

  }

}


export async function removeEmployee(id) {

  try {
    await axios.delete(`https://6878a22f63f24f1fdc9ec3af.mockapi.io/employees/${id}`);
    revalidatePath('/');

    return { success: true, message: 'Employee removed successfully' }

  } catch (err) {

    return { success: false, message: err.message }

  }

}
