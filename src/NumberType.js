import React from "react";

const NumberType = (props) => {
    const {numberItems, setNumberItems} = props;

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...numberItems];
        list[index][name] = value;
        setNumberItems(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...numberItems];
        list.splice(index, 1);
        setNumberItems(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setNumberItems([...numberItems, { placeholder: "", min: "", max: "" }]);
    };

    return (
        <div className="number-type">
            {numberItems.map((x, i) => {
                return (
                    <div key={i} className="form-box">
                        <small>Option {i + 1}</small>
                        <div className="form-inline">
                            <input
                                text="text"
                                name="placeholder"
                                placeholder="Placeholder"
                                value={x.placeholder}
                                onChange={e => handleInputChange(e, i)}
                            />
                            <input
                                text="text"
                                className="ml10"
                                name="min"
                                placeholder="Min"
                                value={x.min}
                                onChange={e => handleInputChange(e, i)}
                            />
                            <input
                                text="text"
                                className="ml10"
                                name="max"
                                placeholder="Max"
                                value={x.max}
                                onChange={e => handleInputChange(e, i)}
                            />
                            <div className="btn-box">
                                {numberItems.length !== 1 && <button
                                    className="mr10"
                                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                            </div>
                        </div>
                        <div className="add-btn-box">
                        {numberItems.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default NumberType;
