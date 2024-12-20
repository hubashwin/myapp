import { ArrowBigLeft, MoveLeft } from 'lucide-react'
import * as ai from 'react-icons/ai'

export default function Cart() {
    return (
        <>
            <div className='bg-slate-200'>
                <MoveLeft className='ml-2 inline hover:text-gray-600 cursor-pointer' />
                <h2 className='ml-5 inline hover:text-gray-600 cursor-pointer'>Continue Shopping</h2>
            </div>
        </>
    )
}