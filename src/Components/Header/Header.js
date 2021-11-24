import React,{memo} from 'react'

const Header = ({content}) => {
    console.log("header rendered")
    return (
        <div>
            <h2>{content}</h2>
        </div>
    )
}

export default memo(Header)
