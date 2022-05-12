import React, {useEffect} from 'react';
import Select from "react-select";

const SelectComponent = (props) => {
    var options = [{
        value: "Select",
        label: "Select"
    }]

    useEffect(()=>{
        props.optionData.map((data)=>{
            options.push({
                value: data.map_link,
                label: data.language
            })
        })
    })

  return (
    <Select  onChange={(e)=>{props.updateLink(e.value)}} options={options} />
  )
}

export default SelectComponent