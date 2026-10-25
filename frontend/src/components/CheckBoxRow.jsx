function CheckboxRow({
    label,
    checked,
    onChange,
    testid,
}) {
    return (
        <label
            className="flex items-center gap-2 text-sm cursor-pointer text-white/75 hover:text-white"
            data-testid={testid}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="accent-primary w-4 h-4"
            />
            <span>{label}</span>
        </label>
    );
}

export default CheckboxRow;
