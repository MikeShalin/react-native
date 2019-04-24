import { types } from 'mobx-state-tree'

const favoriteType = types.model({
  name: types.string,
  cameras: types.string,
  date: types.string,
  img: types.string,
})

const DataMixin = types
  .model('DataMixin', {
    favorite: types.frozen({
      id: favoriteType
    }),
  })

export default DataMixin
