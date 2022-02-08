import { useState, useEffect } from "react"
import '../firebase/Config'
import { projectAuth , projectStorage, projectFirestore} from "../firebase/Config"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error , setError] = useState(null)
    const [isPending , setIsPending] = useState(false)
    const {dispatch} = useAuthContext()

    const signup = async(email, password, displayName, thumbnail, categorytype)  => {
        setError(null)
        setIsPending(true)
        
        try{
          const res =  await projectAuth.createUserWithEmailAndPassword(email , password)
            if(!res){
                throw new Error ('Could not load signUp')
            }
     // upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await projectStorage.ref(uploadPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()

      // add display AND PHOTO_URL name to user
      await res.user.updateProfile({ displayName, photoURL: imgUrl })

         // Use dispatch login acction
          dispatch({type: 'LOGIN', payload: res.user })

          // create a user document
      await projectFirestore.collection('users').doc(res.user.uid).set({          
        displayName,
        photoURL: imgUrl,
        categorytype,
        
      })

        //update state
        if(!isCancelled){
            setError(null)
            setIsPending(false)
         }
        }
        catch(err){
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
               }
        }
    }
    useEffect(() => {
        return () => setIsCancelled(true)

        }
    ,[])
    return {error , isPending , signup}
}