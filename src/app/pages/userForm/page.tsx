'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { userSchema, UserSchema } from './path-to-schema';
import React from 'react';
import { userSchema, UserSchema } from '@/app/zodPage';

const UserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserSchema) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
      <div>
        <label htmlFor="id">תעודת זהות</label>
        <input
          type="text"
          id="id"
          {...register("id")}
          className="border p-2 rounded w-full"
        />
        {errors.id && <p className="text-red-500">{errors.id.message}</p>}
      </div>

      <div>
        <label htmlFor="firstName">שם פרטי</label>
        <input
          type="text"
          id="firstName"
          {...register("firstName")}
          className="border p-2 rounded w-full"
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="lastName">שם משפחה</label>
        <input
          type="text"
          id="lastName"
          {...register("lastName")}
          className="border p-2 rounded w-full"
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="birthDate">תאריך לידה</label>
        <input
          type="date"
          id="birthDate"
          {...register("birthDate")}
          className="border p-2 rounded w-full"
        />
        {errors.birthDate && (
          <p className="text-red-500">{errors.birthDate.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">מייל</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="border p-2 rounded w-full"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        שלח
      </button>
    </form>
  );
};

export default UserForm;
