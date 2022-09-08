import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CategoryApi(token) {
  const [category, setCategory] = useState([])

  useEffect(() => {
    if (token) {
      // read category
      const getCategory = async () => {
        const res = await axios.get(`/api/v1/category/getAll/`, {
          headers: { Authorization: token }
        })
        setCategory(res.data.categories)
      }
      getCategory()
    }
  }, [token])

  return {
    categories: [category, setCategory]
  }
}

export default CategoryApi