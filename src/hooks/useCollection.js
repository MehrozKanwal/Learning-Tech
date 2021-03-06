import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/Config"



export const useCollection = (collection, _query , _orderBy) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current
   

    useEffect((() => {
        let ref = projectFirestore.collection(collection)
        
            if(query){
                ref = ref.where(...query)
            }
            if(orderBy){
                ref = ref.orderBy(...orderBy)
            }

        
       
        const unsubcribe = ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data() , id: doc.id})
            })
            //update State
            setDocuments(results)
            setError(null)
        },(error) => {
            console.log(error)
            setError('could not fetch the data')
        })
        // unSubcribe on unmount
        return  () => unsubcribe()
    }),[collection , query , orderBy])
    return {error , documents}
}