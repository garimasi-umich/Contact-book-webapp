export default function SearchBar({ value, onChange }) {
    return (
        <div className="card">
            <label htmlFor="search">Search contacts</label>
            <input
                id="search"
                type="search"
                placeholder="Search by name or email..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}