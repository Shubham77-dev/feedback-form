import React  from "react";

const TextareaType = (props) => {
    const {textareaItems, setTextareaItems} = props;

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...textareaItems];
        list[index][name] = value;
        setTextareaItems(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...textareaItems];
        list.splice(index, 1);
        setTextareaItems(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setTextareaItems([...textareaItems, { placeholder: "", min: "", max: "", rows: "" }]);
    };

    return (
        <div className="number-type">
            {textareaItems.map((x, i) => {
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
                            <input
                                text="text"
                                className="ml10"
                                name="rows"
                                placeholder="Rows"
                                value={x.rows}
                                onChange={e => handleInputChange(e, i)}
                            />
                            <div className="btn-box">
                                {textareaItems.length !== 1 && <button
                                    className="mr10"
                                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                                {textareaItems.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TextareaType;
