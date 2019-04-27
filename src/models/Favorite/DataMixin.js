import { types } from 'mobx-state-tree'

const lastPhotoType = types.model({
  id: types.number,
  name: types.string,
  short: types.string,
})

const DataMixin = types
  .model('DataMixin', {
    favorite: types.frozen(),
    lastPhoto: types.union(types.frozen(lastPhotoType), types.null),
  })

export default DataMixin
