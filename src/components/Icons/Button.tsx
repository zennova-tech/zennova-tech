function Button({ buttonText }: { buttonText: string }) {
  return (
    <button
      type='submit'
      className='lg:mt-10 mt-6 group bg-secondary text-white w-[226px] h-[56px] 
        hover:w-[255px] rounded-md hover:bg-white hover:text-secondary 
        flex items-center justify-center text-base md:text-lg gap-2 
        mx-auto lg:mx-0 
        transition-all duration-300 ease-in-out'
    >
      {buttonText}
      <span
        className='hidden group-hover:inline-block 
          transition-all duration-300 ease-in-out'
      >
        <img src='/icons/rightrounded.svg' alt='right' className='w-5 h-5' />
      </span>
    </button>
  );
}

export default Button;
