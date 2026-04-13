export default function FilterBar() {
    return (
        <div className="filter-container">
            <input placeholder="Search..." />
            <select>
                <option value="">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>

            <select>
                <option value="">All Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
            </select>
        </div>
    );
}