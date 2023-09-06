import React, { useState } from "react";

const CustomSelect =(props)=>{
    const {typeList,selectType,setSelectType} = props;
    const [showList,setShowList] = useState(false)

    const handleListDisplay=()=>{
        setShowList(prev =>!prev)
    }
    const handleOptionClick=(e)=>{
        setSelectType(e)
        setShowList(prev =>!prev)
    }
    return(
        <div className="custom-select-container">
        <div
          className={showList ? "selected-text active" : "selected-text"}
          onClick={handleListDisplay}
        >
          {selectType}
        </div>
        {showList && (
          <ul className="select-options">
            {typeList.map((item) => {
              return (
                <li
                  className="custom-select-option"
                  data-name={item?.name}
                  key={item?.id}
                  onClick={()=>handleOptionClick(item?.name)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    )
}
export default CustomSelect;