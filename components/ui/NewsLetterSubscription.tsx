'use client';
import Button from '@components/buttons/Button';
import cn from '@lib/cn'
import React, { ReactNode, useState } from 'react'

// const schema = yup.object().shape({
//     email: yup.string().email('Invalid email').required('Email is required'),
//     password: yup.string().required('Password is required'),
// });

const NewsLetterSubscription = ({ title, className, highlight, highlitColor }: { title: string, className?: string, highlight?: string, highlitColor?: string }) => {
    const [error, setError] = useState('');
    // const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data: any, event: any) => {
        event.preventDefault();
        return;
        try {
            const response = await fetch('http://localhost:4000/api/auth/login', data);
            const value = response.status;
            if (value) {
                setError('');
                // router.push('/contacts');
            } else {
                setError('Incorrect Credentials');
            }
        } catch (error: any) {
            setError(error.response.data.message);
        }
    };

    return (
        <section className={cn('w-full py-20 text-center space-y-10', className)} >
            <h1 className="heading sm:text-xl md:text-5xl font-bold">
                {title} {" "}
                {highlight && <span className={cn("text-purple-400", highlitColor)}>{highlight}</span>}
            </h1>
            <form onSubmit={() => onSubmit} className="flex items-center justify-center w-full">
                <div className='w-full mx-[20px] sm:w-3/4 sm:mx-auto md:w-1/2'>
                    <input
                        // {...register('email')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="youremail@domain.com" />
                    {/* {errors.email && <p className='text-red-500 font-semi-bold'>{errors.email.message}</p>} */}
                    <p className="flex items-center justify-center mt-6">
                        <Button variant={'info'}>Subscribe </Button>
                    </p>
                </div>



            </form>
        </section>
    )
}

export default NewsLetterSubscription