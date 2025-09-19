'use client';
import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { removeEmployee } from '../lib/action';
import toast from 'react-hot-toast';
import { Loader2Icon } from 'lucide-react';

export default function RemoveButton({ id }) {
  const [isPending, startTransition] = useTransition();

  const handleRemove = () => {
    startTransition(async () => {
      try {
        await removeEmployee(id);
        toast.success('Employee removed successfully');
      } catch (err) {
        toast.error(err.message)
      }
    })

  }

  return (
    <div>
      {isPending ?
        <Button size="sm" disabled>
          <Loader2Icon className="animate-spin" />
          Remove
        </Button> :
        <Button onClick={handleRemove} size="sm">Remove</Button>}
    </div>
  )
}