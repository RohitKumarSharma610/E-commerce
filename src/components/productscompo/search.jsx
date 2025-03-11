import React, { useContext, useState } from 'react'
import { productstore } from '../../contextstore/producscontext'
import Singleproduct from './singleproduct'

const search = () => {

  const searchdata = useContext(productstore)
  const [searchshow, setsearchshow] = useState(searchdata)

  function searchcompo(e) {
    const text = e.target.value.toLowerCase()

    const filtered = searchdata.filter((item) => {
      return item.title.toLowerCase().includes(text) ||
        item.category.toLowerCase().includes(text)
    })

    setsearchshow(filtered)

    console.log(filtered)
  }
  console.log(searchdata)

  return (
    <>

      <h1 className='text-3xl font-bold text-center my-3'>Search Items</h1>
      <div className='flex justify-center'>
      <input type="text" onChange={searchcompo} placeholder='search here'  className='border rounded-md p-2 border-black'/>
      </div>
      <div className="flex p-4 justify-center gap-8 flex-wrap">
        {searchshow.length == 0 ?
          
          (

            searchdata.map((item) => {
              return (
                <Singleproduct value={item} />
              )
            })

          )
          :
          (
            searchshow.map((item) => {
              return (
                <Singleproduct value={item} />
              )
            })
          )
        }
      </div>

    </>
  )
}

export default search