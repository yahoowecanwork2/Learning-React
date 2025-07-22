import Collage from "./collage";

function Nested() {
    const collageData = [
        {
            collageName: "dpg degree collage",
            city: "gurgaon",
            website: "dpgdegreecollage.com",
            student: [
                {
                    name: "neha",
                    age: 21,
                    email: "neha123@gmail"
                }
            ]
        },
        {
            collageName: "Delhi univercity",
            city: "delhi",
            website: "du.com",
            student: [
                {
                    name: "vasu",
                    age: 18,
                    email: "neha123@gmail"
                }
            ]
        },
        {
            collageName: "amity collage",
            city: "noida",
            website: "amitycollage.com",
            student: [
                {
                    name: "shalu",
                    age: 21,
                    email: "shalu123@gmail"
                }
            ]
        },

    ]
    return (
        <div>
            <h1></h1>
            {
                collageData.map((data, index) => (
                    <div key={index.id}>

                        <Collage data={data} />
                    </div>
                )
                )}
        </div>
    )
}


export default Nested;