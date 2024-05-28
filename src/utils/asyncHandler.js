// ! Request Handler using Promises

const asyncHandler = (requestHandler) => {
  return(req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
    .catch((err) => next(err));
  };
};

export { asyncHandler }

/* //! Normal function

?? const asyncHandler = () => {} 

!  Higher Order function

?? const asyncHandler = (fn) => {() =>{}} 

?? const asyncHandler = (fn) => { async () =>{}} 

*/

/*
! Request Handler using async & try catch
const asyncHandler = (fn) => async (req, res, next) =>{
    try {
        await fn(req,res,next);
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        });
    }
}

*/