import { asyncHandler } from './async.js'
import jwt from 'jsonwebtoken'
import { ErrorResponse } from '../utils/index.js'
import { Mentor } from '../models/index.js'

// use it wherever required !
const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded)
    // change for the type of user
    req.user = await Mentor.findById(decoded.id)
    next()
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }
})
export { protect }
