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
    // favoriteStore: types.optional(Favorite, {
    //   3132: {
    //     name: 'Curiosity',
    //     cameras: 'CHEMCAM',
    //     date: '2012-08-16',
    //     img: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398380645PRCLF0030000CCAM04010L1.PNG',
    //   },
    //   58870: {
    //     cameras: 'CHEMCAM',
    //     img: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398381687EDR_F0030000CCAM05010M_.JPG',
    //     date: '2012-08-16',
    //     name: 'Curiosity',
    //   },
    // }),
  })
  .views(self => ({
    getModel(name) {
      return self[name]
    },
  }))

export default RootStore