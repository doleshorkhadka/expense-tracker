const FormInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className=' placeholder: mx-auto my-2 w-full rounded border border-base-100 px-3 py-4 outline-none placeholder:text-base placeholder:font-medium placeholder:leading-[150%]'
    />
  )
}

export default FormInput
