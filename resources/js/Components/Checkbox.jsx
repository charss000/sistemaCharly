export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-primary-900 text-primary-300 shadow-sm focus:none bg-primary-900 ' +
                className
            }
        />
    );
}
