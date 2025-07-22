function Collage({ data }) {

    return (
        <div style={{
            backgroundColor: "white",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
            borderBottom: "2px solid #000",
            color: "black",
        }}>
            <h2>collageName: {data.collageName}</h2>
            <ul>
                <li>
                    <h4>city: {data.city}</h4>
                </li>
                <li>
                    <h4>website: {data.website}</h4>
                </li>
            </ul>
            <h3>students</h3>
            {
                data.student.map((student) => (
                    <ul>
                        <li>name :{student.name}</li>
                        <li>name :{student.age}</li>
                        <li>name :{student.email}</li>
                    </ul>
                ))
            }
        </div>
    )
}


export default Collage;