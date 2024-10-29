import { Formik } from 'formik';
import
{ Button,
Input }
from
"antd";

import axios from "axios"
import { useState } from 'react';
function App() {
  const [loading, setLoading] = useState(false)

  const handleSubmit =  async(values) => {
   const inicio = values.dataInicio
   const fim = values.dataFinal

   try {
    setLoading(true)
    await axios.post("http://10.0.0.216:3000/executar-script", {dataInicio:inicio, dataFim:fim})
    setLoading(false)

   } catch (error) {
    console.log(error)
    setLoading(false)
   }
  }
  return (
 <>
  <div className='flex flex-col justify-center items-center h-screen w-full'>
    <h1 className='font-bold font-sans text-2xl py-10'>Coloque as datas de inicio e fim no formato AAAA/MM/DD</h1>
  <Formik
       initialValues={{ dataInicio: null, dataFinal: null }}
       onSubmit={(values)=> handleSubmit(values)}
     >
       {({
         handleSubmit,
        handleChange
       }) => (
         <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-1/3 gap-10'>
           <Input
            type="dataInicio"
            name="dataInicio"
            placeholder='Data Inicio'
          onChange={handleChange}
           />
           <Input
             type="dataFinal"
             name="dataFinal"
             placeholder='Data Final'
          onChange={handleChange}

           />
           <Button type='primary' htmlType="submit" loading={loading}>
             Submit
           </Button>
         </form>
       )}
     </Formik>
  </div>
 </>
  )

   


}

export default App
