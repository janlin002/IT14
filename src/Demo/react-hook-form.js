import React from 'react'
import { useForm } from 'react-hook-form'

function ReactHookForm() {
  const {
    register, handleSubmit, watch, formState: { errors }, setValue,
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch('exampleRequired')) // 監聽元素
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('exampleRequired', { required: true })} />
      <div>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <input type="submit" />
      <button
        type="button"
        onClick={() => setValue('exampleRequired', '12345')}
      >點擊
      </button>
    </form>
  )
}

export default ReactHookForm

// register -> 註冊事件
// handleSubmit -> 點擊事件
// watch -> 觀看每一特定的值
// formState: { errors } ->
// setValue -> 更改已綁定的值
