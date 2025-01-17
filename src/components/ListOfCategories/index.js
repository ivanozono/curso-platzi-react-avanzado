import React from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
import { categories } from '../../../api/db.json'
// import { categories } from '../../InitialState.json'
export const ListOfCategories = () => {
  return (
    <List>
      {categories.map(category => <Item key={category.id}><Category {...category} /></Item>)}
    </List>
  )
}
