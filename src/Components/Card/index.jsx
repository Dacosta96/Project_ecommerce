function Card(data){

    return(

        <div className='bg-white cursor-pointer w-56 h-60 '>
            <figure className='relative mb-4 w-full h-4/5 '>
                <span className='text-xs absolute bottom-0 left-0 bg-white/65 rounded-lg text-black m-2 px-3'>{data.data.category}</span>
                <img 
                src={data.data.image} 
                alt="camara" className='w-ful h-full object-cover rounded-lg' />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white/65 w-6 h-6 rounded-full m-2'>
                    +
                </div>
            </figure>
            <p className="flex justify-between text-lg  bg-black/10 rounded-lg">
                <span className='text-sm font-light truncate'>{data.data.title}</span>
                <span className='text-lg font-semibold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card