import { useContext } from 'react'
import { langContext } from '../context/langsContext'

// TEXT TO DISPLAY BY COMPONENT (IN SPANISH OR ENGLISH)

const Text = ({tid}:{tid:string}) => {

    const lang = useContext(langContext)
    return lang.dictionary[tid] || tid
}

export default Text