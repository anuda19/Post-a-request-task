import React from 'react'
import './category.css'

const Category = () => {
  return (
    <div className="category_main">
      <div className="category">
          <div>
          <h4 className="category_title">Select Category</h4>
          <p className='category_para'>Select the category which suits you best!</p>
          </div>
          <div className="select_category">
          <select name="category" className='dropdown'>
            <option value="">Select service</option>
          </select>
          </div>
      </div>
      <div className="sub_category">
      <div>
          <h4 className="sub_category_title">Select sub-Category</h4>
          <p className='sub_category_para'>Select the category which suits you best!</p>
          </div>
          <div className="select_category">
          <select name="category" className='sub_dropdown'>
            <option value="">Select-sub service</option>
          </select>
          </div>
      </div>
      </div>
  )
}

export default Category