import React from 'react'

export default function PackageSteps(props) {
    return (<>
    {props.component[props.step]}
    </>    
    )
}
