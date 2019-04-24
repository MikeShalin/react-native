import { types } from 'mobx-state-tree'
import { get } from 'lodash'

import { callApi } from '../../../src/helpers'
import { API_KEY } from '../../../src/constants'

const PhotosApiMixin = types
  .model('PhotosApiMixin')
  .actions(self => ({
    photosSuccess(data) {
      self.setPhotos(data)
      self.setFetching(false)
      self.setError(null)
    },
    photosRequest() {
      self.setFetching(true)
      self.setError(null)
    },
    photosFailure(error) {
      self.setFetching(true)
      self.setError(error)
    },

    fetchPhotos(photosCount) {
      const uri = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${photosCount}&api_key=${API_KEY}`
      console.log('uri', uri)
      const config = {
        sol: photosCount,
        api_key: API_KEY,
      }
      // вернуть

      const lol = [
        {
          'id': 3132,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398380645PRCLF0030000CCAM04010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58870,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398381687EDR_F0030000CCAM05010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58871,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398381577EDR_F0030000CCAM05010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58872,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398381468EDR_F0030000CCAM05010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58873,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398381359EDR_F0030000CCAM05010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58874,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398381250EDR_F0030000CCAM05010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58875,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398381109EDR_F0030000CCAM05010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58876,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398380999EDR_F0030000CCAM05010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58877,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398380890EDR_F0030000CCAM05010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58878,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398380781EDR_F0030000CCAM05010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58879,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398380645EDR_F0030000CCAM04010M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58880,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398381687PRCLF0030000CCAM05010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58881,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398381577PRCLF0030000CCAM05010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58882,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398381468PRCLF0030000CCAM05010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58883,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398381359PRCLF0030000CCAM05010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58884,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398381250PRCLF0030000CCAM05010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58885,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398381109PRCLF0030000CCAM05010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58886,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398380999PRCLF0030000CCAM05010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58887,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398380890PRCLF0030000CCAM05010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 58888,
          'sol': 10,
          'camera': {
            'id': 23,
            'name': 'CHEMCAM',
            'rover_id': 5,
            'full_name': 'Chemistry and Camera Complex',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398380781PRCLF0030000CCAM05010L1.PNG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 3777,
          'sol': 10,
          'camera': {
            'id': 24,
            'name': 'MAHLI',
            'rover_id': 5,
            'full_name': 'Mars Hand Lens Imager',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/msss/00010/mhli/0010MH0000000030100003I01_DXXX.jpg',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 86519,
          'sol': 10,
          'camera': {
            'id': 24,
            'name': 'MAHLI',
            'rover_id': 5,
            'full_name': 'Mars Hand Lens Imager',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/msss/00010/mhli/0010MH0000000030100003E01_DXXX.jpg',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 2095,
          'sol': 10,
          'camera': {
            'id': 26,
            'name': 'NAVCAM',
            'rover_id': 5,
            'full_name': 'Navigation Camera',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ncam/NLA_398380694EDR_F0030000NCAM15000M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 2672,
          'sol': 10,
          'camera': {
            'id': 26,
            'name': 'NAVCAM',
            'rover_id': 5,
            'full_name': 'Navigation Camera',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ncam/NRA_398380694EDR_F0030000NCAM15000M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 32406,
          'sol': 10,
          'camera': {
            'id': 26,
            'name': 'NAVCAM',
            'rover_id': 5,
            'full_name': 'Navigation Camera',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ncam/NLA_398381736EDR_F0030000NCAM15000M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }, {
          'id': 49166,
          'sol': 10,
          'camera': {
            'id': 26,
            'name': 'NAVCAM',
            'rover_id': 5,
            'full_name': 'Navigation Camera',
          },
          'img_src': 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ncam/NRA_398381736EDR_F0030000NCAM15000M_.JPG',
          'earth_date': '2012-08-16',
          'rover': {
            'id': 5,
            'name': 'Curiosity',
            'landing_date': '2012-08-06',
            'launch_date': '2011-11-26',
            'status': 'active',
            'max_sol': 2385,
            'max_date': '2019-04-22',
            'total_photos': 350532,
            'cameras': [{
              'name': 'FHAZ',
              'full_name': 'Front Hazard Avoidance Camera',
            }, {
              'name': 'NAVCAM',
              'full_name': 'Navigation Camera',
            }, {
              'name': 'MAST',
              'full_name': 'Mast Camera',
            }, {
              'name': 'CHEMCAM',
              'full_name': 'Chemistry and Camera Complex',
            }, {
              'name': 'MAHLI',
              'full_name': 'Mars Hand Lens Imager',
            }, {
              'name': 'MARDI',
              'full_name': 'Mars Descent Imager',
            }, { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }],
          },
        }]
      //get(data, 'photos', []))
      self.photosSuccess(lol)
      // callApi({
      //   uri,
      //   config,
      //   onRequest: () => {
      //     self.photosRequest()
      //   },
      //   onSuccess: ({ data }) => {
      //     self.photosSuccess(data)
      //   },
      //   onError: (error) => {
      //     self.photosFailure(error)
      //   },
      // })
    },

  }))

export default PhotosApiMixin
