import { types } from 'mobx-state-tree'

import Photos from '../Photos'
import Favorite from '../Favorite'

const RootStore = types
  .model('RootStore', {
    photosStore: types.optional(Photos, {
      photos: [],
      isFetching: false,
      error: null,
    }),
    favoriteStore: types.optional(Favorite, {
      favorite: {},
      lastPhoto: null,
    }),
  })

export default RootStore