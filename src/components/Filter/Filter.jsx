export const Filter = ({value, onChange}) => {
    return (
        <>
            <label htmlFor="filter" style={{ display: "block", marginBottom: "12px" }}>
                Find contacts by name</label>
            <input
            id="filter"
            type="text"
            value={value}
            onChange={onChange} />
        </>
    )
}