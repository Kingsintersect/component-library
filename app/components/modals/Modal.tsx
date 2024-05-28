import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { FC, ReactNode } from 'react'

interface IModalProps {
    isOpen: boolean;
    // onClose: React.MouseEvent;
    onClose: any;
    children?: ReactNode;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${isOpen ? "visible bg-black/50" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`relative bg-white rounded-xl shadow p-6 transition-all  ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 px-2 py-1 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 text-lg'
                >
                    <XMarkIcon width={25} />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal