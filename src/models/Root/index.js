import Photos from '../Photos'
import Favorite from '../Favorite'
import { types } from 'mobx-state-tree'

const RootStore = types
  .model('RootStore', {
    photosStore: types.optional(Photos, {
      photos: [],
      isFetching: false,
      error: null,
    }),
    favoriteStore: types.optional(Favorite, {
      favorite: {},
    }),
  })

export default RootStore