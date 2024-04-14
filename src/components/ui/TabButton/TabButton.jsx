import clsx from "clsx";

export default function TabButton({ children, size, isSelected, ...props }) {
    const combinedClassName = clsx(props.className, 'active');
    return (
        <li>
            <button type='button' style={{ width: size }} className={ isSelected ? combinedClassName : props.className } { ...props }>{ children }</button>
        </li>
    )
}