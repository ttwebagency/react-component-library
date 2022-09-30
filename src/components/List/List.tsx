import React, { FC } from "react";

type ListProps = {
    type: "ul" | "ol",
    list: []
};

export const List: FC<ListProps> = ({ type, list }) => {

    // Loop over an object and map to an individual item in the list with a unique key
    const listItems = list.map(( item, index ) =>
        <li key={index}>{item}</li>
    );

    // Check the list type prop value to render as an ordered list
    const listType = type && (type.includes("ol"));

    // This method will render the list as an ordered list
    const renderOrderedList = () =>
        <ol>
            {listItems}
        </ol>

    // This method will render the list as an unordered list
    const renderUnorderedList = () =>
        <ul>
            {listItems}
        </ul>

    return (
        /*
            If 'type' prop has the value:
            'ol', an ordered list will be rendered,
            'ul', an unordered list will be rendered.
        */
        listType ? renderOrderedList() : renderUnorderedList()
    )
};