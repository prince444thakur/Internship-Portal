import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { data } from 'react-router-dom'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
  {
    filterType:"Location",
    array:["Noida", "Bangalore", "hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType:"Industry",
    array:["Frontend Developer", "Backend Developer", "Data Science", "FullStack Developer"]
  },
  {
    filterType:"Stipend",
    array:["30-60k", "40-60k", "30-80k",  "50-80k"]
  },
]

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (value) =>{
    setSelectedValue(value);
  }
  useEffect(()=>{
    dispatch(setSearchedQuery(selectedValue));
  },[selectedValue]);
  return (
    <div className='w-full bg-gray-300 p-3 rounded-md'>
      <h1 className='font-bold text-md'>Filter Internships:</h1>
      <hr className='mt-3'/>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
          filterData.map((data, index) =>(
            <div>
              <h1 className='font-bold text-lg '>{data.filterType}</h1>
              {
                data.array.map((item, idx) =>{
                  const itemId = `id${index}-${idx}`
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem className="max-w-" value={item} id={itemId}/>
                      <Label htmlFor={itemId}>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard