function MyAccount() {
  

  return (
    <>
          <div className="flex flex-col  border mt-32 w-1/5">
        <h1 className="font-medium text-xl pb-5 text-center">My Account</h1>

          <div className="flex mx-4 items-center">
            <label className="font-medium text-lg ">Name:</label>
            <p className="underline rounded-lg ml-2">Juan Perez </p>
          </div>

          <div className="flex mx-4 items-center">
            <label className="font-medium text-lg ">Email:</label>
            <p className="underline rounded-lg ml-2">JuanPerez@gmail </p>
          </div>
          
          <div className="flex mx-4 items-center mb-8">
            <label className="font-medium text-lg ">Password:</label>
            <p className="underline rounded-lg ml-2">12345 </p>
          </div>
          
          

          <button
          className="bg-black py-3 w-11/12 text-white rounded-lg mb-4 mx-4 "
    
          >
          Edit
        </button>

      </div>
      
    </>
  )
}

export default MyAccount
